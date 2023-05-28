

import './App.css'
import Button from './components/Button'
import InputForm from './components/InputForm'
import NavBar from './components/NavBar'
import { masterCheckbox } from './components/Redux/nameSlice'
import Table from './components/Table'
import { useState } from 'react'
function App() {
const [mastercheckStatus, setmastercheckStatus] = useState(false)  ;
const updateMastercheckbox=(b)=>{
  setmastercheckStatus(b);
  }
  return (
    <>
      <NavBar/>
      
      <InputForm/>
      <Table updateMastercheckbox={updateMastercheckbox} mastercheckStatus={mastercheckStatus} />
<Button mastercheckStatus={mastercheckStatus} updateMastercheckbox={updateMastercheckbox}/>
     </>


      
      
      
      )
}

export default App
