import { useEffect, useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";

const AddProject = () => {



	useEffect(() => {
  
		let user = localStorage.getItem('userType') === 'freelancer' ;
		if(user){
			window.location = '/main';
		}
	  
	}, [])
    const [data, setData] = useState({
		name: "",
		code: "",
		// salary: "",
		details: "",
		postedBy: localStorage.getItem('user')
	});

    
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "https://projectdomaincer.herokuapp.com/api/projects";
			const res = await axios.post(url, data);
			navigate("/main");
			console.log(res.message);
		} catch (error) {
			console.log(error);
		}
	};



  return (
    <>
    <div>    
  
       
    <form className="form_container" onSubmit={handleSubmit}>
						<h1>Post Project</h1>
						<input
							type="text"
							placeholder="Project Name"
							name="name"
							onChange={handleChange}
							value={data.name}
							required
							className="input"
						/>
						<input
							type="text"
							placeholder="Code Details"
							name="code"
							onChange={handleChange}
							value={data.code}
							required
							className="input"
						/>
						{/* <input
							type="text"
							placeholder="Salary"
							name="salary"
							onChange={handleChange}
							value={data.salary}
							required
							className="input"
						/> */}

                        <input
							type="text"
							placeholder="Project Details"
							name="details"
							onChange={handleChange}
							value={data.details}
							required
							className="input"
						/>
                      	<button type="submit" className="green_btn">
							Post
						</button>
					</form>
  </div>



  </>
  )
}

export default AddProject