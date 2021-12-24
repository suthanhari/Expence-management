import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './topbar';
import Income from './income';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Salryform from './salryform';
import Card from './Card';


function App() {
  return (
    <BrowserRouter>
      <div id="wrapper">

        <Sidebar></Sidebar>

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar></Topbar>
            <div className='container-fluid'>



              <Routes>
              
              <Route path='/income' element={<Income/>} ></Route>
              <Route path='/Card' element={<Card/>} ></Route>
              <Route path='/usersform' element={<Salryform/>} ></Route>
             
              </Routes>











            </div>
          </div>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
