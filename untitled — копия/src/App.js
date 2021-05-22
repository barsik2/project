import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import header from "./components/header/header";
const arrayBlock = [
    {
        name: "Одежда",
        model: "Адидас"
    },

    {
        name: "Обувь",
        model: "Puma"
    },
    {
        name: "Аксексуары",
        model: "Reebok"
    },
];

function App() {
    const [inputValueSearch,setValue] = useState('');

    const [items,setItems] = useState([]);

    useEffect(()=> {
        setItems(arrayBlock)
    }, [])
    console.log(items);

    return (

        <div className="App">
            <header className="header">

                <input type="text"
                       className="search_input"
                       onChange={(e)=>setValue(e.target.value)}/>
            </header>
            <Header onChangeValue={setValue}/>
            {
                onChangeValueUser={setValue}
                inputValuesearch={inputValueSearch}
            }
            <main className="main">
                <div className="shop-items">
                    <p className="shop-title">Кросовки</p>
                    <p className="shop-title">adidas</p>
                </div>
                <div className="shop-items">
                    <p className="shop-title">Кросовки</p>
                    <p className="shop-title">adidas</p>
                </div>
                <div className="shop-items">
                    <p className="shop-title">Кросовки</p>
                    <p className="shop-title">adidas</p>
                </div>

                {
                    arrayBlock.map((item) => (
                        <div className="shop-items" key={item.model}>
                            <p className="shop-title">{item.name}</p>
                            <p className="shop-title">{item.model}</p>
                        </div>
                    ))
                }
            </main>
            <div>
                <div className="lds-roller">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

        </div>
    );
}

export default App;