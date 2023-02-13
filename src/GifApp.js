import React, {useState} from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifApp = () => {
    // const categories = ['Honda', 'Kawasaki', 'Yamaha'];
    const [categories, setCategories] = useState(['Honda']);

    // const addBike = () => {
    //     setCategory([...category, 'Suzuki']);
    // }

    // const borrarUltima = () => {
    //     category.pop();
    //     setCategory([...category]);
    // }

    // const borrarPrimero = () => {
    //     category.shift();
    //     setCategory([...category]);
    // }
    return(
        <>
            {
                console.log(categories)
            }
            <h2>GifApp</h2>
            <hr />
            <AddCategory setCategories={setCategories} />
            <ol>
                {
                    categories.map( category => 
                                <GifGrid 
                                    key={category} 
                                    category={category}/>)
                }
            </ol>
            {/* <button onClick={addBike}>Añadir Moto</button>
            <button onClick={borrarPrimero}>Borrar Primero</button>
            <button onClick={borrarUltima}>Borrar Ultimo</button> */}
        </>
    )
}

export default GifApp;