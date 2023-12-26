export const INITIAL_VALUE = {
    ProductList : [],
    SearchedProduct : [],
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
        case 'SEARCHED_PRODUCTS':
            return {
                ...state,
                SearchedProduct : action.payload.collection
            }
        
    }
}