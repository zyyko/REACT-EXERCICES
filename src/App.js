import logo from './logo.svg';
import './App.css';
import ChercheBar from './Components/ChercheBar';
import { useState } from 'react';
import List from './Components/List';


function App() {

  const list=[
    {nom:"banane",type:"fruit"},
    {nom:"orange",type:"fruit"},
    {nom:"pomme",type:"fruit"},
    {nom:"raisins",type:"fruit"},
    {nom:"kiwi",type:"fruit"},
    {nom:"tomate",type:"legume"},
    {nom:"carotte",type:"legume"},
    {nom:"pomme de terre",type:"legume"},
    {nom:"navet",type:"legume"},
    {nom:"poivron",type:"legume"}
    ]

    const [type,setType] = useState();
    const [filteredList, setfiltiredList] = useState([]);

    const searchOnApp = (type) => {
      setType(type);
      setfiltiredList(list.filter((item) => item.type.toLocaleLowerCase() == type))
    }

    
  return (
    <div className='container'>
      <ChercheBar search={searchOnApp} />
      <div>
      <h1>Type : {type}</h1>
        <List result={filteredList}/>
      </div>
      
    </div>
  )
}

export default App;
