import { useEffect, useReducer, useRef, useState } from "react"
import { INITIAL_VALUE, ProductReducer } from "./ProductReducer"
import Product from "./Product";

export default function ProductList () {

    const [ProductValues, dispatch] = useReducer(ProductReducer,INITIAL_VALUE);
    const [searchInput, setSearchInput] = useState()
    const [categoryList, setCategoryList] = useState([])
    const [currentCategory , setCurrentCategory] = useState()

    

    useEffect(() => {
        getProducts()
        getCategories()
    },[])

    const displayProducts = () => {
        let ProductTemp = ProductValues.ProductList
        if(searchInput !== undefined && searchInput !== '') {
            ProductTemp = ProductValues.ProductList.filter((product) => {
                return (
                    product.title.includes(searchInput) 
                    || product.id.toString().includes(searchInput) 
                    || product.description.includes(searchInput))
            })

        }

        if(currentCategory !== undefined) {
            return  ProductValues.ProductList
                    .filter(product => product.category === currentCategory)
                    .map((product,key) => (<Product key={key} product={product}/>))
        }

        if(ProductTemp.length > 0) {
            return (
                ProductTemp.map((product, key) => {
                    return <Product product={product} key={key}/>
                })
            )
        }
    }

    const displayCategories = () => {
        if(categoryList.length > 0) {   
            return (
                categoryList.map((category, key) => (
                    <button 
                    className={'btn ' + (currentCategory === category ? 'btn-dark' : 'btn-secondary')}
                    onClick={(e) => {
                        e.preventDefault()
                        setCurrentCategory(category)
                    }} 
                    key={key}>{category}
                    
                    </button>))
            )
        }
    }


    const getProducts = () => {
        fetch('https://fakestoreapi.com/products')
        .then(response => {
            if(response.ok) {
                return response.json()
            }

            return Promise.reject('Products fetch failed ! ')
        }).then(response => dispatch({type : 'PRODUCTS' , payload:{collection : response}}))
        .catch(apiError => dispatch({type : 'ERROR', payload:{hasError : apiError}}))
        .finally(() => dispatch({type: 'LOADING', payload:{isLoading:false}}))

        
    }

    const getCategories = () => {
        fetch('https://fakestoreapi.com/products/categories') 
        .then(response => {
            if(response.ok) {
                return response.json()
            }
        })
        .then(respone => setCategoryList(respone))
    }

    const handleSearch = (e) => {
        e.preventDefault()
        const value = document.querySelector("#search").value
        setSearchInput(value)
    }


    
    return (
        <>  
            {ProductValues.loading &&
            <div className="spinner-border-container d-flex justify-content-center align-items-center position-fixed z-3 top-0">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
            }
            {ProductValues.error && <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Error!</strong> {ProductValues.error}.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>}
            <h2>Search:</h2>
            <form>
                <div className="row g-3 align-items-center">
                    <div className="col-auto">
                        <label className="col-form-label">Search</label>
                    </div>
                    <div className="col-auto">
                        <input type="text" id="search" className="form-control" />
                    </div>
                    <div className="col-auto">
                        <input className='btn btn-dark mx-2' id="search" type="submit" value='Search' onClick={handleSearch}/>
                        <input className='btn btn-secondary' type="reset" value='Reset' onClick={() => {
                            setSearchInput()
                            setCurrentCategory()
                        }}/>
                    </div>
                </div>
                <hr/>
                <h5>Categories: </h5>
                
                <div className="row g-3 align-items-center">
                    <div className="btn-group">
                        {displayCategories()}
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