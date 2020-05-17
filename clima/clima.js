const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1ffe602132743ac43ec4ebebcb5babcc&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}