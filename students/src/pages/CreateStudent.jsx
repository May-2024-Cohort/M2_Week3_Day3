import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

function CreateStudent() {


    const [name,setName] = useState("")
    const [country,setCountry] = useState("")

    const navigate = useNavigate()


    function handleSubmit(e){
        e.preventDefault()

        const newStudent = {
            name:name,
            country:country
        }

        axios.post('https://omar-class-api.adaptable.app/students',newStudent)
        .then(()=>{
            alert("New Student Created")
            navigate('/students')
        })
        console.log(newStudent)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>

            <label>
                Name:
                <input type="text" onChange={(e)=>{setName(e.target.value)}} />
            </label>

            <label>
                Country:
                <input type="text" onChange={(e)=>{setCountry(e.target.value)}} />
            </label>

            <button>Create student</button>
        </form>
    </div>
  )
}

export default CreateStudent