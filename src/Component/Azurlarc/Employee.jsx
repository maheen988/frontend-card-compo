
import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, {  useState } from "react";
import { createContext } from "react";
import { Employeedetails } from "./Employeedetails";


export const props=createContext()

export const Employee = () => {
  const [data, setData] = useState([]);
  const [FirstName, setFrist] = useState("");
  const [LastName, setPhoto] = useState("");
  const [Age, setAge] = useState("")
  const [Email, setEmail] = useState("");
  const [Date, setDate] = useState("");
  const [Addre, setAddre] = useState("");

 

  const handleAdd= async()=>{
      const payload = { FirstName, LastName, Age,  Email, Date, Addre };
    const result= await axios.post("http://localhost:3003/employees",payload)
    setData(result)
    // console.log(data);
  }

  
  return (
    <Grid className="Gridparent">
      <form className="Regform">
        <h2>Sign Up</h2>
        <Grid container spacing={2} sx={{ marginTop: "10px" }}>
          <Grid item xs={4}>
            <TextField
              label="FirstName"
              variant="outlined"
              fullWidth
              onChange={(e) => setFrist(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="LastName"
              variant="outlined"
              fullWidth
              
              onChange={(e) => setPhoto(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Age"
              variant="outlined"
              fullWidth
              onChange={(e) => setAge(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              type={"date"}
              variant="outlined"
              fullWidth
              onChange={(e) => setDate(e.target.value)}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
            
              label="Address"
              variant="outlined"
              fullWidth
              onChange={(e) => setAddre(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="success" onClick={handleAdd}>
            Registration
          </Button>
        </Grid>
        
        <Employeedetails item={data} />
      </form>
    </Grid>
  );
};
