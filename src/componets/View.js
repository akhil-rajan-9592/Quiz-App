import React,{useContext,useEffect, useState} from 'react'
import './View.css'
import { FirebaseContext } from '../store/FirebaseContext';
//import Subtitle from './Subtitle';

function View() {

  const {firebase} = useContext(FirebaseContext);
  const [qtns,setQtns] = useState([]);
  const [split,setSplit] = useState(null);
  const [maintitle,setMaintitle] = useState('')
  const [subtitle,setSubtitle] = useState('')
  const [curentsplit,setCurentsplit] = useState('')

  useEffect(()=>{
    firebase.firestore().collection('questions').get()
    .then(snapshot=>{
      const allQstns = snapshot.docs.map((qtn)=>{
        return{
          ...qtn.data()
        }
      })
      
      setQtns(allQstns)
      const allMaintitle = allQstns.map((qtn)=>{
        return qtn.mainTitle
      })
      var result = [];
      result = allMaintitle.filter(function(item, pos, self) {
        return self.indexOf(item) === pos;
      })
      setMaintitle(result)
      //console.log(result);  
    })
  },[firebase]);

  //console.log(typeof(maintitle));
  
  function getMaintitle(e){
    let title = e.target.value
    //setCurenttitle(title)
    firebase.firestore().collection('questions').where('mainTitle', '==', title).get()
    .then(snapshot=>{
      const allQstns = snapshot.docs.map((qtn)=>{
        return{
          ...qtn.data()
        }
      })
      //slice()
      setQtns(allQstns)
      curentsplit ? setSplit(allQstns.slice(0,curentsplit)) : setSplit(allQstns);
      const allMaintitle = allQstns.map((qtn)=>{
        return qtn.subTitle
      })
      var result = [];
      result = allMaintitle.filter(function(item, pos, self) {
        return self.indexOf(item) === pos;
      })
      setSubtitle(result)
    })
  }
  function getSubtitle(e){
    let subtitle = e.target.value;
    firebase.firestore().collection('questions').where('subTitle', '==', subtitle).get()
    .then(snapshot=>{
      const allQstns = snapshot.docs.map((qtn)=>{
        return{
          ...qtn.data()
        }
      })
      //slice()
      setQtns(allQstns)
      curentsplit ? setSplit(allQstns.slice(0,curentsplit)) : setSplit(allQstns);
    })
  }
  function gg(e){
    let no = e.target.value
    setCurentsplit(no)
    no ? setSplit(qtns.slice(0,no)) : setSplit(qtns);
  }
  return (
    <div>
      <div className="view-wrapper">
        <div className="topbar">
           <div className="items">
            <select onChange ={(e)=> getMaintitle(e) }>
              <option value="">Main Title</option>
              { maintitle ?
                maintitle.map((title,index)=>{
                  return <option key={index} value={title} >{title}</option>
                })
                : ''
              }
            </select>
          </div>
          <div className="items">
            <select onChange ={(e)=> getSubtitle(e) }>
              <option value="">Sub Title</option>
              { subtitle ?
                subtitle.map((title,index)=>{
                  return <option key={index} value={title} >{title}</option>
                })
                : ''
              }
            </select>
          </div> 
          <div className="items">
            <select onChange ={(e)=> gg(e) }>
              <option value="">No.of Questions</option>
              <option value="2" >2</option>
              <option value="3">3</option>
              <option value="4" >4</option>
            </select>
          </div>
        </div>
        <div className="qst-wrapper">
          <ul>
            {
              split ?
              split.map((qtn,index)=>{
                return(
                  <li key={index}>
                    <div className="li-group">
                      <div className="top">
                        <span className='mtitle'> {qtn.mainTitle}</span>
                        <span className='stitle'>{qtn.subTitle}</span>
                      </div>
                      <div className="qstins">
                        <span className='qst'>Qns : {qtn.question}</span>
                        <span className="ansr">Ans : {qtn.answer}</span>
                      </div>
                    </div>
                  </li>
                );
              })
              :
              qtns.map((qtn,index)=>{
                return(
                  <li key={index}>
                    <div className="li-group">
                      <div className="top">
                        <span className='mtitle'> {qtn.mainTitle}</span>
                        <span className='stitle'>{qtn.subTitle}</span>
                      </div>
                      <div className="qstins">
                        <span className='qst'>Qns : {qtn.question}</span>
                        <span className="ansr">Ans : {qtn.answer}</span>
                      </div>
                    </div>
                  </li>
                );
              })
              
            }
          </ul>
        </div>
      </div>

    </div>
  )
}

export default View
