import axios from "axios"

let BASEURL = "https://667a8641bd627f0dcc8f5abe.mockapi.io/products"

export const postdata = (data)=>axios.post(BASEURL,data)

export const fetchdata = ()=>axios.get(BASEURL)

export const deleteData = (id)=>axios.delete(`${BASEURL}/${id}`)

export const fetchdatabyid = (id)=>axios.get(`${BASEURL}/${id}`)

export const updatedata = (product,id)=>axios.put(`${BASEURL}/${id}`, product)

export const deletebyfetchapi=(id)=> fetch(`${BASEURL}/${id}` , {method:'DELETE'})

export const postusingfetchapi=(data)=> {
    return fetch(BASEURL , {
        method:'POST' , 
        headers:{'content-type':'application/json'} , 
        body:JSON.stringify(data)}
    )
}