import { Typography,Box,makeStyles,TableContainer, Table,TableBody,TableCell,TableHead,TableRow,Paper,IconButton,
Tooltip } from "@material-ui/core";
import {orange} from "@material-ui/core/colors";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {Link} from 'react-router-dom';
import axios from "axios";
import { useState,useEffect } from "react"; 
const useStyles=makeStyles({
    stuListColor:{
        backgroundColor:orange[400],
        color:"white"
    }, 
    tableHeadCell:{
        color:"white",
        fontWeight:"bold",
        fontSize:16
    }, 
})
const List = () => {
    const classes=useStyles();
    const[students, setStudents]=useState([]);
    useEffect(()=>{
        async function getAllStudent(){
            try{
                const students=await axios.get("http://localhost:3000/students")
                console.log(students.data);
                setStudents(students.data);
            }
            catch(error){
                console.log("somthing is wrong")
            }
        }
        getAllStudent();
    })

    const handleDelete=async id=>{
        await axios.delete(`http://localhost:3000/students/${id}`)
    }
     
  return (
   <>   
   <Box textAlign="center" p={2} className={classes.stuListColor}>
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
        {
                             students.map((students,i) => (                                 
                                  <TableRow key={i}>
                                  <TableCell align="center">{i+1}</TableCell>
                                  <TableCell align="center">{students.stuname}</TableCell>
                                  <TableCell align="center">{students.email}</TableCell>
                                  <TableCell align="center">
                                        <Tooltip title="view">
                                            <IconButton>
                                                <Link to={`/view/${students.id}`}>
                                                <VisibilityIcon color="primary" />
                                                </Link>
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Edit">
                                           <IconButton>
                                               <Link to ={`/edit/${students.id}`}>
                                                  <EditIcon />
                                               </Link>
                                           </IconButton>
                                        </Tooltip>
                                        <Tooltip title="Delete">
                                           <IconButton onClick={()=>handleDelete(students.id)}>
                                               <DeleteIcon color="secondry" />
                                           </IconButton>
                                        </Tooltip>
                                        
                                  </TableCell>

                              
                              </TableRow>
                             ))    
                        }
                    </TableBody>
                </Table>
            </TableContainer>
                              
   </>
  )
}

export default List