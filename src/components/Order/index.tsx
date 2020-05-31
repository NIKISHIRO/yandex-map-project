import React from "react";
import { Grid, TextField, Button, Snackbar } from '@material-ui/core';
import './order.css';
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { SelectCrew } from "./SelectCrew";
import { useDispatch, useSelector } from 'react-redux';
import { orderFormChange } from "../../actions/orderActions";
import { State } from "../../reducers";
import { OrderMap } from "./OrderMap";
import { OrderCrews } from "./Crews";
import { useKeyPress } from '@umijs/hooks';
import { createOrder, CrewAdresses } from "./OrderService";

const cssOrderDetailBlock: CSSProperties = {
    marginTop: '1rem',
};

const cssOrderDetailBlockLeft: CSSProperties = {
    marginRight: '1rem',
    display: 'inline-block',
    width: '10rem',
    textAlign: 'right'
};

const cssOrderDetailBlockRight: CSSProperties = {
    display: 'inline-block',
};

type SnackType = {
    open: boolean;
    vertical: 'top' | 'bottom';
    horizontal: 'left' |'center' | 'right';
};

function Order() {
    const state: State = useSelector((state) => state || []);
    const { form, selectCrew } = state.order;
    const dispatch = useDispatch();

    const [snackState, setSnackState] = React.useState<SnackType>({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    const [snackDescr, setSnackDescr] = React.useState<string>('');
    const [snackOpen, setSnackOpen] = React.useState<boolean>(false);

    const { vertical, horizontal, open } = snackState;

    const onInputChange = (event: any) => {
        const { name, value } = event.target;
        dispatch(orderFormChange(name, value));
    };

    const onClick = (e) => {
        if (!state.order.selectCrew) {
            return;
        }

        const source_time = Date.now();
        const crew_id = state.order.selectCrew.crew_id;
        const addresses: CrewAdresses[] = [{
            address: state.order.form.address,
            lat: state.order.selectCrew.lat,
            lon: state.order.selectCrew.lon,
        }];

        const result = createOrder({
            source_time,
            crew_id,
            addresses,
        });

        setSnackDescr(result.descr);
        setSnackOpen(true);
    };

    const onSnackClose = () => {
        setSnackOpen(false);
    }

    return (
        <div className='order'>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                key={`${vertical},${horizontal}`}
                open={ snackOpen }
                message={ snackDescr }
                autoHideDuration={ 4000 }
                onClose={ onSnackClose }
            />

            <Grid container justify='center'> 
                <Grid item xs={ 10 }>
                    <div style={ {margin: '1rem 0'} }>
                        <div>Детали заказа</div>
                        <hr />
                        <div style={ cssOrderDetailBlock }>
                            <span style={ cssOrderDetailBlockLeft }>Откуда:</span>
                            <form style={ cssOrderDetailBlockRight } onSubmit={ (e) => e.preventDefault() }>
                                <TextField 
                                    style={ {width: '30rem'} }
                                    type='text' 
                                    required
                                    error={ !form.isValid }
                                    id="suggest"
                                    label="Введите корректный адрес"
                                    name='address'
                                    onChange={ onInputChange }
                                    value={ state.order.form.address }
                                />
                            </form>
                        </div>
                        <div style={ cssOrderDetailBlock }>
                            <span style={ cssOrderDetailBlockLeft }>Подходящий экипаж:</span>
                            <div style={ cssOrderDetailBlockRight }>
                                { selectCrew ? 
                                    <SelectCrew 
                                        title={ selectCrew.car_model } 
                                        color={ selectCrew.car_color } 
                                        number={ selectCrew.car_number } /> 
                                    : 
                                    <span>Введите адрес или выберите на карте.</span> }
                            </div>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={ 7 }>
                    <div className="order-map">
                        <OrderMap width={ '95%' } height={ '20rem' } />
                    </div>
                </Grid>
                <Grid item xs={ 3 }>
                    <OrderCrews />
                </Grid>
                <Grid item xs={ 10 } style={{textAlign: 'center'}}>
                    <Button 
                        onClick={ onClick }
                        variant="outlined" 
                        color="primary" 
                        style={ {marginTop: '1rem', width: '25%'} }
                        disabled={ !state.order.form.isValid }
                    >
                        Заказать
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}

export {
    Order,
}