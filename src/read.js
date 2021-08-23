import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export default function Read() {

    const [apiData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://60efffc2f587af00179d3c27.mockapi.io/fakeData`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    },[])

    const setData=(id,firstName,lastName)=>{
        //console.log(id);
        localStorage.setItem("ID",id);
        localStorage.setItem("firstName",firstName);
        localStorage.setItem("lastName",lastName);

    }
     
    const getData=()=>{
        axios.get(`https://60efffc2f587af00179d3c27.mockapi.io/fakeData`)
        .then((getData) => {
            setAPIData(getData.data);
        })

    }

    const onDelete=(id)=>{
        let result = window.confirm("Are you sure you want to delete?");
      if(result){
        axios.delete(`https://60efffc2f587af00179d3c27.mockapi.io/fakeData/${id}`)
        .then(()=>{
            getData();
        })

    }
}

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {
                        apiData.map((data) => {
                            return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                               <Table.Cell>{data.firstName}</Table.Cell>
                               <Table.Cell>{data.lastName}</Table.Cell>
                               <Table.Cell>
                                   <Link to="/update">
                                   <Button color="green" onClick={()=>setData(data.id,data.firstName,data.lastName)}>Update</Button>
                                   </Link>
                               </Table.Cell>
                               <Table.Cell>
                              
                                   <Button color="red"onClick={()=>onDelete(data.id)}>Delete</Button>
                                 
                               </Table.Cell>
                           </Table.Row>
                           )
                        })
                    }



                </Table.Body>
            </Table>
        </div>
    )

}