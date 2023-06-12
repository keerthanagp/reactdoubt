
import { BrowserRouter as Link, Route ,Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Bars/Sidebar/Sidebar';
import Dashboard from './AllComponents/Dashboard/Dashboard';
import Components from './AllComponents/Components/Components';
import Utilities from './AllComponents/Utilities/Utilities';
import Pages from './AllComponents/Pages/Pages';
import Charts from './AllComponents/Charts/Charts';
import Tables from './AllComponents/Tables/Tables';
import Navbar from './Bars/Navbar';


function App() {
  
  return (
    <>
   
    <Navbar />
    <Sidebar/>
    <Routes>
   <Route exact path='/Dashboard' element={<Dashboard />}/>
   <Route path='/Components' element={<Components/>}/>
   <Route path='/Utilities' element={<Utilities/>}/>
   <Route path='/Pages' element={<Pages/>}/>
   <Route path='/Charts' element={<Charts/>}/>
   <Route path='/Tables' element={<Tables/>}/>
   </Routes>
   
   </>
  );
  
}

export default App;
