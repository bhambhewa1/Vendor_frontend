import React from "react";
import { Controller } from "react-hook-form";
import * as yup from "yup";
import { TextField, FormLabel, Box, MenuItem, Select, Skeleton } from "@mui/material";
import { styled } from "@mui/system";

const InputField = ({
  formlabel,
  name,
  errors,
  helperText,
  control,
  placeholder,
  max,
  type,
  value,
  required,
  rows,
  height,
  fullWidth,
  multiline,
  min,
  lineHeight,
  disabled,
  color,
  size,
  textTransform,
  minHeight,
  phoneCode,
  country_names,
  countryPhoneCode,
  onChangeSelect,
}) => {
  return (
    <>
      <FormLabel
        sx={{
          fontStyle: "normal",
          fontWeight: 400,
          fontSize: size,
          lineHeight: lineHeight,
          color: { color },
        }}
      >
        {formlabel}
        <span style={{ color: "red" }}>{required}</span>
      </FormLabel>
      <Controller
        name={name}
        control={control}
        sx={{
          pb: 0,
          backgroundColor: "#F6F6F6",
        }}
        render={({ field }) => (
          <TextField
            {...field}
            disabled={disabled}
            variant="filled"
            InputProps={{
              disableUnderline: true,
              style: { backgroundColor: "#F6F6F6" },
              startAdornment: phoneCode && (
                <Select
                  disableUnderline
                  SelectDisplayProps={{
                    style: {
                      padding: 0,
                      backgroundColor: "#F6F6F6",
                      color: "#A8A8A8",
                    },
                  }}
                  sx={{
                    height: "30px",
                    width: "90px",
                    backgroundColor: "#F6F6F6",
                    borderBottom: "none",
                    "&.MuiInputBase-root": {
                      backgroundColor: "transparent",
                    },
                    "&.MuiFilledInput-root": {
                      backgroundColor: "transparent",
                    },
                  }}
                  MenuProps={{ disableScrollLock: true }}
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  // defaultValue="select"
                  value={countryPhoneCode}
                  onChange={onChangeSelect}
                  label="Country"
                  inputProps={{
                    style: {
                      backgroundColor: "#F6F6F6",
                      border: "none",
                    },
                  }}
                >
                  {/* {country_names &&editAddressId&&
                country_names.map((item, index) => (
                  <MenuItem value={formik.values.recipient_country}>{formik.values.recipient_country}</MenuItem>
                ))} */}
                  <MenuItem value={countryPhoneCode}>
                    +{countryPhoneCode}
                  </MenuItem>

                  {!country_names && (
                    [1,2,3,4,5].map((item,index) => (
                    <Skeleton height={71} />
                    ))
                  )}
                  {country_names &&
                    country_names.map((item, index) => (
                      <MenuItem key={index} value={item}>
                        +{item.phone_code}
                      </MenuItem>
                    ))}
                </Select>
              ),
            }}
            type={type}
            error={errors}
            helperText={helperText}
            color="primary"
            inputProps={{
              max: max,
              min: min,
              style: {
                paddingTop: "16px",
                paddingBottom: "15px",
                height: { height },
                fontSize: "18px",
                textTransform: textTransform,
                minHeight: minHeight,
                color: "#A8A8A8",
                backgroundColor: "#F6F6F6",
              },
            }}
            value={value}
            placeholder={placeholder}
            rows={rows}
            fullWidth={fullWidth}
            multiline={multiline}
            sx={{
              width: "100%",
              pb: 0,
            }}
          />
        )}
      />
    </>
  );
};

export default InputField;
