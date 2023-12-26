import { useEffect, useReducer, useRef } from "react"
import { INITIAL_VALUE, ProductReducer } from "./ProductReducer"
import Product from "./Product";

export default function ProductList () {

    const [ProductValues, dispatch] = useReducer(ProductReducer,INITIAL_VALUE);
    const name = useRef();

    

    useEffect(() => {
        getProducts()
    },[])

    const displayProducts = (searchValue) => {
        let productsTemp = ProductValues.ProductList
        if(searchValue !== undefined && searchValue !== '') {
           let srProducts = productsTemp.filter((product) => {
            return (
                product.title.includes(searchValue) 
                || product.id.toString().includes(searchValue) 
                || product.description.includes(searchValue) 

            )
           })
           console.log(srProducts)
        }

        console.log(productsTemp)

       
        if(ProductValues.ProductList.length > 0) {
            return productsTemp.map((product,key) => {
                return (<Product product={product} key={key}/>)
            })
        }
    }

    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
        .then(response => {
            if(response.ok) {
                return response.json()
            }

            return Promise.reject('Products fetch failed ! ')
        })
        .then(response => dispatch({type : 'PRODUCTS' , payload:{collection : response}}))
        
    }

    const handleSearch = (e) => {
        e.preventDefault()
        const searchValue = name.current.value 
        console.log(searchValue)
        displayProducts(searchValue)
    }


    
    return (
        <>
            <h2>Search:</h2>
            <form onSubmit={handleSearch}>
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label className="col-form-label">Search</label>
                    </div>
                    <div className="col-auto">
                        <input type="text" id="search" className="form-control" ref={name} />
                    </div>
                    <div className="col-auto">
                        <input className='btn btn-dark mx-2' type="submit" value='Search' />
                        <input className='btn btn-secondary' type="reset" value='Reset' onClick={() => {
                            
                        }}/>
                    </div>
                </div>
                <hr/>
                <h5>Categories: </h5>
                <div className="row g-3 align-items-center">
                    <div className="btn-group">
                        {/*categories*/}
                    </div>
                </div>
            </form>
            <hr/>
            <h1>Products : </h1>
            <table className="table">
                <thead>
                <tr>
                    <th>#ID</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Rating</th>
                </tr>
                </thead>
                <tbody>
                {displayProducts()}
                </tbody>
            </table>

        </>
    )
}