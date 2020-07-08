import React from 'react';
import { GifGridItem} from '../../components/GifGridItem';

import { shallow } from 'enzyme';

 describe('Pruebas en <GifGridItem />', () =>{

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';

    const wrapper = shallow(<GifGridItem title={title} url={url}/>)

    test('Debe de mostrar el componente correctamente ', () => {
        
        expect( wrapper).toMatchSnapshot();
    })

    test('Debe de tener un parrofo con el title', () =>{

            const p = wrapper.find('p');
            expect(p.text().trim()).toBe(title);

    })

    test('IMG Debe tener URL y Title',()=>{
        const img = wrapper.find('img');
        expect(img.prop('src')).toBe(url)
        expect(img.prop("alt")).toBe(title);
    })
    
    test('Debe tener animate fadeIn', () => {

        const div = wrapper.find('div');
        const className = div.prop('className');
        //console.log(div.props());

        expect(className.includes("animate__fadeIn")).toBe(true);
        
    })
    
      
 })