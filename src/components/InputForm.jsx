import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addName } from './Redux/nameSlice';

export default function InputForm() {
 
    const dispatch=useDispatch();
const [user, setuser] = useState();
const handleonChange=(e)=>{
    setuser({...user,[e.target.id]:e.target.value,isChecked:false});
    

}
const handleonSubmit=(e)=>{
    e.preventDefault();
       
    dispatch(addName(user));
    
}
  return (

    <div className="container my-4">
    <form onSubmit={handleonSubmit}>
    <h3>Input Name</h3>
  <div className="mb-3">
    <label htmlFor="exampleInputName1" className="form-label">First Name
    </label>
    <input type="firstName" className="form-control" id="firstName"  aria-describedby="NameHelp" onChange={handleonChange} />
    
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputlastName1" className="form-label" >Last Name</label>
    <input type="lastName" className="form-control" id="lastName" onChange={handleonChange}/>
  </div>
 
  <button type="submit" className="btn btn-primary"  >Submit</button>
</form>
</div>
  )
}
