
import './App.css'
import {Routes,Route} from 'react-router-dom'
import StudentList from './pages/StudentList'
import StudentDetails from './pages/StudentDetails'
import CreateStudent from './pages/CreateStudent'


function App() {

  return (
    <>
    <Routes>
      <Route path="/students" element={<StudentList/>}/>
      <Route path="/students/:id" element={<StudentDetails/>}/>
      <Route path="/students/create" element={<CreateStudent/>}/>

    </Routes>
    </>
  )
}

export default App
