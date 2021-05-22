import logo from './logo.svg';
import './App.css';
import{useState, useEffect} from 'react'

import Header from './components/header/Header';
import Main from './components/main';



const goodList = [
    {
        name: 'Кросовки 1',
        price: '1000p',
        brand: 'Adidas'
    },
    {
        name: 'Кросовки 2',
        price: '900p',
        brand: 'Converce'
    },
    {
        name: 'Кросовки 3',
        price: '2000p',
        brand: 'Reebok'
    },
    {
        name: 'Кросовки 4',
        price: '1500p',
        brand: 'New Balance'
    },
    {
        name: 'Кросовки 5',
        price: '500p',
        brand: 'Nike'
    },
    {
        name: 'Кросовки 6',
        price: '400p',
        brand: 'Puma'
    },
];

function App() {
    const [inputValue, setInputValue] = useState('');
    const [good, setgood] = useState([]);

    const onSearchItems = (event) => {
        const { value } = event.target;
        setInputValue(value);

        const newItems = goodList.filter( ({ name } ) => name.toLowerCase().includes(value.toLowerCase()));
    
        setgood(newItems);
    
    };


    useEffect(() => {
        setTimeout(() => {
            setgood(goodList);   
        }, 3000);
    }, []);

    return (

        <div className="App">

                <Header 
                    inputValue={inputValue} 
                    onSearchItems = {onSearchItems}
                />

                <Main
                    good={good}

                />

        {good.length === 0 && <div className="loader">loader</div>}

<div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        
        

        </div>
    );

}

export default App;
