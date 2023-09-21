import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useNavigate } from 'react-router-dom';
import { getVendorList } from '../../redux/action/AdminPage';
import Toastify from "../SnackBar/Toastify";
import { connect } from "react-redux";

 const VendorList = ({ getVendorList }) => {
    const navigate = useNavigate();
    const [userlist,setuserlist] = useState([]);

 useEffect(() => {
   getRequestData();
 }, []);

 const getRequestData = () => {
   getVendorList().then((res) => {
     if(res.data){
     setuserlist(res.data.data.user_list);
     console.log(res.data)
     }
   })
 }


  return (
    <Box>
      <h1> Vendors List </h1>
        <table border={"1px solid black"} style={{width:"100%", padding: "10px"}}>
            <tr>
                <td>Vendor Name </td>
                <td>Email</td>
                <td>Date of Birth</td>
                <td>Request Status</td>
                <td>Action</td>
            </tr>
          {
            userlist.map((item,ind) => (
                <tr key={ind}>
                    <td>{item.firstName + " " + item.lastName}</td>
                    <td>{item.email}</td>
                    <td>{item.dob}</td>
                    <td>{(item.Request === 0)? "No Request" : (item.Request === 1) ? "Pending" : "Approved" }</td>
                    <td>
                        <VisibilityIcon sx={{cursor: "pointer"}} onClick={() => navigate(`/user/products/${item.user_id}`)} />
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
    getVendorList: () => dispatch(getVendorList()),
  };
}

export default connect(null, mapDispatchToProps)(VendorList);