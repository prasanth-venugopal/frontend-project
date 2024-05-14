import logo from './logo.svg';
import {BrowserRouter,Routes,Route,Link,Outlet} from "react-router-dom"
import './App.css';
import Counter from './counter'
import TodoList from './todolist/todo'
import ImageSearch from './Imagesearch/Imagesearch';
import WeatherApp from './weatherapp/weatherapp'
import './navbar.css'


function App() {
  return (
    <>
    <div className='navigation-bar' >
    <BrowserRouter>
    <nav className="navbar navbar-expand-lg">
    <ul className="navbar-nav " typeof='none'>
      <li className="nav-link"> <Link to="/counter">Counter</Link></li>
      <li className="nav-link"><Link to="/todo">Todo</Link></li>
      <li className="nav-link"> <Link to="/imagesearch">ImageSearch</Link></li>
      <li className="nav-link"> <Link to="/weatherapp">WeatherApp</Link></li>
    </ul>
     
     
    
  </nav>
  <Routes>
        <Route path="counter" element={<Counter></Counter>}></Route>
        <Route path="todo" element={<TodoList></TodoList>}></Route>
        <Route path="imagesearch" element={<ImageSearch></ImageSearch>}></Route>
        <Route path="weatherapp" element={<WeatherApp></WeatherApp>}></Route>
  </Routes>
   </BrowserRouter>
  
    </div>
   </>
  );
}

export default App;




