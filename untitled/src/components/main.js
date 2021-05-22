import '../App.css';
import{useEffect, useState} from 'react'


function Main (props) {

    return (
        <main className = "main-wrapper">
            {
                props.good.map((item)=>(
                    <div className = "item-block">
                        <p className = "item-name">{item.name}</p>
                        <p className = "item-name">{item.brand}</p>
                        <p className = "item-name">{item.price}</p>
                    </div>
                ))
            }

        </main>
    );

}

export default Main;