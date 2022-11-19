import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "../container/Home"
import Checkout from "../container/Checkout"
import Information from "../container/Information"
import Payment from "../container/Payment"
import Success from "../container/Success"
import NotFound from "../container/NotFound"
import Layout from "../components/Layout"

import AppContext from "../context/AppContext"
import useInitialState from "../hooks/useInitialState"

const App=()=>{

    const initialState=useInitialState()
    return (
        <AppContext.Provider value={initialState}>
        <BrowserRouter>
        <Layout>
            <Routes>
                <Route  path="/" element={<Home/>}/>
                <Route  path="/checkout" element={<Checkout/>}/>
                <Route  path="/checkout/information" element={<Information/>}/>
                <Route  path="/checkout/payment" element={<Payment/>}/>
                <Route  path="/checkout/success" element={<Success/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Layout>
        </BrowserRouter>
        </AppContext.Provider>
    )
}

export default App;