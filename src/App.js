import { Box, Typography, IconButton } from "@mui/material";
import Index from "./routes";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router-dom";
import { storage } from "./config/storage";
import { useEffect, useState } from "react";



const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const arr = ["/", "/login", "/user/register"];


  const logOut = () => {
    storage.destroy.authToken();
    storage.destroy.userId();
    storage.destroy.userType();
    navigate("/");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box>
      <Box sx={{ bgcolor: "lightcyan", pb: 3, pr: 4, pt: 2, display: "flex", justifyContent: "flex-end",minHeight:"40px" }}>
        
        {(!arr.includes(location.pathname)) &&
          <IconButton sx={{ border: "1px solid green" }}
            onClick={() => logOut()}>
            <LogoutIcon sx={{ fontSize: "20px", }} />
            <Typography sx={{ fontSize: "15px", fontWeight: 700, ml: 1 }}> Logout </Typography>
          </IconButton>
        }
      </Box>
      <Index />;
    </Box>
  )
};

export default App;
