import React  from "react";
import {Button,Form } from "semantic-ui-react";
import {useState,useEffect} from "react";
import axios from "axios";
import { useHistory } from 'react-router';




export default function Update() {
    let history=useHistory();
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const[ID,setID]=useState(null);
   // console.log(firstName);
  //  console.log(lastName);


    const sendDatatoAPI=()=>{
        axios.put(`https://60efffc2f587af00179d3c27.mockapi.io/fakeData/${ID}`,{
            firstName,
            lastName
        }).then(()=>{
            history.push("/read")
        })

    }
    useEffect(()=>{
            setFirstName(localStorage.getItem('firstName'))
            setLastName(localStorage.getItem('lastName'))
            setID(localStorage.getItem('ID'))   
    },[])

    return(
    <div>
<Form className="create-form">
    <Form.Field>
        <label>First Name</label>
        <input name="fname" value={firstName} onChange={(e)=>setFirstName(e.target.value)} placeholder="first Name"></input>
    </Form.Field>
    <Form.Field>
        <label>Last Name</label>
        <input name="lname" value={lastName} onChange={(e)=>setLastName(e.target.value)} placeholder="last Name"></input>
    </Form.Field>
    
    <Button type="submit" onClick={sendDatatoAPI}>Update</Button>
</Form>
</div>
    )
}


