import { Navigate } from "react-router-dom"

export const ShowOnLogout=({children})=>{
    if(sessionStorage.getItem('11apr') == null){
        return children
    }
    else return null
}
export const ShowOnLogin=({children})=>{
    if(sessionStorage.getItem('11apr') != null){
        return children
    }
    else return null
}

export const ProtectedAdmin=({children})=>{
    if(sessionStorage.getItem('11apr') != null){
        let obj=JSON.parse(sessionStorage.getItem('11apr'))
        if(obj.isLoggedIn && obj.role=='0') return children
        else return <Navigate to='/' replace={true}/> 
    }
    else return <Navigate to='/login' replace={true}/>
}

export const Protected=({children})=>{
    if(sessionStorage.getItem('11apr') != null){
        let obj=JSON.parse(sessionStorage.getItem('11apr'))
        if(obj.isLoggedIn && obj.role=='1') return children
        else return <Navigate to='/' replace={true}/> 
    }
    else return <Navigate to='/login' replace={true}/>
}

