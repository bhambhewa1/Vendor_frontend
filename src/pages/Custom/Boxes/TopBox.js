import { Button, TextField, Typography ,Select,MenuItem} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";

const TopBox = ({
  headerText,
  button_one,
  button_two,
  button_three,
  onClick,
  orders,
  deleteAPI,
  onSubmit,
  perv_search_val,
  search_val,
  setSearch_val,
  handleChange,
  numSelected,
  value
}) => {
  const navigate = useNavigate();
  const handleSearch = (e) => {
    setSearch_val(e.target.value);
  };
  const handleEnter = (e) =>{ 
    if(e.key === "Enter")
    onSubmit(search_val)
    if(e.key === "Backspace" && perv_search_val !== "" && search_val.length === 0){
     setSearch_val("")
    onSubmit("")
    }
  }
  
  return (
    <>  
    <Typography sx={style.headingText}>
    {headerText}
  </Typography>
    <Box
      sx={{
        width: "100%",
        maxHeight: "300px",
        display: "flex",
        flexDirection: {xs: "column", md: "row"},
        justifyContent: "space-between",
        pb: "40px",
        mb: "10px",
      }}
    > 
      <Box sx={{ 
        display: "flex",
        justifyContent: {xs:"space-between",md:"flex-start"},
        // width: {xs:"100%",md:"60%",lg:"48%",xl:"42%"}, 
      }}>
        <TextField
          variant="outlined"
          InputProps={{
            sx: {
              borderRadius: "5px",
              fontSize: "16px",
              ".MuiOutlinedInput-notchedOutline": {
                border: "1px solid #3D2E57",
              },
              width: {xs:'30vw',sm:'30vw',md:'210px',lg:'262px',xl:"262px"},
              height: "40px",mr:2,
            }
            ,
          }}
          onChange={handleSearch}
          onKeyDown={handleEnter}
        />
        <Button variant="contained"
        onClick={()=>{onSubmit(search_val)}}
         sx={style.button_one}>
          {button_one}
        </Button>
      </Box>
      {orders && (
        <>
          <Box
            sx={{
              display: "flex",
              width: { xs: "100%", md: "30%" },
              alignItems: "center",
              justifyContent: { md: "flex-end" },
              mt: { xs: 4, md: 0 },
            }}
          >
            <Typography 
            component={'span'}
            style={style.typographyStyle1}
            > Sort: </Typography>
            <Select
              value={value}
              onChange={handleChange}
              displayEmpty
              SelectDisplayProps={{ style: { padding: 3, marginLeft: "1px" } }}
              MenuProps={{ disableScrollLock: true }}
              sx={{
                height: "41px",
                minWidth: "119.29px",
                fontSize: "18px",
                fontWeight: "400",
                color: "#000000",
                ".MuiOutlinedInput-notchedOutline": {
                  border: "1px solid #3D2E57",
                },
              }}
            >
              <MenuItem 
               value="">
                All
              </MenuItem>
              <MenuItem 
              value={0}>
                Pending
              </MenuItem>
              <MenuItem
                value={1}>
                Inprogress
              </MenuItem>
              <MenuItem 
               value={2}>
                Completed
              </MenuItem>
            </Select>
          </Box>
        </>
      )}
      {!orders&&
        <Box
          sx={{
            // width: { xs: "100%",md: "32%",lg: "28%", xl: "22%" },
            justifyContent: {xs:"space-between",md:"flex-end"},
            display: "flex",
            mt: { xs: 4, md: 0 },
          }}
        >
          <Button
            variant="contained"
            disabled={numSelected>0?false:true}
            sx={{
              bgcolor: "#EB5757",
              fontWeight: 400,
              "&.MuiButtonBase-root:hover": {
                bgcolor: "#EB5757",
                boxShadow: "none",
              },
              boxShadow: "none",
              color: "white",
              width: "120px",
              height: "40px",
              textTransform: "none",mr:2,ml:{md:2},
              fontSize:'18px'
            }}
            onClick={deleteAPI}
          >
            {button_two}
          </Button>
          <Button
            variant="contained"
            sx={style.button_two}
            onClick={() => {
              navigate(onClick);
            }}
          >
            {button_three}
          </Button>
        </Box>
      }
    </Box>
    </>
  );
};

export default TopBox;
const style = {
  button_one: {
    bgcolor: "#FF8D2A",
    fontWeight: 400,
    "&.MuiButtonBase-root:hover": {
      bgcolor: "#FF8D2A",
      boxShadow: "none",
    },
    boxShadow: "none",
    color: "white",
    ml: "10px",
    width: "120px",
    textTransform: "none",
    height:"40px",
    fontSize:'18px'

  },
  button_two: {
    bgcolor: "#FF8D2A",
    fontWeight: 400,
    "&.MuiButtonBase-root:hover": {
      bgcolor: "#FF8D2A",
      boxShadow: "none",
    },
    boxShadow: "none",
    color: "white",
    width: "120px",
    height: "40px",
    textTransform: "none",
    fontSize:'18px'

  },
  headingText: {
    fontSize: "24px",
    lineHeight: "29px",
    color: "#000000",
    marginBottom: "25px"
  },
  typographyStyle1: {
    fontFamily: "Effra",
    fontSize: "22px",
    lineHeight: "26px",
    fontWeight: "400",
    marginRight: "10px",
  },
};
