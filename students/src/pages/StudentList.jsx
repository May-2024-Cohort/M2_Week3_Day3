import {useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"

function StudentList() {

    const [students,setStudents] = useState([])

    useEffect(()=>{
        axios.get('https://omar-class-api.adaptable.app/students')
        .then((response)=>{
            setStudents(response.data.reverse())
            console.log(response.data)

        })
    },[])
  return (
    <div>
        
        <button><Link to="/students/create">Add new student</Link></button>
        {students.map((oneStudent)=>{
            return(
                <div key={oneStudent.id}>
                    <h2>{oneStudent.name}</h2>
                    <p>{oneStudent.country}</p>
                   
                    <button> <Link to={`/students/${oneStudent.id}`}>Go to Student</Link></button>
                </div>
            )
        })}
    </div>
  )
}

export default StudentList