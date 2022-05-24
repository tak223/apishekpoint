import React, { useEffect, useState } from 'react'
import User from './User';
import { Spinner } from 'react-bootstrap';

function UserList() {
    const [loading,setloading]= useState(true);
    const [data,setdata]= useState(null);
    const axios = require('axios');
   useEffect(()=> {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
     setdata(response.data);
     setloading(false)
      console.log(data); 
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
   },[]);

  return (
    <div>
        {
            loading? (<Spinner animation="border" className='spinner' /> ): (data&&data.map((el)=> <User  key={data.id} el={el} />  ))
        }

    </div>
  )
}

export default UserList