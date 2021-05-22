import logo from './logo.svg';
import '../../App.css';


function Header({onChangeValueUser}) {
   const onChangeValueUser = (e) =>{
       const {value} = e.target;
       onChangeValueUser(value);
   }
        return(

            <header className="header">

                <input type="text"
                       className="search_input"
                       onChange={(e)=>setValue(e.target.value)}
                />
            </header>

    );
}

export default App;