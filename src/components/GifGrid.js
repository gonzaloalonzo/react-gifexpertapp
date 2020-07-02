import React from 'react';
import {useFetchGifs} from '../hooks/useFetchGifs';
import {GifGridItem} from './GifGridItem';
//import {getGifs} from '../helpers/getGifs';


export const GifGrid = ({category}) => {

     const {data:images, loading} = useFetchGifs( category );


    /* const [images, setImages] = useState([]);
     useEffect(() => {
    //   getGifs(category)
    //   .then(setImages);
    // }, [category])// solo se ejecuta por una vez.*/

    return (
      <>
        <h3 className="animate__animated animate__fadeIn">{category}</h3>
        {loading && <p className='animate__animated animate__flash'> Loading...</p>}
        <div className="card-grid">
          {/*
        <ol>{images.map(img => (
            <li key = {img.id}>{img.title}</li>
        ))
        }</ol>
        <ol>
            desetructurado
          {images.map(( {id, title} ) => (
            <li key={id}>{title}</li>
          ))}
        </ol>*/}

          {images.map((img) => (
            <GifGridItem key={img.id} {...img} />
          ))}
        </div>
      </>
    );
}
