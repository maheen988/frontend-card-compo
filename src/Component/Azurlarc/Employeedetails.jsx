import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, CardContent, Grid } from "@mui/material";

export const Employeedetails = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const reply = await axios.get("http://localhost:3003/employees");
    setData(reply.data);
    console.log(data);
  };

  const handleDelete = async (elem) => {
    console.log("======>", elem);
    const payload = { elem };
    const result = await axios.post("http://localhost:3003/employees", payload);
    getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Grid container spacing={2}>
      <h1>Employeedetails?</h1>
      {data.map((item, index) => {
        return (
          <Grid>
            <Grid item sx={2}>
              <Card>
                <CardContent>
                  <h3>ID:{item._id}</h3>
                  <h1>First:{item.First}</h1>
                  <h1>Photo:{item.Photo}</h1>
                  <h4>Age:{item.Age}</h4>
                  <h6>Email:{item.Email}</h6>
                  <h6>Date:{item.Date}</h6>
                  <p>Address:{item.Addre}</p>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => handleDelete(item)}
                  >
                    Delete
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};
