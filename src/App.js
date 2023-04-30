import {Routes,Route} from 'react-router-dom';
import Head from './routes/head';
import Home from './routes/home';
import AddEmp from './routes/addEmp';
import RemoveEmp from './routes/removeEmp';
import ApplyLeave from './routes/applyLeave';
import LeaveDetails from './routes/leaveDetails';

const App=()=>{
  return(
        <Routes>
          <Route path='/' element={<Head/>}>
            <Route index element={<Home />} />
            <Route path='/add' element={<AddEmp />} />
            <Route path='/remove' element={<RemoveEmp />} />
            <Route path='/leave' element={<ApplyLeave />} />
            <Route path='/details' element={<LeaveDetails />} />
          </Route>
        </Routes>
  )
}

export default App;