import { MapPosition } from "../../reducers/orderReducer";

export type CrewAdresses = {
    address: string;
    lat: number;
    lon: number;
};

export type CrewInfo = {
    crew_id: number;
    car_mark: string;
    car_model: string;
    car_color: string;
    car_number: string;
    driver_name: string;
    driver_phone: string;
    lat: number;
    lon: number;
    distance: number;
};

type CrewsData = {
    code: number;
    descr: string;
    data: {
        crews_info: CrewInfo[];
    };
};

type SearchCrewData = {
    source_time: number; // формат времени ГГГГММДДччммсс.
    addresses: CrewAdresses[];
};

type OrderCrewData = {
    source_time: number;
    crew_id: number;
    addresses: CrewAdresses[];
};

export type OrderResponse = {
    code: number;
    descr: string;
    data: {
        order_id: number;
    };
};  

async function getCrewsData(data: SearchCrewData): Promise<CrewsData> {
    return new Promise((res, rej) => {
        res({
            // прикладной код ошибки.
            "code": 0,
            // описание.
            "descr": "OK",
            "data": {
              "crews_info":[
                {
                  "crew_id": 123,
                  "car_mark": "Chevrolet",
                  "car_model": "Lacetti",
                  "car_color": "синий",
                  "car_number": "Е234КУ",
                  "driver_name": "Деточкин",
                  "driver_phone": "7788",
                  "lat": 56.855532,
                  "lon": 53.217462,
                  "distance": 300
                },
                {
                  "crew_id": 125,
                  "car_mark": "Hyundai",
                  "car_model": "Solaris",
                  "car_color": "белый",
                  "car_number": "Ф567АС",
                  "driver_name": "Петров",
                  "driver_phone": "8899",
                  "lat": 56.860581,
                  "lon": 53.209223,
                  "distance": 123
                },
              ],
            },
        });
    });
}

function createOrder({ source_time, crew_id, addresses }: OrderCrewData): OrderResponse {
    console.log('createOrder source_time, crew_id, addresses', source_time, crew_id, addresses);

    return {
        descr: `Создан заказ #${crew_id}.`,
        data: {
            order_id: 12345,
        },
        code: 0,
    };
}

async function findCrews(address: string, position: MapPosition): Promise<CrewsData> {
    // const date = new Date(Date.now());
    // const dateStr = `${date.getFullYear} ${date.getMonth() + 1} ${date.getDay()} ${date.getHours()} ${date.getMinutes()} ${date.getSeconds()}`;

    // ymaps.coordSystem.geo.getDistance([56.873259, 53.238826], [56.873259, 56.238826]);

    const data: SearchCrewData = {
        source_time: Date.now(),
        addresses: [
            {
                address,
                lat: position[0],
                lon: position[1],
            },
        ],
    };

    return await getCrewsData(data);
}

function getAddressString(geoObject) {
    if (!geoObject) return '';
    const premise = geoObject.getPremise();
    const premiseNumber = geoObject.getPremiseNumber();
    const thoroughfare = geoObject.getThoroughfare();
    const address = [premise || thoroughfare, premiseNumber];
    return address.filter(Boolean).join(', ');
}

async function getAddress(ymaps: any, position: MapPosition): Promise<string> {
    const result = await ymaps.geocode(position);
    const firstGeoObject = result.geoObjects.get(0);
    const addressStr = getAddressString(firstGeoObject);

    if (!firstGeoObject) {
        return '';
    }

    return addressStr;
}

export {
    createOrder,
    getAddressString,
    getAddress,
    findCrews,
}