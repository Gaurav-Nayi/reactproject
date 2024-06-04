import React from 'react'

const Propsdemo = (props) => {
  return (
    <React.Fragment>
     <h1 id="" className='' name=''>Props Demo</h1>
     <h3>{props.username}</h3>
     <h3>{props.address}</h3>
    </React.Fragment>
  )
}

export default Propsdemo


// import React from 'react'

// const Propsdemo = ({username,address}) => {
//     //let {username,address}=props 
//   return (
//     <div>
//       <h1 id="" className='' name=''>Props demo</h1>
//       <h3>{username}</h3>
//       <h3>{address}</h3>
//     </div>
//   )
// }

// export default Propsdemo
