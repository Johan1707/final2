import { Routes, Route } from 'react-router-dom'

import { MainLayout } from '../components'
import { 
    HomePage, 
    ProductsPage, 
    DetailPage,
    CategoryPage,
    AboutPage, 
    ContactsPage, 
    NotFoundPage } from '../pages'

const MainRouter = () => {
    return (
        <Routes>
            <Route path='/' element={ <MainLayout /> }>
                <Route index element={ <HomePage /> }/>
                <Route path='/products' element={ <ProductsPage /> }/>
                <Route path='/product/:idProduct' element={ <DetailPage /> }/>
                <Route path='/category' element={ <CategoryPage /> }/>
                <Route path='/about' element={ <AboutPage /> }/>
                <Route path='/contact' element={ <ContactsPage /> }/>
                <Route path='*' element={ <NotFoundPage /> }/>
            </Route>
        </Routes>
    )
}

export default MainRouter