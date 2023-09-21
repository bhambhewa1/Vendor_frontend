import { Box, Button, FormLabel, Typography, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import InputField from '../Custom/Input/InputField';
import { set, useForm } from 'react-hook-form';
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useFormik } from "formik";
import { storage } from '../../config/storage';
import Toastify from "../SnackBar/Toastify";
import { connect } from "react-redux";
import { SaveProductDetails } from '../../redux/action/products';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../../redux/action/products';
import { IMG_URL } from '../../config/apiUrl';

const schema = yup.object().shape({
    product_name: yup.string().required("Please enter product name"),
    product_price: yup.number().required("Please enter product price."),
    description: yup.string().required("Please enter product description"),
  });


const ProductForm = ({ SaveProductDetails, fetchProductDetails }) => {
  const [moreImg, setMoreImg] = useState({ id: "", path: "", src: "" }); // src -> for preview image
  const [imagesArray, setImagesArray] = useState([]);
  const [Imgerr,setImgerr] = useState(false);
  const [isDisable,setIsDisable] = useState(false);
  const [disableImgButton,setDisableImgButton] = useState(false);
  const navigate = useNavigate();
  const { productID } = useParams();

  const [defaultValues, setDefaultValues] = useState({
    product_name:"",
    product_price:"",
    description:""
  });  

  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema: schema,
    onSubmit: (value) => {
      setDefaultValues(value);
      onSubmit(value);
    },
    enableReinitialize: true,
  });

  const onSubmit = async (model) => {
    let item = model;
    item.moreImg = imagesArray;
    item.user_id = storage.fetch.userId();
    item.product_id = productID;
  // console.log(model)

      SaveProductDetails(item).then((res) => {
        if (res?.data?.status) {
          toast.success(res?.data?.message);
          setTimeout(() => {
            navigate("/user/products");
          }, 1000);
        }
      });
  };


  const handleMoreImg = (e) => {
    setMoreImg(e.target.files[0]);
  };
  const handleSubmitImages = (id) => {
    if (moreImg.path !== "" && imagesArray.length < 5 ) {
      imagesArray.push({
        id: id,
        path: moreImg.name,
        src: URL.createObjectURL(moreImg),
      });
      toast.success("Image Added");
      setImagesArray([...imagesArray]);
    }
      document.querySelector(".file").value = "";
      setMoreImg("");
      if(imagesArray.length === 5){
        setImgerr(true);
      }
  };

  
    useEffect(() => {
        window.scrollTo(0, 0);
        if(productID){
        getRequestData();
        }
      }, [productID]);

      const getRequestData = () => {
        fetchProductDetails({product_id: productID}).then((res) => {
          if(res.data){
          setImagesArray(res.data.data.product_images);
          setDefaultValues({
            product_name: res.data.data.product_details.product_name,
            product_price: res.data.data.product_details.product_price,
            description: res.data.data.product_details.description,
          })
          // console.log(res.data)
          }
          if(storage.fetch.userType === "Admin"){
            setIsDisable(true);
          }
        })
      }    
      
  return (
    <form
      style={{ minHeight: "600px" }}
      name="RegisterForm"
      onSubmit={formik.handleSubmit}
    >
    <Box sx={{ml:2}}>
              <Box sx={{mb:3,mt:3}}>
                  <FormLabel >
                    Product Name<span style={{color:"red"}}>*</span>
                  </FormLabel>

                  <TextField
                    name="product_name"
                    value={formik.values.product_name}
                    onChange={formik.handleChange}
                    type="text"
                    variant="filled"
                    disabled={isDisable}
                    InputProps={{ disableUnderline: true, pt: "10px" }}
                    inputProps={{
                      style: {
                        paddingTop: "16px",
                        paddingBottom: "15px",
                        fontSize: "14px",
                      },
                    }}
                    color="primary"
                    placeholder="Enter product name here"
                    sx={{
                      width: "100%",
                      border: "none",
                      mt: "10px",
                    }}
                    autoComplete="false"
                  />
                  {formik.errors.product_name && formik.touched.product_name ? (
                    <p style={{color:"red"}}>{formik.errors.product_name}</p>
                  ) : null}
                </Box>

            
                <Box sx={{mb:3}} >
                  <FormLabel >
                    Product Price<span style={{color:"red"}}>*</span>
                  </FormLabel>

                  <TextField
                    name="product_price"
                    value={formik.values.product_price}
                    onChange={formik.handleChange}
                    type="number"
                    variant="filled"
                    disabled={isDisable}
                    InputProps={{ disableUnderline: true, pt: "10px" }}
                    inputProps={{
                      style: {
                        paddingTop: "16px",
                        paddingBottom: "15px",
                        fontSize: "14px",
                      },
                    }}
                    color="primary"
                    placeholder="Enter product price here"
                    sx={{
                      width: "100%",
                      border: "none",
                      mt: "10px",
                    }}
                    autoComplete="false"
                  />
                  {formik.errors.product_price && formik.touched.product_price ? (
                    <p style={{color:"red"}}>{formik.errors.product_price}</p>
                  ) : null}
                </Box>


            <Box sx={{mb:3}}>
                  <FormLabel >
                   Description<span style={{color:"red"}}>*</span>
                  </FormLabel>

                  <TextField
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    type="text"
                    variant="filled"
                    disabled={isDisable}
                    InputProps={{ disableUnderline: true, pt: "10px" }}
                    inputProps={{
                      style: {
                        paddingTop: "16px",
                        paddingBottom: "15px",
                        fontSize: "14px",
                      },
                    }}
                    color="primary"
                    placeholder="Enter product description here"
                    sx={{
                      width: "100%",
                      border: "none",
                      mt: "10px",
                    }}
                    autoComplete="false"
                  />
                  {formik.errors.description && formik.touched.description ? (
                    <p style={{color:"red"}}>{formik.errors.description}</p>
                  ) : null}
                </Box>



              <Box sx={Style.inputStyle1} >
                <Box
                  sx={{
                    minWidth: { xs: "45%" },
                    width: { xs: "85%", sm: "85%", md: "75%", lg: "95%" },
                    mb: 2,
                    mr: 2,
                    color: { xs: "transparent", sm: "inherit" },
                  }}
                >
                  <FormLabel sx={Style.label} >More Images</FormLabel>
                  <Box sx={{ bgcolor: "#F6F6F6" }}>
                    <input
                      style={{ padding: "17px 12px", overflow: "hidden" }}
                      type="file"
                      id="upload"
                      className="file"
                      name="moreImg"
                      accept="image/png, image/gif, image/jpeg"
                      disabled={isDisable}
                      onChange={handleMoreImg}
                    />
                  </Box>
                </Box>
                <Button
                  sx={{
                    bgcolor: "#3D2E57",
                    "&.MuiButtonBase-root:hover": {
                      bgcolor: "#3D2E57",
                    },
                    color: "white",
                    fontSize: 50,
                    maxHeight: 56,
                    mt: 3.5,
                    ml: { xs: 0, md: 0 },
                    // width:{xs:"1%", sm: "10%",md:"10%"}
                  }}
                  component="span"
                  disabled={isDisable && disableImgButton}
                  onClick={() => {
                    if (moreImg === undefined || moreImg === "") {
                      setDisableImgButton(true);
                    }else {
                    handleSubmitImages("");
                    }
                  }}                  
                >
                  +
                </Button>
              </Box>
              {Imgerr && <p style={{ color: "red" }}>You can add 5 images only !</p>}
            
           <Box sx={{
            display: "flex",
            flexWrap: "wrap",
            ml:3,
           }}>
            {
              imagesArray.map((item, ind) => (
                <Box sx={{border:"1px solid black", width:"20%", mt: 3, ml: 3, p: 2}} >
                <img style={{ maxWidth:"100%"  }}
                crossOrigin="anonymous" 
                src={item.src}
                /> 
                <Typography sx={{mt:2}}>{item.path}</Typography>
                </Box>
              ))
            }
           </Box>

           
           <Toastify />

           <Button sx={{
            float: "right",
           "&.MuiButtonBase-root:hover": {
            bgcolor: "#FFFFFF",
            border: "1.5px solid #3D2E57",
          },
          bgcolor: "#FFFFFF",
          color: "#3D2E57",
          border: "1.5px solid #3D2E57",
          // p: 1,
          mt:4,mr:4,
          mb: 2,
          borderRadius: "15px",
          fontSize: { xs: "20px", md: "22px", lg: "24px" },
          fontWeight: 500,
          textTransform: "none",
        }}
        variant="outlined"
        disabled={isDisable}
        type="submit"
        >
             Save
           </Button>

    </Box>
    </form>
  )
}
function mapDispatchToProps(dispatch) {
  return {
    // getRequestList: () => dispatch(getRequestList()),
    SaveProductDetails: (data) => dispatch(SaveProductDetails(data)),
    fetchProductDetails: (data) => dispatch(fetchProductDetails(data))
  };
}

export default connect(null, mapDispatchToProps)(ProductForm);

const Style = {
  label: {
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "20px",
    color: "#333333",
  },
  inputStyle1: {
    width: {
      xs: "95%",
    },
    mb: 2,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
}