import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Gallery } from '../components/Gallery'
import Home from '../components/Home'
import Inicio from '../components/Inicio'
import { Login } from '../components/Login'
import { NewPost } from '../components/NewPost'
import Register from '../components/Register'
import Reset from '../components/Reset'

import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

const MainRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/frontpage" element={<PublicRoute><Inicio/></PublicRoute>}/>
            <Route path="/login" element={<PublicRoute><Login/></PublicRoute>}/>
            <Route path="/reset" element={<PublicRoute><Reset/></PublicRoute>}/>
            <Route path="/register" element={<PublicRoute><Register/></PublicRoute>}/>
            
            <Route path="/" element={<PrivateRoute><Home/></PrivateRoute>}>
                <Route index element = {<PrivateRoute><Gallery/></PrivateRoute>}/>
                <Route path="nueva" element = {<PrivateRoute><NewPost/></PrivateRoute>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default MainRouter