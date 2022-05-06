import { Typography, Box, makeStyles, Grid, TextField,Button} from "@material-ui/core"
//import { deepPurple } from "@material-ui/core/colors"
import {deepPurple,green} from '@material-ui/core/colors';
import List from "../student/List";
import axios from "axios";
import  {useState} from "react";
import { Link,useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
//  import VisibilityIcon from '@material-ui/icons/Visibility';
//  import EditiIcon from '@material-ui/icons/Edit';
//  import DeleteIcon from '@material-ui/icons/Delete';
  
 const useStyle=makeStyles({
     headingColor:{
         backgroundColor:deepPurple[400],
         color:"white"
     },
     addStuColor:{
         backgroundColor:green[400],
         color:"white"
     },
    //  stuListColor:{
    //      backgroundColor:orange[400],
    //      color:"white"
    //  },
    //  tableHeadCell:{
    //      color:"white",
    //      fontWeight:"bold",
    //      fontSize:16
    //  },
 })
function Home() {
    const classes=useStyle();
    const [student,setStudent]=useState({
        stuname:"",
        email:""
    });
    function onTextFieldChange(e){
        setStudent({
            ...student,
         [e.target.name]:e.target.value
        
        })
        //console.log(student);
       
    }
    async function onFormSubmit(e){
         e.preventDefault()
         try{
             await axios.post(`http://localhost:3000/students`,student);
         }
          catch(error){
              console.log("Somthong going Wrong");
          }
    }
    let navigate = useNavigate();
  function handleClick() {
    navigate('/logout')
  }
    
  return (
    <>
        <Box textAlign="center" className={classes.headingColor} p={2}>
            <Typography variant="h2">React CRUD with API Call</Typography>
        </Box>
        <Grid container justify="center" spacing={4}>
           <Grid item md={6} xs={12}>
           <Box textAlign="center" p={2} className={classes.addStuColor} md={2}>
            <Typography variant="h4">Add Student</Typography>
           </Box>
               <form nonValidate>
                <Grid container spacing={2}>
                     <Grid item xs={12}>
                         <TextField autoComplete="stuname" name="stuname"
                         variant="outlined" required fullWidth id="stuname" label="Name" onChange={e=>onTextFieldChange(e)} />
                     </Grid>

                     <Grid item xs={12}>
                         <TextField autoComplete="email" name="email"
                         variant="outlined" required fullWidth id="email" label="Email Adress" onChange={e=>onTextFieldChange(e)} />
                     </Grid>
                </Grid>
                 <Box m={3}>
                     <Button type="submit" variant="contained" color="primary" fullWidth onClick={e=>onFormSubmit(e)}>Add</Button>
                 </Box>
                 <Box m={9}>
                     <Button type="submit" variant="contained" color="primary" onClick={handleClick}>Logout Here!</Button>
                 </Box>
                </form>
           </Grid> 

                <Grid item md={6} xs={12}>
                {/*<Box textAlign="center" p={2} className={classes.stuListColor}>
                  <Typography variant="h4">Student List</Typography>  
                </Box>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow style={{backgroundColor:"#616161"}}>
                                <TableCell align="center" className={classes.tableHeadCell}>Id</TableCell>
                                <TableCell align="center" className={classes.tableHeadCell}>Name</TableCell>
                                <TableCell align="center" className={classes.tableHeadCell}>Email</TableCell>
                                <TableCell align="center" className={classes.tableHeadCell}>Action</TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                              <TableRow>
                                  <TableCell align="center">1</TableCell>
                                  <TableCell align="center">Nitish</TableCell>
                                  <TableCell align="center">nitish@gmail.com</TableCell>
                                  <TableCell align="center">
                                        <Tooltip title="view">
                                            <IconButton>
                                                <Link to="/view/1">
                                                <VisibilityIcon color="primary"/>
                                                </Link>
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Edit">
                                           <IconButton>
                                               <Link to ="/edit/1">
                                                  <EditiIcon />
                                               </Link>
                                           </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                           <IconButton>
                                               <DeleteIcon color="secondry" />
                                           </IconButton>
                                        </Tooltip>
                                        
                                  </TableCell>

                              
                              </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer> */}
                 <List />
               </Grid>
        </Grid>
    </>
  )
}

export default Home