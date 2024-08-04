import {useEffect, useState} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'

function StudentDetails() {

    const [student,setStudent] = useState(null)

    const {id} = useParams()

    const navigate = useNavigate()


    async function  fetchStudentDetails(){

        try{
            const student = await axios.get(`https://omar-class-api.adaptable.app/students/${id}`)

            setStudent(student.data)
        }

        catch(err){
            console.log(err)
        }
       
    }

    useEffect(()=>{
/*         axios.get(`https://omar-class-api.adaptable.app/students/${id}`)
        .then((response)=>{
            setStudent(response.data)
            return axios.get('https://ih-countries-api.herokuapp.com/countries')
        })
        .catch((error)=>{
            console.log(error)
        })  */

            fetchStudentDetails()
    },[])

    function deleteStudent(){
        axios.delete(`https://omar-class-api.adaptable.app/students/${id}`)
        .then(()=>{
            navigate('/students')
        })
    }
  return (
    <div>
        {student && (
            <div>
                <h1>{student.name}</h1>
                <p>{student.country}</p>
                <button onClick={deleteStudent}>Delete Student</button>
            </div>
        )}
    </div>
  )
}

export default StudentDetails