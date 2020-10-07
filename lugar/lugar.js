const axios = require('axios');

const getLugarLatLng = async(dir) => {
    const encodeUlr = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeUlr}.json`,
        params: { 'access_token': 'pk.eyJ1IjoiZnJpZGFnbTI2IiwiYSI6ImNrZnpvMW5mZzF5anEyc3A5bGFmeTJ0djUifQ.sVO2rT3FAs6sQs_uEzsG6Q' }
    });

    const resp = await instance.get();

    if (resp.data.features.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = resp.data.features[0];
    const direccion = data.place_name;
    const lat = data.center[1];
    const lng = data.center[0];

    return {
        direccion,
        lat,
        lng
    }
};

module.exports = {
    getLugarLatLng
}