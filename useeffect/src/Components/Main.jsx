import React from 'react'
import { useEffect,useState } from 'react'


export const Main = () => {

    const [users, setusers]=  useState([])

    useEffect(()=>{
        getdata()
    },[])

    const getdata= async()=>{
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const response= await data.json()
        console.log(response)
        setusers(response)
    }

  return (
      <>
      
      <div><h3>Team</h3>
    
          {
              users.map(item=>(
              <h2 key={item.id}>{item.name}-{item.username}</h2>         
              ))
          }
          
      </div>
      </>
  )
}
