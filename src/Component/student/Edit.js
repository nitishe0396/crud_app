import {Typography,Box, makeStyles,Grid,TextField,Button } from "@material-ui/core";
import {deepPurple,green} from '@material-ui/core/colors';
import { useState,useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
const useStyles=makeStyles({
    headingColor:{
        backgroundColor:deepPurple[400],
        color:"white"
    },
    addStuColor:{
        backgroundColor:green[400],
        color:"white"
    },

})


const Edit = () => {
    const classes=useStyles(); 
    const {id}=useParams();
    //const history=useNavigate();
    const [student,setStudent]=useState({
        stuname:"",
        email:""
    });
    useEffect(()=>{
        async function getStudent(){
            try{
                const student=await axios.get(`http://localhost:3000/students/${id}`)
                //console.log(student.data);
                setStudent(student.data);
            }
            catch(error){
                console.log("somthing is wrong")
            }
        }
        getStudent();
    },[id])
    
  return (
    <>
        <Grid item md={6} xs={12}>
           <Box textAlign="center" p={2} className={classes.addStuColor} md={2}>
            <Typography variant="h4">Edit Student</Typography>
           </Box>
               <form >

                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                      <TextField autoComplete="id" name="id"
                      variant="outlined" required fullWidth id="id"
                      label="ID" autoFocus value={id} disabled />
                  </Grid>
                     <Grid item xs={12} sm={6}>
                         <TextField autoComplete="stuname" name="stuname"
                         variant="outlined" required fullWidth id="stuname" label="Name" vlaue={student. stuname} />
                     </Grid>

                     <Grid item xs={12} >
                         <TextField autoComplete="email" name="email"
                         variant="outlined" required fullWidth id="email" label="Email Adress" value={student.email} />
                     </Grid>
                </Grid>
                 <Box m={3}>
                     <Button type="submit" variant="contained" color="primary" fullWidth >Update</Button>
                 </Box>
                </form>
                <Box textAlign="center"><Button variant="contained"
                color="primary">Back to Home</Button></Box>
           </Grid>
    </>
    
  )
}

export default Edit