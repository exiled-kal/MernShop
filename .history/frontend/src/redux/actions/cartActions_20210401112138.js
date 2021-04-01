import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';


export const addToCart = (id,qty) => async (disptatch) => {
    const {data} = await axios.get(`/api/products/${id}`)
    
    dispatch({
        type: actionTypes.ADD_TO_CART
    })
}