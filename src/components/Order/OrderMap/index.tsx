import { Map, Placemark, YMaps, withYMaps } from 'react-yandex-maps';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderFormChange, setPlacemarkPos, setCrewsInfo } from '../../../actions/orderActions';
import { State } from '../../../reducers';
import { MapPosition } from '../../../reducers/orderReducer';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getAddress, findCrews, getAddressString } from '../OrderService';
import { CrewsMarks } from '../Crews';

function OrderMap({ width, height }: {width: string; height: string;}) {
    const dispatch = useDispatch();
    const state: State = useSelector((state) => state || []);
    const { order: { map: { clickPlacemark }, form } } = state;

    const [yMaps, setYMaps] = useState<any>();
    const [mapInstance, setMapInstance] = useState<any>();
    const [suggestView, setSuggestView] = useState<any>();

    useEffect(() => {
        if (suggestView) {
            const addSuggestItem = async (e) => {
                const itemValue = e.get('item').value;
                const result = await yMaps.geocode(itemValue);
                const firstGeoObject = result.geoObjects.get(0);

                const addressString = getAddressString(firstGeoObject);
                const coords = firstGeoObject.geometry.getCoordinates();
                const bounds = firstGeoObject.properties.get('boundedBy');

                if (addressString) {
                    dispatch(setPlacemarkPos(coords));
                    dispatch(orderFormChange('address', addressString));
                    dispatch(orderFormChange('isValid', true));
                    
                    // Масштабируем под координаты из поиска.
                    mapInstance.setBounds(bounds);
                    // ymaps.coordSystem.geo.getDistance([56.873259, 53.238826], [56.873259, 56.238826]);
                } else {
                    dispatch(orderFormChange('address', ''));
                    dispatch(orderFormChange('isValid', false));
                }
            }

            suggestView.events.add('select', addSuggestItem);

            return () => {
                suggestView.events.remove('select', addSuggestItem);
            };
        }
    }, [suggestView]);

    const onLoad = async (ymaps) => {
        const suggestView = new ymaps.SuggestView('suggest', {
            provider: {
                    suggest: (request) => {
                    return ymaps.suggest(request);  
                }
            }
        });

        setSuggestView(suggestView);
        setYMaps(ymaps);
    };

    const onMapClick = (e) => {
        const clickPos: MapPosition = e.get('coords');
        dispatch(setPlacemarkPos(clickPos));
        
        if (yMaps && clickPos) {
            (async () => {
                if (!clickPlacemark.position) {
                    return;
                }

                dispatch(orderFormChange('address', 'Поиск...'));
                // Получаем адрес нажатой точки на карте.
                const address = await getAddress(yMaps, clickPlacemark.position);

                if (address) {
                    dispatch(orderFormChange('address', address));
                    dispatch(orderFormChange('isValid', true));
                } else {
                    dispatch(setPlacemarkPos(clickPos, {text: 'Адрес не найден', color: 'red'}));
                    dispatch(orderFormChange('address', ''));
                    dispatch(orderFormChange('isValid', false));
                }

                if (!clickPlacemark.position) {
                    return;
                }
            })();
        }
    };

    return (
        <div>
            { !yMaps && <CircularProgress /> }
            <Map
            
                width={ width }
                height={ height }
                onLoad={ onLoad }
                onClick={ onMapClick }
                defaultState={{
                    controls: ['zoomControl', 'fullscreenControl'],
                    center: [56.873259, 53.238826],
                    zoom: 9,
                }}
                instanceRef={(i) => {
                    if (i) {
                        setMapInstance(i);
                    }
                }}
                modules={ ['control.ZoomControl', 'control.FullscreenControl'] }
            >
                { clickPlacemark.position && 
                    <Placemark
                        geometry={ clickPlacemark.position } 
                        properties={{
                            iconCaption: clickPlacemark.text,
                        }}
                        modules={['geoObject.addon.balloon']}
                        options={ { iconColor: clickPlacemark.color } }
                    />
                }
                <CrewsMarks />
            </Map>
        </div>
    );
}

export {
    OrderMap,
}