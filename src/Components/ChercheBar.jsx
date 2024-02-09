import { useState } from "react";

export default function ChercheBar(props) {
    const [valeur, setValeur] = useState('');
    const handleSearch  = () => {
        props.search(valeur)
    }

    return (
        <> 
            <h1>Search : </h1>
            <hr />
            <input type="text" name="" id="" onChange={(event) => {
                setValeur(event.target.value.toLocaleLowerCase())
            }}/>
            <button onClick={() => handleSearch(valeur)}>Chercher</button>


        </>
    )
}