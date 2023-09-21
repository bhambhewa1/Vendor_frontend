import { Box, Typography, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate, useParams } from 'react-router-dom';
import { storage } from '../../config/storage';
import Toastify from "../SnackBar/Toastify";
import { connect } from "react-redux";
import { deleteProducts, getProductList } from '../../redux/action/products';
import { toast } from 'react-toastify';



const Products = ({ getProductList, deleteProducts }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const { userID } = useParams();
 
  useEffect(() => {
    getProductsListData();
  }, []);
 
  const getProductsListData = () => {
    let obj = "";
    if(storage.fetch.userType() == "Admin"){
       obj = userID;
    }else{
      obj = storage.fetch.userId();
    }
    getProductList({user_id: obj}).then((res) => {
      if(res?.data){
      setProducts(res?.data?.data?.product_list);
      }
    })
  }

  const deleteProductAPI = (product_id) => {
    deleteProducts({ product_id: product_id}).then((res) => {
      if(res?.data){
        getProductsListData();
      }
    })
  }

  return (
    <Box sx={{
      // bgcolor: "red",
      display: "flex",
      height: "100%",
      flexDirection: "column",
      borderRadius: 4,
      width: "100%",
    }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: 3,
          pb: 2,
        }}
      >
        <Typography sx={Style.typographyStyle}>Products</Typography>
        { storage.fetch.userType !== "Admin" && 
        <Box sx={Style.linkButton} onClick={() => navigate(`/product/add`)} >
          Add Product{" "}
          <span style={{ marginLeft: "5px", fontSize: "25px", paddingBottom: "5px" }}>+</span>
        </Box>
        }
      </Box>
      <Box sx={{
        display: "flex",
        flexWrap: "wrap",
        ml: 3,
        // bgcolor: "yellow"
      }}>
        {(products.length === 0) &&
         <h1> No Record Found </h1>
        }
        {(products.length !== 0) &&
          products.map((item, ind) => (
            <Box sx={{
              width: "25%",
              bgcolor: "#F3F3F3",
              mt: 3, ml: 3, p: 2
            }} key={ind}>
              <h2> {item.product_name} </h2>
              <h4>${item.product_price}</h4>
              <Typography> {item.description} </Typography>
              <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 3 }}>
                {(storage.fetch.userType() === "Admin") &&
                  <IconButton sx={{  width: "35px", cursor: "pointer", mr: 2 }}
                    onClick={() => navigate(`/product/add/${item.product_id}`)}
                  >
                    <VisibilityIcon />
                  </IconButton>
                }
                {(storage.fetch.userType() !== "Admin") && (
                  <>
                    <IconButton sx={{ width: "35px", cursor: "pointer", mr: 2 }}
                      onClick={() => navigate(`/product/add/${item.product_id}`)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton sx={{ width: "35px", cursor: "pointer" }}
                      onClick={() => deleteProductAPI(item.product_id)}>
                      <DeleteIcon />
                    </IconButton>
                  </>)
                }
              </Box>
            </Box>
          ))
        }
      </Box>
      <Toastify />
    </Box>
  )
}
function mapDispatchToProps(dispatch) {
  return {
    getProductList: (data) => dispatch(getProductList(data)),
    deleteProducts: (data) => dispatch(deleteProducts(data))
  };
}

export default connect(null, mapDispatchToProps)(Products);


const Style = {
  typographyStyle: {
    fontFamily: "Effra",
    fontSize: { xs: "24px", sm: "35px" },
    fontWeight: { xs: "400", sm: "700" },
    lineHeight: { xs: "29px", sm: "42px" },
    letterSpacing: "0em",
    textAlign: "center",
    color: "#3D2E57",
    display: "flex",
  },
  linkButton: {
    pr: { xs: "5px", sm: "7px", md: "14px" },
    pl: { xs: "5px", sm: "7px", md: "14px" },
    borderRadius: "15px",
    border: "1px solid #219653",
    color: "#219653",
    fontSize: "14px",
    lineHeight: "19px",
    height: { xs: "30px", md: "31px" },
    display: "flex",
    alignItems: "center",
    fontWeight: 400,
    cursor: "pointer",
  },
}