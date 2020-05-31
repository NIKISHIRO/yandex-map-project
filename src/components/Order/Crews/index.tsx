import { CSSProperties, useEffect } from "react";
import React from "react";
import { FaTaxi } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useHover } from '@umijs/hooks';
import { State } from "../../../reducers";
import { useDispatch, useSelector } from 'react-redux';
import { findCrews } from "../OrderService";
import { setCrewsInfo, setSelectCrew } from "../../../actions/orderActions";
import { Placemark } from "react-yandex-maps";

const cssOrderCrews: CSSProperties = {
    border: '1px solid #000',
    height: '20rem',
    overflowY: 'auto',
};

const cssOrderCrew = (isHover): CSSProperties => {
    return {
        cursor: 'pointer',
        position: 'relative',
        borderBottom: '1px solid #000',
        padding: '.5rem',
        backgroundColor: isHover ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0)',
        color: isHover ? '#fff' : '#000',
    };
};

const cssOrderDistance: CSSProperties = {
    position: 'absolute',
    bottom: '.2rem',
    right: '2rem',
};

const cssArrowRight: CSSProperties = {
    position: 'absolute',
    right: '.3rem',
    bottom: '.6rem',
    fontSize: '1.4rem'
};

function CrewsMarks() {
    const state: State = useSelector((state) => state || []);
    const { crewsInfo } = state.order;
    
    return (
        <div>
            { crewsInfo.map(c => {
                return <Placemark
                    key={ c.crew_id }
                    geometry={ [c.lat, c.lon] }
                    options={ { iconColor: 'green' } }
                />
            }) }
        </div>
    );
}

function OrderCrew({ id, name, color, distance }: {id: number, name: string; color: string; distance: number;}) {
    const [isHover, hoverRef] = useHover<HTMLDivElement>();
    const state: State = useSelector((state) => state || []);
    const dispatch = useDispatch();

    const onSelectCrew = (id: number) => {
        dispatch(setSelectCrew(state.order.crewsInfo[id]));
    };

    return (
        <div style={ cssOrderCrew(isHover) } ref={ hoverRef } onClick={ () => onSelectCrew(id) }>
            <div style={ { display: 'inline-block', marginRight: '2rem' } }>
                <FaTaxi style={ { fontSize: '2rem', color: isHover ? '#fff' : '#c0c0c0' } } />
            </div>
            <div style={ { display: 'inline-block' } }>
                <div style={ { fontWeight: 500 } }>{ name }</div>
                <div style={ { fontSize: '.7rem' } }>{ color }</div>
            </div>
            <div style={ cssOrderDistance }>
                { `${distance} м` }
            </div>
            <div style={ cssArrowRight }>
                <IoIosArrowForward />
            </div>
        </div>
    );
}

function OrderCrews() {
    const state: State = useSelector((state) => state || []);
    const dispatch = useDispatch();
    
    const crewsInfo = state.order.crewsInfo;
    const { clickPlacemark } = state.order.map;
    const { address } = state.order.form;

    useEffect(() => {
        console.log('order-useEffect', clickPlacemark.position, state.order.form.isValid);
        (async() => {
            // Получение экипажей.
            if (clickPlacemark.position && state.order.form.isValid && state.order.form.address) {
                const crews = await findCrews(address, clickPlacemark.position);
                dispatch(setCrewsInfo(crews.data.crews_info));
                dispatch(setSelectCrew(crews.data.crews_info[0]));
            } else {
                dispatch(setCrewsInfo([]));
            }
        })();
    }, [state.order.form.address, state.order.form.isValid]);

    return (
        <div>
            <div style={ cssOrderCrews }>
                {
                    crewsInfo
                    .sort((a, b) => a.distance - b.distance)
                    .map((c, id) => <OrderCrew key={ c.crew_id } id={ id } name={ c.car_model } color={ c.car_color } distance={ c.distance } />) 
                }
            </div>
        </div>
    );
}

export {
    CrewsMarks,
    OrderCrews,
    OrderCrew,
}