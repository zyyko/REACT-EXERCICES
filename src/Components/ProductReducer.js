export const INITIAL_VALUE = {
    ProductList : [],
    error : undefined,
    loading : true
}


export const ProductReducer = (state, action) => {
    
    switch(action.type) {
        
        case 'PRODUCTS':
            return {
                ...state,
                ProductList : action.payload.collection
            };
        case 'CATEGORIES':
            return {
                ...state,
                CategoryList : action.payload.collection
            }
        case 'ERROR':
            return{
                ...state,
                error : action.payload.hasError
            }
        case 'LOADING':
            return {
                ...state,
                loading : action.payload.isLoading
            }
        
    }
}