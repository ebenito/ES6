//const axios = require('axios');
const getStarWarsCharacters = async () => {
    try {
        let resultado = '';
        const res = await axios.get('https://swapi.dev/api/people');
        for (const character of res.data.results) {
            console.log('personaje: ' + character.name);
            console.log('url: ' + character.url);

            const res = await axios.get(character.homeworld);
            console.log(res.data);

            resultado += 'Personaje: ' + character.name + '&nbsp;&nbsp;' + '<a href="' + character.url + '">Más info</a><br />' ;
            resultado += '<div> Mundo: ' + res.data.name + '</div><br /><br />'
            document.getElementById('listado').innerHTML = resultado;
        }        
    } catch {
        console.error(error);
    }
}
