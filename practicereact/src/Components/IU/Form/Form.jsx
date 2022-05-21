import './Form.css'
import { useState } from 'react'
export const Form=()=>{

    const[datas, setDatas]=useState({
        name:'',
        email:'',
        comment:''
    })

    const handleImputChange=(event)=>{
        // console.log(event.target.value)


        setDatas({
            ...datas,
            [event.target.name]:event.target.value,
            [event.target.email]:event.target.value,
            [event.target.comment]:event.target.value
            
        })
    }

    const sendData=(event)=>{
        event.preventDefault();
        console.log(datas.nombre)
        console.log(datas.email)
        console.log(datas.comment)
    }
    return(
        <>
        <form className='form' onSubmit={sendData}>
            <h2>Send us ur comments!</h2>
            <input className='inputs' type="text" name='name' placeholder='Name'  onChange={handleImputChange}/>
            <input  className='inputs' type="email" name='email' placeholder='E-mail'  onChange={handleImputChange}/>
            <textarea className='inputs' name='comment' placeholder='Write something...'  onChange={handleImputChange}></textarea><br/>
            <button className="btn-Send">Send</button>
        </form>
        <div className="Comments">
            <h3>Comments</h3>
            <h6>{datas.name}</h6>
            <p>{datas.email}</p>
            <p>{datas.comment}</p>
        </div>
        </>
    )
}