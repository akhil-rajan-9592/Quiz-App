import React, { useState,useContext } from 'react'
import { FirebaseContext } from '../store/FirebaseContext';
import { useHistory } from 'react-router-dom';
import './Add.css'

function Add() {

  const {firebase} = useContext(FirebaseContext)
  const history = useHistory();

  const [mtitle,setMtitle] = useState('');
  const [stitle,setStitle] = useState('');
  const [qstian,setQstian] = useState('');
  const [anser,setAnser] = useState('');

  const addSubmit = (e)=>{

    e.preventDefault()
    firebase.firestore().collection('questions').add({
      mainTitle : mtitle,
      subTitle : stitle,
      question : qstian,
      answer :anser
    }).then(()=>{
        alert("Questions added")
        history.push('/');
    })
  }

  return (
    <div>
      <div className="form-box">
        <form onSubmit={addSubmit} >
          <label htmlFor="fname">Mian Title</label>
          <input type="text" id="mtitle" name="mtitle" placeholder="Mian Title" onChange={(e)=>setMtitle(e.target.value)} value={mtitle} />
          <label htmlFor="fname">Sub Title</label>
          <input type="text" id="stitle" name="stitle" placeholder="Sub Title" onChange={(e)=>setStitle(e.target.value)} value={stitle}  />
          <label htmlFor="fname">Question</label>
          <input type="text" id="qustin" name="qustin" placeholder="Question" onChange={(e)=>setQstian(e.target.value)} value={qstian}  />
          <label htmlFor="fname">Answer</label>
          <input type="text" id="ansr" name="ansr" placeholder="Answer" onChange={(e)=>setAnser(e.target.value)} value={anser}  />
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    </div>
  )
}

export default Add
