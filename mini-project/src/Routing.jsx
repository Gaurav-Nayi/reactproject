import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import PageNotFound from "./pages/PageNotFound";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductData from "./features/ProductData";


const allroutes = createBrowserRouter([
    {path: "/", element: <App />, 
        children:[
            { path: '' , element:<Home />},
            { path: 'login' , element:<Login/>},
            { path: 'register' , element:<Register/>},
            { path: 'products' , element:<ProductData/>}
        ]
    },
    {path:"*" , element:<PageNotFound />}
  ]);

  export default allroutes