import{BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Product from './Product';
import Description from './Destription';
import Menu from './Menu';
import Home from './Home';
import Search from './icon_Component/Search';
import Login from './icon_Component/Login'
import Phone from './icon_Component/Phone'
import Payment from './icon_Component/Payment'
import SignIn from './icon_Component/SignIn';

function App() {
  return(
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Menu/>}>
      <Route  index element={<Home/>}/>
      <Route path='/product' element={<Product/>}/> 
      <Route path="/description" element={<Description/>}/>  
      <Route path='/search' element={<Search/>}/> 
      <Route path="/userlogin" element={<Login/>}/>  
      <Route path='/payment' element={<Payment/>}/> 
      <Route path="/phone" element={<Phone/>}/>  
      <Route path='/signin' element={<SignIn/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
