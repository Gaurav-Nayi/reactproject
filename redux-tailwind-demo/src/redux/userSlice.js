import { createSlice, nanoid } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : "user",
    initialState : {users:[]},
    reducers : {
        ADD_USER : (state,action)=>{
            // console.log("added" , action.payload)
            state.users.push({...action.payload,id:nanoid()})
        },
        REMOVE_USER(state,action){
            // let filters = state.users.filter((item)=>item.id !=action.payload)
            // state.users=filters

            let itemIndex = state.users.findIndex((item)=>item.id == action.payload) 
            if(itemIndex != - 1 ){
                state.users.splice(itemIndex,1)
            }
        },
        REMOVE_ALL_USERS(state,action){
            state.users=[]
        }
    }
})

// console.log(userSlice,actions)
export const {ADD_USER,REMOVE_USER,REMOVE_ALL_USERS}=userSlice.actions 
export default userSlice

export const selectUsers = (state)=>state.user.users