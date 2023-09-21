/* eslint-disable array-callback-return */
import React, { useEffect, useContext } from "react";
import * as yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Box, Button, Typography, Backdrop, CircularProgress } from "@mui/material";
import "./loginpage.css";
import { Link, useNavigate } from "react-router-dom";
import InputField from "../Custom/Input/InputField";
import { storage } from "../../config/storage";
import Toastify from "../SnackBar/Toastify";
import { connect } from "react-redux";
import { getLogin } from "../../redux/action/login/index";
/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  email: yup.string().required("Please enter your email").email("Please enter valid email"),
  password: yup.string().required("Please enter your password.").min(8, "Password is too short - should be 8 chars minimum."),
});

const defaultValues = {
  email: "",
  password: "",
};

const Loginpage = ({ getLogin }) => {
  const navigate = useNavigate();
  const [loader, setloader] = React.useState(false);
  // let cart_id = storage.fetch.carts_id();

  let id = {};
  // if (cart_id !== undefined) {
  //   id = { carts_id: cart_id, carts_id_check: true };
  // } else {
  //   id = { carts_id_check: false };
  // }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { control, formState, handleSubmit, setError } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { isValid, dirtyFields, errors } = formState;

  const onSubmit = async (model) => {
    let item = model;
    let ele = document.getElementsByName('logintype');
    for(let i=0; i<ele.length; i++){
      if(ele[i].checked){
        item.type = ele[i].value;
      }
    }
    setloader(true);
    Object.assign(item, id);
    getLogin(item).then((res) => {
      setloader(false);
      if (res.data.status) {
        toast.success(res?.data?.message);
        storage.set.authToken(res?.data?.token);
        storage.set.userId(res?.data?.user_id);
        storage.set.userType(res?.data?.user_type);
        setTimeout(() => {
          if(res?.data?.user_type === "Admin")
          navigate("/admin");
          else
          navigate("/user/products")
        }, 1000);
      } else {
        res?.data?.errors?.map((item) => {
          return toast.error(item);
        });
        setloader(false);
      }
    });
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#F3F0EE",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // pt: { lg: 18, xs: 12, sm: 14, md: 16 },
        }}>
        <Box
          sx={{
            maxWidth: "900px",
            width: { xs: "92%", sm: "80%", md: "65%", lg: "50%", xl: "50%" },
            mt: { sm: "10px", md: "20px", lg: "30px", xl: "30px", xs: "0px" },
            borderRadius: {
              xs: "10px",
              sm: "10px",
              md: "15px",
              lg: "20px",
              xl: "20px",
            },
            backgroundColor: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mb: 5,
          }}>
          <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loader}>
            <CircularProgress color="inherit" />
          </Backdrop>
          <form
            name="LoginForm"
            onSubmit={handleSubmit(onSubmit)}
            style={{
              width: "90%",
              backgroundColor: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}>
            <Typography
              sx={{
                fontSize: { xs: "24px", sm: "24px", md: "28px", lg: "35px" },
                lineHeight: { xs: "29px", sm: "29px", md: "30px", lg: "31px" },
                fontWeight: "700",
                textAlign: "center",
                color: "#3D2E57",
                mt: 5,
                mb: 4,
              }}>
              Login
            </Typography>

            <InputField
              control={control}
              helperText={errors?.email?.message}
              errors={!!errors.email}
              type={"text"}
              placeholder={"Enter email here"}
              formlabel="Email"
              size={{ xs: "20px", md: "22px", lg: "24px" }}
              color={"#333333"}
              name="email"
              required={"*"}
            />

            <Box sx={{ height: { xs: "25px", md: "50px" } }} />

            <InputField
              control={control}
              helperText={errors?.password?.message}
              errors={!!errors.password}
              variant="filled"
              placeholder={"Enter password"}
              formlabel="Password"
              size={{ xs: "20px", md: "22px", lg: "24px" }}
              color={"#333333"}
              name="password"
              type={"password"}
              required={"*"}
            />

            <Typography sx={{mt:4, fontSize:"22px"}}>Login Type<span style={{color: "red"}}>*</span>
            </Typography>
            <Box>
            <input type="radio" id="vendor" name="logintype" value="Vendor" />
            <label htmlFor="vendor">Vendor Login</label>
            </Box>
            <Box sx={{mb:2}}> 
            <input type="radio" id="admin" name="logintype" value="Admin" />
            <label htmlFor="admin">Admin Login</label>
            </Box>

            <Box
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <Button
                disableRipple
                sx={{
                  width: {
                    xs: "100%",
                    sm: "90%",
                    md: "60%",
                    lg: "40%",
                    xl: "40%",
                  },
                  "&.MuiButtonBase-root:hover": {
                    bgcolor: "#FFFFFF",
                    border: "1.5px solid #3D2E57",
                  },
                  bgcolor: "#FFFFFF",
                  color: "#3D2E57",
                  border: "1.5px solid #3D2E57",
                  // p: 1,
                  mb: 2,
                  borderRadius: "15px",
                  fontSize: { xs: "20px", md: "22px", lg: "24px" },
                  fontWeight: 500,
                  textTransform: "none",
                }}
                variant="outlined"
                type="submit">
                Login
              </Button>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "flex-start", md: "center" },
              }}>
              <Link
                to={"/user/register"}
                className="fontlink2"
                style={{
                  fontWeight: 400,
                  color: "#FF8D2A",
                  textDecoration: "none",
                  marginBottom: "10px",
                }}>
                Register your account
              </Link>
            </Box>
          </form>
          <Toastify />
        </Box>
      </Box>
    </>
  );
};
function mapDispatchToProps(dispatch) {
  return {
    getLogin: (item) => dispatch(getLogin(item)),
  };
}

export default connect(null, mapDispatchToProps)(Loginpage);
