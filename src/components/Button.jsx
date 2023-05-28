import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAll, deleteChecked } from './Redux/nameSlice';

export default function Button(props) {
  const dispatch=useDispatch();
  const handleDeleteSelected=(e)=>{
    e.preventDefault();
    dispatch(deleteChecked());
    props.updateMastercheckbox(false);

  }
  const handleDeleteAll=(e)=>{
    e.preventDefault();
    dispatch(deleteAll());
    props.updateMastercheckbox(false);
  }
  return (
    
    <div className="container d-flex justify-content-between">

    <button className="btn btn-primary" type="submit" onClick={handleDeleteSelected}>Delete Selected</button>
    <button className="btn btn-primary" type="submit" onClick={handleDeleteAll}>Delete All</button>
    </div>
  )
}
