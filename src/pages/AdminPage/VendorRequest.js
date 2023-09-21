import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getRequestList, sendLoginResponse } from '../../redux/action/AdminPage';
import Toastify from "../SnackBar/Toastify";
import { connect } from "react-redux";


 const VendorRequest = ({ getRequestList, sendLoginResponse }) => {
     const [userlist,setuserlist] = useState([]);
     const [request,setRequest] = useState("");

  useEffect(() => {
    getRequestData();
  }, []);

  const getRequestData = () => {
    getRequestList().then((res) => {
      if(res.data){
      setuserlist(res?.data?.data?.user_list);
      }
    })
  }

   const handleClick = (user_id, val) => {
        setRequest(val);
        let obj = { requestVal: val, user_id}
        sendLoginResponse(obj).then((res) => {
        if(res?.data){
          // console.log(res?.data)
          getRequestData();
        }
        })
   }


  return (
    <Box>
      <h1> Vendor's Request List </h1>
        <table border={"1px solid black"} style={{width:"100%", padding: "10px"}}>
            <tr>
                <td>Vendor Name </td>
                <td>Email</td>
                <td>Action</td>
            </tr>
          {
            userlist.map((item,ind) => (
                <tr key={ind}>
                    <td>{item.firstName + " " + item.lastName}</td>
                    <td>{item.email}</td>
                    <td style={{display:"flex", justifyContent: "space-evenly"}}>
                        <Button sx={{mr:3,
                        "&.MuiButtonBase-root:hover": {
                            bgcolor: "#FFFFFF",
                            border: "1.5px solid #3D2E57",
                          },
                          bgcolor: "#FFFFFF",
                          color: "#3D2E57",
                          border: "1.5px solid #3D2E57",
                          fontWeight: 500,
                          textTransform: "none",
                        }}
                        variant="outlined"
                        onClick={() => handleClick(item.user_id,2)}>
                            Approve   
                        </Button>
                        <Button sx={{
                        "&.MuiButtonBase-root:hover": {
                            bgcolor: "#FFFFFF",
                            border: "1.5px solid #3D2E57",
                          },
                          bgcolor: "#FFFFFF",
                          color: "#3D2E57",
                          border: "1.5px solid #3D2E57",
                          fontWeight: 500,
                          textTransform: "none",
                        }}
                        variant="outlined"
                        onClick={() => handleClick(item.user_id,0)}>
                            Decline
                        </Button>
                    </td>
                </tr>
            ))
          }
        </table>
      <Toastify />
    </Box>
  )
}
function mapDispatchToProps(dispatch) {
  return {
    getRequestList: () => dispatch(getRequestList()),
    sendLoginResponse: (data) => dispatch(sendLoginResponse(data))
  };
}

export default connect(null, mapDispatchToProps)(VendorRequest);