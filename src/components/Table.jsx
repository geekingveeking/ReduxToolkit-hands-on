import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { toggleChecked ,masterCheckbox} from './Redux/nameSlice';

export default function Table(props) {
   const dispatch=useDispatch();
    const handleCheckbox=(e)=>{
        const i=parseInt(e.target.value);
        console.log(i);
                dispatch(toggleChecked(i));
               
    }
   const handleMastercheckbox=(e)=>{
    if(e.target.checked){
      dispatch(masterCheckbox(true));
      props.updateMastercheckbox(true);
    }
      if(!e.target.checked){
      dispatch(masterCheckbox(false));
      props.updateMastercheckbox(false);}

    }
 
    const users=useSelector((state)=>state.customerNames.users);
   console.log(users);
  return (

    <div className="container my-2">
      
<table className="table ">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">
      <input onChange={handleMastercheckbox} checked={props.mastercheckStatus} className="form-check-input mt-0;" type="checkbox" value="" aria-label="Checkbox for following text input" style={{border:"1px solid rgb(0 0 0 / 61%)"}}  />
      </th>
    </tr>
  </thead>
  <tbody>
 { users.map((element ,index)=> {
    
    return(
        <tr key={index}>
        <th scope="row">{index+1}</th>
        <td>{element?.firstName}</td>
        <td>{element?.lastName}</td>
        <td><input onChange={handleCheckbox} checked={element?.isChecked} className="form-check-input mt-0" type="checkbox" value={index} aria-label="Checkbox for following text input" style={{border:"1px solid rgb(0 0 0 / 61%)"}}/></td>
      </tr>)

        
  } )}
    

  </tbody>
</table>
</div> 
 )

}