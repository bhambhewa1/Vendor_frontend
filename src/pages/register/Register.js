/* eslint-disable react-hooks/exhaustive-deps */
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import _ from "lodash";

import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import InputField from "../Custom/Input/InputField";
// import { storage as LocalStorage } from "../../config/storage";

import {
  Button,
  Typography,
  Backdrop,
  CircularProgress,
  Icon,
  MenuItem,
  Select,
} from "@mui/material";
import Toastify from "../SnackBar/Toastify";
import { getRegisterUser } from "../../redux/action/register/index";
import { connect, useSelector } from "react-redux";
import "./Regis.css";



const defaultValues = {
  first_name: "",
  last_name: "",
  email: "",
  dob: "",
  password: "",
  confirm_password: "",
};
const Style = {
  typographyStyle: {
    fontSize: "26px",
    fontWeight: "700",
    lineHeight: "31px",
    letterSpacing: "0em",
    textAlign: "center",
    color: "#3D2E57",
    pb: 3,
  },
  rowBoxStyle: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  inputStyle: {
    width: {
      xs: "90%",
      sm: "90%",
      md: "47%",
      lg: "47%",
      xl: "47%",
    },
    mb: 2,
  },
};

const Register = ({ getRegisterUser}) => {
 
  const navigate = useNavigate();
  const schema = yup.object().shape({
    first_name: yup.string().required("Please enter your first name"),
    last_name: yup.string().required("Please enter your last name"),
    email: yup
      .string()
      .required("Please enter your email")
      .email("Please enter valid email"),

    dob: yup.string().required("Please enter your Date of birth"),

    password: yup
      .string()
      .required("Please enter your password.")
      .min(8, "Password is too short - should be 8 chars minimum."),
    confirm_password: yup
      .string()
      .required("Please enter your confirm password.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { control, formState, handleSubmit, setError } = useForm({
    mode: "all",
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { isValid, dirtyFields, errors } = formState;

  const onSubmit = async (model) => {
    let item = model;
    console.log(model)
    getRegisterUser(item).then((res) => {
      if (res) {
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    });
  };

  return (
    <Box
      sx={{
        bgcolor: "#F3F0EE",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        // pt: { lg: 16, xs: 11 },
        pb: { xl: 18, lg: 16, md: 14, sm: 12, xs: 6 },
        mr: "auto",
        ml: "auto",
      }}
    >
      <Box
        sx={{
          width: "1360px",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
          bgcolor: "#F3F0EE",
          justifyContent: "center",
          pt: 2,
        }}
      >

        <Toastify />
        <Box
          sx={{
            bgcolor: "white",
            height: { lg: "50%", md: "50%", sm: "80%", xs: "85%" },
            display: "flex",
            flexWrap: "wrap",
            alignContent: "center",
            width: { lg: "70%", xl: "65%", sm: "80%", md: "75%", xs: "90%" },
            borderRadius: 4,
            pb: 5,
            boxShadow: 2,
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              pb: 10,
              width: "100%",
              mt: 2,
              p: 2,
            }}
          >
            <form
              name="RegisterForm"
              onSubmit={handleSubmit(onSubmit)}
              schema={schema}
            >
              <Typography display="block" sx={Style.typographyStyle}>
                Register Account
              </Typography>

              <Box
                sx={{
                  width: "100%",
                  height: "30%",
                  borderRadius: 2,
                }}
              >
                <Box sx={Style.rowBoxStyle}>
                  <Box sx={Style.inputStyle}>
                    <InputField
                      control={control}
                      variant="filled"
                      helperText={errors?.first_name?.message}
                      errors={!!errors.first_name}
                      placeholder={"Enter your first name"}
                      type={"text"}
                      formlabel="First Name"
                      required="*"
                      name="first_name"
                      size={{ xs: "20px", md: "22px", lg: "24px" }}
                      color={"#333333"}
                    />
                  </Box>
                  <Box sx={Style.inputStyle}>
                    <InputField
                      control={control}
                      variant="filled"
                      helperText={errors?.last_name?.message}
                      errors={!!errors.last_name}
                      placeholder={"Enter your last name"}
                      type={"text"}
                      formlabel="Last Name"
                      size={{ xs: "20px", md: "22px", lg: "24px" }}
                      color={"#333333"}
                      required="*"
                      name="last_name"
                    />
                  </Box>
                </Box>
                <Box sx={Style.rowBoxStyle}>
                  <Box sx={Style.inputStyle}>
                    <InputField
                      control={control}
                      variant="filled"
                      helperText={errors?.dob?.message}
                      errors={!!errors.dob}
                      placeholder={"DD/MM/YYYY"}
                      formlabel="Date of Birth"
                      size={{ xs: "20px", md: "22px", lg: "24px" }}
                      color={"#333333"}
                      name="dob"
                      required="*"
                      type={"date"}
                      max={new Date().toISOString().split("T")[0]}
                    />
                  </Box>

                  <Box sx={Style.inputStyle}>
                    <InputField
                      control={control}
                      variant="filled"
                      helperText={errors?.email?.message}
                      errors={!!errors.email}
                      placeholder={"Enter your email"}
                      formlabel="Email"
                      size={{ xs: "20px", md: "22px", lg: "24px" }}
                      color={"#333333"}
                      name="email"
                      required="*"
                      type={"email"}
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  textAlign: "left",
                  pl: { lg: "2%", xs: "4%", sm: "5%", md: "2%" },
                }}
              >
                <Typography sx={Style.typographyStyle}>
                  Create Password
                </Typography>
              </Box>

              <Box sx={Style.rowBoxStyle}>
                <Box sx={Style.inputStyle}>
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
                    required="*"
                    type={"password"}
                  />
                </Box>
                <Box sx={Style.inputStyle}>
                  <InputField
                    control={control}
                    helperText={errors?.confirm_password?.message}
                    errors={!!errors.confirm_password}
                    variant="filled"
                    placeholder={"Enter confirm password"}
                    formlabel="Confirm Password"
                    size={{ xs: "20px", md: "22px", lg: "24px" }}
                    color={"#333333"}
                    required="*"
                    name="confirm_password"
                    type={"password"}
                  />
                </Box>
              </Box>
              {/* </Box> */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  pt: 4,
                }}
              >
                <Button
                  sx={{
                    width: {
                      xs: "90%",
                      sm: "90%",
                      md: "90%",
                      lg: "30%",
                      xl: "30%",
                    },
                    color: "#3D2E57",
                    border: "2px solid #3D2E57",
                    p: 1,
                    borderRadius: "15px",
                    fontSize: "24px",
                    textTransform: "none",
                  }}
                  // color="warning"
                  variant="outlined"
                  type="submit"
                >
                  Register
                </Button>
              </Box>
              {/* </Box> */}
            </form>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getRegisterUser: (item) => dispatch(getRegisterUser(item))
  };
};

export default connect(null, mapDispatchToProps)(Register);
