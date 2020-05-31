import React from "react";
import { store } from "../../config/store";
import { Provider } from 'react-redux';
import { App } from "../../App";
import { YMaps } from 'react-yandex-maps';

function Root() {
    return (
        <Provider store={ store }>
            <YMaps
                query={{
                    load: 'package.full',
                    apikey: "41265fe6-14d2-4266-8fa2-211b392338c8",
                }}
            >
                <App />
            </YMaps>
        </Provider>
    );
}

export {
    Root,
};