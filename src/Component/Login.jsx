import React, { useState } from "react";
import {Card,CardContent,Grid,TextField,Checkbox,Button, Link} from "@mui/material";
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import {VisibilityOffIcon }from "@mui/icons-material/VisibilityOff";
// import { ForgotPassword } from "./ForgotPassword";
// import { LineAxisOutlined } from "@mui/icons-material";
import axios from "axios";

export const Login = () => {
const {login,setlogin}=useState([]);

 const getdata=async()=>{
  const result =await axios.post("http://localhost:3030/login")
  .then(()=>console.log("Succesfull"))
  .catch((err)=>console.log(err))
  console.log(result);
 }

const handelLog=()=>{
getdata(login);
console.log(login)
}

  return (
    <div className="login" >
      <Grid container spacing={3}>
        <Card className="card">
          <CardContent>
            <h2>login</h2>
            <h3>PickupBiz...</h3>  <h5 className="pareg"><i>bright your feature</i></h5>
            <Grid item xs={14}>
             <TextField variant="outlined" label="phone"  fullWidth></TextField>
            </Grid>
            <br></br>
            <Grid item xs={14}>
              <TextField
                variant="outlined"
                label="password"
                fullWidth
              ></TextField>
            </Grid>
          </CardContent>
          <p>
            <Checkbox defaultChecked size="small" />
            Remember me <span style={{ marginLeft:"20px" }}>
              <Link  to="./ForgotPassword">forget Password</Link>
            </span>
          </p>
          <Button variant="contained" className="button" style={{}} fullWidth  onClick={()=>handelLog()}>
            SINGH IN
          </Button>
        </Card>
      </Grid>
    </div>
  );
};
