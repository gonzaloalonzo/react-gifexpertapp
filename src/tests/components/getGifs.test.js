const { getGifs } = require("../../helpers/getGifs")

describe ('pruebas con getGifs Fecht', () =>{

    test('Debe de traer 10 elementos', async() => {

        const gifs = await getGifs('One Punch');

        expect(gifs.length).toBe(10);

        
    })
    

}) 