import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name:'filter',
    initialState:{filterProducts:[],catval:'',searchval:'',priceval:''},
    reducers:{
        FILTER_BY_CATEGORY(state,action){
            // console.log(action.payload)
            let {products,category} = action.payload
            if(category !=''){
                let filters=products.filter((item)=>item.category == category)
                state.filterProducts = filters
                
            }
            state.catval=category
        },
        FILTER_BY_SEARCH(state,action){
            // console.log(action.payload)
            let {products,search} = action.payload
            if(search !=''){
                let filters=products.filter((item)=>item.name.toLowerCase().includes(search.
                    toLowerCase()) || item.category.toLowerCase().includes(search.toLowerCase()))
                state.filterProducts = filters           
            }
            state.searchval=search
        },
        FILTER_BY_PRICE(state,action){}
    }
})

export const {FILTER_BY_CATEGORY,FILTER_BY_SEARCH,FILTER_BY_PRICE}=filterSlice.actions
export default filterSlice
export const selectfilterProducts = (state)=>state.filter.filterProducts
export const selectCatval = (state)=>state.filter.catval
export const selectSearchval = (state)=>state.filter.searchval
export const selectPriceval = (state)=>state.filter.priceval