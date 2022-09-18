import * as React from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState} from 'react';
import axios from 'axios';


const Projects = () => {
  const[projectList,setProjectList] = useState([]);
  const [usertype, setUserType] = useState(localStorage.getItem('userType'));

  useEffect(() => {
  
      getProjects();
    
  }, [])

  let getProjects = async()=>{
      try {
      
      axios.get('https://projectdomaincer.herokuapp.com/api/projects',).then((response) => {
				setProjectList([]);
        // console.log(response.data);
        let d = Object.keys(response.data);
        let result = [];
        d.map( d1=> {
          console.log(response.data[d1]);
          result.push(response.data[d1]);
        })
        setProjectList(result);
				
			
			});
         
      } catch (error) {
          console.log('error')
      }
  }

  const handleSubmit=(e)=>{
    const name = e.currentTarget.dataset.name;
    axios.put(`https://projectdomaincer.herokuapp.com/api/projects/apply/${name}/${localStorage.getItem('user')}`).then((response) => {
      if(response.message){
        alert('Applied Successfully');
      }
    });



  }
  const viewFunction = (e) => {
    console.log(e.currentTarget);
    if(e.currentTarget.dataset.appliedby){
      alert("Applied By :" + e.currentTarget.dataset.appliedby);

    } else {
      alert('No applications');
    }
  }

  return (
    <>
      <TableContainer component={Paper} className="table">
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="tableCell">Project Name</TableCell>
              <TableCell className="tableCell">Code</TableCell>
              <TableCell className="tableCell">Details</TableCell>
              <TableCell className="tableCell">Posted By</TableCell>
              <TableCell className="tableCell">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projectList.map((row) => (
              
              <TableRow >
                <TableCell className="tableCell">{row.name}</TableCell>
                <TableCell className="tableCell">
                  {row.code}
                </TableCell>
                <TableCell className="tableCell">{row.details}</TableCell>
                <TableCell className="tableCell">{row.postedBy}</TableCell>
                <TableCell className="tableCell">
                  {
                    usertype === 'freelancer' ? <button type="submit" className="green_btn" disabled={row.appliedBy} onClick={handleSubmit} data-name={row.name}>
                    Apply
                </button>  : <button type="submit" className="green_btn" onClick={viewFunction} data-appliedBy={row.appliedBy}>
                      View
						      </button> 
                  }
                   {/* <button type="submit" className="green_btn" onClick={handleSubmit} data-name={row.name}>
                      {usertype === 'freelancer' ? 'apply' : 'view'}
						      </button>  */}
                </TableCell>
               

              </TableRow>
             
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </>
  );
};

export default Projects;