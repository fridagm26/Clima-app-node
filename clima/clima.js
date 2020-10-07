const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=4be811a5ba0b07e24e9ec9c84a105d03&units=metric`);
    return resp.data.main.temp;
};

module.exports = {
    getClima
}