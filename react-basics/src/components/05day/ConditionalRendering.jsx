import React from 'react'

const ConditionalRendering = ({isLog,username}) => {
    /*if(isLog){
        return(<> <h1>Welcome{username}</h1></>)
    }
    else{
        return(<><h1>Welcome Guest</h1></>)
    }*/
 /*  let result=''
   if(isLog){
        result = (<> <h1>Welcome{username}</h1></>)
    }
    else{
        result = (<><h1>Welcome Guest</h1></>)
    }
    return (<>{result}</>)*/

    return(
        <>
            {isLog ? <><h1>Welcome {username}</h1>
            {username=="admin"?<h1>all access</h1> : <h1>user access</h1>}
             <h2>Lorem ipsum dolor, sit amet</h2></> 
            :
             <> <h1>Welcome Guest</h1></>}
             {isLog && <>
                <h1>Welcome {username}</h1>
             </>}
            <hr/>
             {(isLog && username=="Gaurav") && <h1>Welcome Back</h1> }
             <hr/>
             {(isLog && username=="Gaurav") ? <h1>Welcome Back</h1> : '' }


        </>
    )
}

export default ConditionalRendering
