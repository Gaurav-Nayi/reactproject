import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Propsdemo from '../02day/Propsdemo'
import Eventdemo from '../02day/Eventdemo'
import Stateinfun from '../03day/Stateinfun'
import ConditionalRendering from './ConditionalRendering'
import Form1 from '../04day/Form1'
import ListRendering from './ListRendering'
import ProductList from './ProductList'
import App from '../../App'
import Calculator from '../04day/Calculator'
import Product01 from '../06day/Product01'
import ProductData from '../06day/ProductData'
import ReactCSS from '../06day/ReactCSS'
import PageNotFound from '../06day/PageNotFound'
import ReactBootstrapForm from '../07day/ReactBootstrapForm'
import FormValidations from '../07day/FormValidations'
import ReactHookForm from '../08day/ReactHookForm'
import Counter from '../08day/Counter'
import RandomNumGenerator from '../08day/RandomNumGenerator'
import RefDemoinFun from '../09day/RefDemoinFun'
import Usememohook from '../09day/Usememohook'
import FunRouting from '../FunRouting'
import ClassRouting from '../ClassRouting'
import ClassComp from '../09day/ClassComp'



const RoutingComp = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route path='/fun' element={<FunRouting/>}>
                    <Route path='' element={<Propsdemo />}></Route>
                    <Route path='event' element={<Eventdemo />}></Route>
                    <Route path='state' element={<Stateinfun />}></Route>
                    <Route path='condition' element={<ConditionalRendering />}>
                        <Route path='cal' element={<Calculator/>}></Route>
                    </Route>
                    <Route path='form' element={<Form1 />}></Route>
                    <Route path='list' element={<ListRendering />}></Route>
                    <Route path='products' element={<ProductList />}></Route>
                    <Route path='product/form' element={<Product01 />}></Route>
                    <Route path='products/card' element={<ProductData />}></Route>
                    <Route path='css' element={<ReactCSS/>}></Route>
                    <Route path='rb' element={<ReactBootstrapForm/>}></Route>
                    <Route path='validations' element={<FormValidations/>}></Route>
                    <Route path='reacthookform' element={<ReactHookForm/>}></Route>
                    <Route path='lifting' element={<Counter/>}></Route>
                    <Route path='random' element={<RandomNumGenerator/>}></Route>
                    <Route path='ref' element={<RefDemoinFun/>}></Route>
                    <Route path='hook/usememo' element={<Usememohook/>}></Route>
                </Route>
                <Route path='/class' element={<ClassRouting/>}>
                    <Route path='' element={<ClassComp username="Happay" address="Ahmedabad"/>}></Route>
                </Route>
                    
                </Route>
                <Route path="*" element={<PageNotFound/>}></Route>
            </Routes>
        </>
    )
}

export default RoutingComp
