import React, { CSSProperties } from "react";
import { FaTaxi } from 'react-icons/fa';

const cssSelectCrew: CSSProperties = {
    border: '1px solid #000',
    padding: '.5rem',
    minWidth: '11rem',
};

const cssSelectCrewLeft: CSSProperties = {
    marginRight: '1rem',
    display: 'inline-block',
};

const cssSelectCrewRight: CSSProperties = {
    verticalAlign: 'top',
    display: 'inline-block',
};

const cssSelectCrewTitle: CSSProperties = {
    fontWeight: 800,
    marginBottom: '.3rem',
};

const cssSelectCrewColor: CSSProperties = {
    fontSize: '.8rem'
};

const cssSelectCrewNumber: CSSProperties = {
    border: '1px solid #000',
    padding: '.4rem',
    borderRadius: '5px',
};

function SelectCrew({title, color, number}: {title: string, color: string, number: string}) {
    return (
        <div className='select-crew' style={ cssSelectCrew }>
            <span style={ cssSelectCrewLeft }>
                <FaTaxi style={ { fontSize: '2rem', color: '#c0c0c0' } } />
            </span>

            <span style={ cssSelectCrewRight }>
                <div style={ cssSelectCrewTitle }>{ title }</div>
                <div style={ cssSelectCrewColor }>{ color }</div>
                <div style={ cssSelectCrewNumber }>{ number }</div>
            </span>
        </div>
    );
}

export {
    SelectCrew,
}