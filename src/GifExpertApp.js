import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

//const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  // const handlerAdd = () => {

  //   setcategories(cats => ["HunterXHunter",...cats, ]);
  //   operador spread mantinen el estado anterior y agrega una nueva al final
  //   setcategories(cats => [...cats, "HunterXHunter"]);
  //   operador spread mantinen el estado anterior y agrega una nueva al final
  //   setcategories([...categories, "HunterXHunter"]);

  //   operador spread mantinen el estado anterior y agrega una nueva al inicio
  //   setcategories(["HunterXHunter", ...categories]);
  // };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories = {setCategories}/>
      <hr />

      {/*<button onClick={handlerAdd}>Agregar</button>*/}

      <ol>
        {
        categories.map((category) => ( 
          <GifGrid
          key = { category }
          category = { category } />
        ))
        }
      </ol>
      </>
  );
};
export default GifExpertApp;