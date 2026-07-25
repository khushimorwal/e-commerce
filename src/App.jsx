import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Header from './Header';
import HomeDummy from './HomeDummy';
import ViewDetail from './ViewDetail';
import Recipes from './Recipes';
import ShowRecipes from './ShowRecipes';
import Cart from './Cart';
import Login from './Login';
import SignUp from './SignUp';
import AllOrders from './AllOrders';
import AddToWishlist from './AddToWishlist';
import ProtectedRoute from './ProtectedRoute';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>

      <Routes>

        <Route path='/' element = {<HomeDummy/>} />
        <Route path='/user/:id' element = {<ViewDetail/>} />
        <Route path='/recipes' element = {<Recipes/>} />
        <Route path='/recipes/:id' element = {<ShowRecipes/>} />
        <Route path='/cart' element = {
          <ProtectedRoute>
             <Cart/>
          </ProtectedRoute>
           } />
         
        <Route path='/Login' element = {<Login/>} />
        <Route path='/Signup' element = {<SignUp/>} />
        <Route path='/allorders' element = {<AllOrders/>} />
        <Route path='/wishlist' element = {<AddToWishlist/>} />

        





      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
