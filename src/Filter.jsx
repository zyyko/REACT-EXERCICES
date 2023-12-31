import { useState } from "react"

export default function Filter () {

    const LIST = [
        "Banana",
        "Apple",
        "Orange",
        "Mango",
        "Pineapple",
        "Watermelon"
      ]

    const [filterList, setFilterList] = useState(LIST)

    const handleSearch = (e) => {
        if(e.target.value === '') {
            setFilterList(LIST)

            
        }
        const searchedValue = e.target.value
        const filteredList = LIST.filter(fruit => {
            return fruit.toLowerCase().includes(searchedValue.toLowerCase())
        })

       
        if(filteredList.length > 0 ) {
            return setFilterList(filteredList)
        }
        else {
            return setFilterList([])
        } 
    }

    return (
        <div className="container">
            <label htmlFor="">Search : </label>
            <input type="text" name="" id="" onChange={handleSearch}/>
            {filterList && filterList.map((fruit, key) => (
                <div key={key}>{fruit}</div>
            ))}
        </div>
    )
}