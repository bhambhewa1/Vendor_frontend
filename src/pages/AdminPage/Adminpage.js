import { Box, Button, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const Adminpage = () => {
    const navigate = useNavigate();
  return (
    <Box
        sx={{
          width: "100%",
          // backgroundColor: "#F3F0EE",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: { lg: 6, xs: 6, sm: 14, md: 16 },
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
            backgroundColor: "#F3F0EE",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            mb: 5,
          }}>

           <Typography
              sx={{
                fontSize: { xs: "24px", sm: "24px", md: "28px", lg: "35px" },
                lineHeight: { xs: "29px", sm: "29px", md: "30px", lg: "31px" },
                fontWeight: "700",
                textAlign: "center",
                color: "#3D2E57",
                mt: 5,
                mb: 6,
              }}>
              Admin Panel
            </Typography>
 
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
                  mb: 5,
                  borderRadius: "15px",
                  fontSize: { xs: "20px", md: "22px", lg: "24px" },
                  fontWeight: 500,
                  textTransform: "none",
                }}
                variant="outlined"
                onClick={() => navigate("/vendors/request")}
                >
                Vendor Requests
              </Button>
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
                  mb: 10,
                  borderRadius: "15px",
                  fontSize: { xs: "20px", md: "22px", lg: "24px" },
                  fontWeight: 500,
                  textTransform: "none",
                }}
                variant="outlined"
                onClick={() => navigate("/vendors/list")}>
                Vendors List
              </Button>
            </Box>
            
            <Typography sx={{color: "red", fontSize:"14px", mb:3}} >You can logout for go back on regester and login panel</Typography>

          </Box>
          </Box>
  )
}

export default Adminpage;