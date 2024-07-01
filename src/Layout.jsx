import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Menu from './components/shared/Menu'
import Footer from './components/shared/Footer'
import Home from './views/Home'
import injectContext from './store/AppContext'
import Contact from './views/Contact'
import Detail from './views/Detail'

const Layout = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/contact' element={<Contact />} />
                <Route path='/:id/detail' element={<Detail />} />
                <Route path='/' element={<Home />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default injectContext(Layout)