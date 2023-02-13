import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([]);

    //data:images crea un alias para data
    const {data:images, loading} = useFetchGifs(category);
    // useEffect(() => {
    //     getGifs(category)
    //     .then(setImages)
    // }, [])
    // const getGifs = async() => {
    //     const url = `https://api.giphy.com/v1/gifs/search?api_key=fptLpdrBJWLhTc2jI6xmPGtCTILMvF4O&q=${category}&limit=10&offset=0&rating=g&lang=en`;
    //     const resp = await fetch(url);
    //     const { data } = await resp.json();
    //     const gifs = data.map( img => {
    //         return {
    //             id: img.id,
    //             title: img.title,
    //             url: img.images.downsized_medium.url
    //         }
    //     })
    //     setImages(gifs);
    //     console.log(gifs);
    // }

    return (
        <>
            <h3>{ category }</h3>
            { loading && <span className="loader"></span>}
            <div className='card-grid'>
                {
                    images.map(img =>
                        <GifGridItem 
                            key={img.id}
                            {...img}
                            />
                    )
                }
            </div>
        </>
    )
}
