import React  from "react";
import {Button,Form } from "semantic-ui-react";
import {useState} from "react";
import axios from "axios";
import { useHistory } from 'react-router';




export default function Create() {
    let history=useHistory();
    const[firstName,setFirstName]=useState("");
    const[lastName,setLastName]=useState("");
    console.log(firstName);
    console.log(lastName);

    const sendDatatoAPI=()=>{
        axios.post(`https://60efffc2f587af00179d3c27.mockapi.io/fakeData`,{
            firstName,
            lastName
        }).then(()=>{
            history.push("/read");
        })

    }

    return(
    <div>
<Form className="create-form">
    <Form.Field>
        <label>First Name</label>
        <input  onChange={(e)=>setFirstName(e.target.value)} placeholder="first Name"></input>
    </Form.Field>
    <Form.Field>
        <label>Last Name</label>
        <input  onChange={(e)=>setLastName(e.target.value)} placeholder="last Name"></input>
    </Form.Field>
    
    <Button type="submit" onClick={sendDatatoAPI}>Submit</Button>
</Form>
</div>
    )
}
