import * as actionTypes from '../constants/cartConstants';
import axios from 'axios';


export const addToCart = (id,qty) => async ()