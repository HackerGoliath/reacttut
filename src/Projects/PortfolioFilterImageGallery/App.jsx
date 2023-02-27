import React, { useState } from 'react'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./TabMenu.css";
import Menu from "./Menu";
import MenuItems from './MenuItems';
import CatMenu from './CatMenu';

// Return only unique elements
// const a = [1, 2, 3, 1, 1, 2, 3, 1];
// const unique = a.filter((item, i, ar) => ar.indexOf(item) === i);
// 2nd Method
// const unique = [new Set(a)]
// console.log(unique);

const allCatValues = [...new Set(Menu.map(curElem => curElem.category)), "all"];
// console.log(allCatValues);

const App = () => {
    const [items, setItems] = useState(Menu);
    const [catItems, setCatItems] = useState(allCatValues);

    const filterItem = (catItem) => {
        if (catItem === "all") {
            // return setItems(Menu);
            // is same as
            setItems(Menu);
            return;
        }
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === catItem;
        });
        setItems(updatedItems);
    }


    return (
        <>
            <h1 className='mt-5 text-center main-heading'>Order Your Favourite Dish</h1>
            <hr />
            {/* menu tab */}
            <CatMenu filterItem={filterItem} catItems={catItems} />

            {/* Main item section */}
            <MenuItems items={items} />
        </>
    )
}

export default App