import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";

const StatusDialog = ({ open, title,value, cancelButton,handleChange,handleChangemessage, submitButton,label,label1,reason,message }) => {
  return (
    <Dialog
      open={open}
      // onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle
        sx={{ fontSize: "18px", color: "#3D2E57" }}
        id="alert-dialog-title"
      >
        {title}
      </DialogTitle>
      <DialogContent>
      <FormControl>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        // defaultValue={defaultValue}
        value={value}
        name="radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel value={label} control={<Radio />} label={label} />
        <FormControlLabel value={label1} control={<Radio />} label={label1} />
      </RadioGroup>
    </FormControl>
      {reason&&
      <Box sx={{
        height:22,
        width:"100%"
      }}>
      <FormLabel>
        Reason:
      </FormLabel>
      <TextField
      sx={{
        height:22,
        width:"100%"
      }}
      onChange={handleChangemessage}
      value={message}
      />
      </Box>
      }
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            bgcolor: "#EB5757",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "#EB5757",
            },
          }}
          onClick={cancelButton}
        >
          Cancel
        </Button>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#27AE60",
            textTransform: "none",
            "&.MuiButtonBase-root:hover": {
              bgcolor: "#27AE60",
            },
          }}
          onClick={submitButton}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default StatusDialog;
