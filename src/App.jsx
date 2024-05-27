import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import fetchJobList from './javascript/fetchjoblist'
import JobItem  from './components/JobItem'
import './App.css'

function App() {
  const [jobList, setJobList] = useState([])
  const [requirements,setRequirement] = useState([]);
  let data;

  useEffect(() =>{
    async function getJoblist(){

      try{
         data = await fetchJobList()
        if(data !== null){
          setJobList(data);
        }
      }
      catch(error){
        alert("It could not be able to get information");        
      }
    }
    getJoblist()
  }
  ,[]);//se realiza solo una vez  se renderice la pagina

  return (
    <>
    <header>

    </header>
    <main>
      
      {
        jobList.map(Item =>{
          return <JobItem 
            key={Item.id}
            company={Item.company}
            logo = {Item.logo}
            isNew = {Item.new}
            feature={Item.feature}
            position={Item.position}
            role = {Item.role}
            level ={Item.level}
            postedAt = {Item.postedAt}
            contract={Item.contract}
            location={Item.location}
            languages={Item.languages}
            tools={Item.tools}
            
            requirements={requirements}
            updateRequirements={setRequirement}
            data={data}
            updateJoblist={setJobList}
           />
        })        
      }
    </main>
    </>
  )
}

export default App
