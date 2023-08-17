"use client";
import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  Typography,
  InputLabel,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import "../../global.css";
import CircularProgress from "@mui/material/CircularProgress";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import OtpInput from "react-otp-input";
import { useForm, Controller, Resolver, FieldValues } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const steps = ["Enter Email", "Enter OTP", "Set Password"];

const schemaStep0 = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
});

const schemaStep1 = yup.object().shape({
  otp: yup
    .string()
    .length(4, "OTP must be exactly 4 digits")
    .required("OTP is required"),
});

const schemaStep2 = yup.object().shape({
  newPassword: yup.string().required("New Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword")], "Passwords must match")
    .required("Confirm Password is required"),
});

export default function forgotPassword() {
  const [activeStep, setActiveStep] = useState(0);
  const [otp, setOtp] = useState(""); // Move otp state here
  const [showNewPassword, setShowNewPassword] = useState(false); // Define showNewPassword state
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // Define showConfirmPassword state
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [seconds]);

  const progress = ((60 - seconds) / 60) * 100;

  const resolverMap = {
    0: yupResolver(schemaStep0),
    1: yupResolver(schemaStep1),
    2: yupResolver(schemaStep2),
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: resolverMap[activeStep],
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const onSubmit = (data) => {
    console.log("Form data:", data);
    handleNext();
  };
  const toggleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };
  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword); // Define toggleConfirmPassword function
  };

  const getStepContent = (step: any) => {
    switch (step) {
      case 0:
        return (
          <center>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box sx={{ margin: "2rem" }}>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: 400,
                    color: "#4A4A4A",
                    lineHeight: "41px",
                    margin: "3rem",
                  }}
                >
                  Forgot Password
                </Typography>
                <p
                  style={{
                    color: "#4A4A4A",
                    fontFamily: "Open Sans, sans-serif",
                    width: "40%",
                    lineHeight: "30px",
                    margin: "3rem",
                  }}
                >
                  Please enter your email address below. If we find an
                  associated account, password reset instructions will be
                  emailed to you.
                </p>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <InputLabel
                    sx={{ display: "flex", width: "88%", margin: "0.7rem" }}
                  >
                    Email
                  </InputLabel>{" "}
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        variant="outlined"
                        error={!!errors.email}
                        helperText={errors.email?.message?.toString() ?? ""}
                        placeholder="Email"
                        sx={{ width: "35rem" }}
                        InputLabelProps={{ shrink: false }}
                      />
                    )}
                  />
                  <Box sx={{ display: "flex", marginTop: "2rem" }}>
                    <Button
                      sx={{
                        mr: 1,
                        bgcolor: "#2CA5C3",
                        width: 200,
                        height: 50,
                        color: "white",
                        borderRadius: "8px",
                        textTransform: "capitalize",
                        "&:hover": {
                          bgcolor: "#39b8d2",
                        },
                      }}
                      type="submit"
                    >
                      Next
                    </Button>
                    <Button
                      onClick={handleBack}
                      sx={{
                        mr: "8px",
                        bgcolor: "white",
                        width: 200,
                        borderColor: "#39b8d2",
                        borderRadius: "8px",
                        borderWidth: "1.4px",
                        borderStyle: "solid",
                        height: 50,
                        color: "#39b8d2",
                        textTransform: "capitalize",
                        "&:hover": {
                          bgcolor: "#f5f5f5",
                          color: "#39b8d2",
                        },
                      }}
                      //   disabled={activeStep === 0}
                    >
                      Return to Login
                    </Button>
                  </Box>
                </Box>
              </Box>
            </form>
          </center>
        );
      case 1:
        return (
          <center>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: 400,
                    color: "#4A4A4A",
                    lineHeight: "41px",
                    margin: "3rem",
                  }}
                >
                  Forgot Password
                </Typography>

                <p
                  style={{
                    color: "#4A4A4A",
                    fontFamily: "Open Sans, sans-serif",
                    width: "40%",
                    lineHeight: "30px",
                    margin: "3rem",
                  }}
                >
                  Please enter the 4 digit code send to your email
                </p>
              </Box>
              <Box
                sx={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Controller
                  name="otp"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <OtpInput
                        {...field}
                        value={field.value}
                        onChange={(otpValue) => field.onChange(otpValue)}
                        numInputs={4}
                        renderSeparator={<span>&nbsp;&nbsp;</span>}
                        renderInput={(props) => <input {...props} />}
                        shouldAutoFocus
                        inputStyle={{
                          width: "50px",
                          color: "black",
                          height: "58px",
                          fontSize: "1.25rem",
                          fontWeight: "400",
                          borderWidth: "0px",
                          borderRadius: "4px",
                          backgroundColor: "#f5f5f5",
                        }}
                      />

                      {errors.otp && (
                        <span
                          style={{
                            color: "red",
                          }}
                        >
                          <div
                            style={{
                              marginTop: "1rem",
                            }}
                          >
                            {errors.otp?.message?.toString() ?? ""}
                          </div>
                        </span>
                      )}
                    </div>
                  )}
                />
              </Box>
              &nbsp; &nbsp;
              <Box
                style={{
                  position: "relative",
                  width: "fit-content",
                  marginTop: "0.50rem",
                }}
              >
                <CircularProgress
                  variant="determinate"
                  value={progress}
                  sx={{
                    color: "#2CA5C3",
                  }}
                />
                <Box
                  style={{
                    position: "absolute",
                    top: "45%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <Typography
                    variant="caption"
                    component="div"
                    color="textSecondary"
                  >
                    {`${seconds}`}
                  </Typography>
                </Box>
              </Box>
              <p style={{ color: "#2CA5C3", lineHeight: "30px" }}>Resend OTP</p>
              <Box
                sx={{
                  display: "flex",
                  marginTop: "2rem",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                {" "}
                <Button
                  type="submit"
                  sx={{
                    mr: 1,
                    bgcolor: "#2CA5C3",
                    width: 200,
                    height: 50,
                    color: "white",
                    borderRadius: "8px",
                    textTransform: "capitalize",
                    "&:hover": {
                      bgcolor: "#39b8d2",
                    },
                  }}
                >
                  Verify
                </Button>
                <Button
                  onClick={handleBack}
                  sx={{
                    mr: "8px",
                    bgcolor: "white",

                    borderColor: "#39b8d2",
                    borderRadius: "8px",
                    borderWidth: "1.4px",
                    borderStyle: "solid",
                    width: 200,
                    height: 50,
                    color: "#39b8d2",
                    textTransform: "capitalize",
                    "&:hover": {
                      bgcolor: "#f5f5f5",
                      color: "#39b8d2",
                    },
                  }}
                  //   disabled={activeStep === 0}
                >
                  Cancel
                </Button>
              </Box>
            </form>
          </center>
        );

      case 2:
        return (
          <center>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Box>
                <Typography
                  sx={{
                    fontSize: "30px",
                    fontWeight: 400,
                    color: "#4A4A4A",
                    lineHeight: "41px",
                    margin: "3rem",
                  }}
                >
                  Forgot Password
                </Typography>

                <p
                  style={{
                    color: "#4A4A4A",
                    fontFamily: "Open Sans, sans-serif",
                    width: "40%",
                    lineHeight: "30px",
                    margin: "3rem",
                  }}
                >
                  OTP has been verified successfully! You can now create a new
                  password for your Jobreef Account
                </p>
              </Box>
              <Box sx={{ margin: "2rem" }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  <InputLabel
                    sx={{ display: "flex", width: "88%", margin: "0.7rem" }}
                  >
                    Enter Password
                  </InputLabel>
                  <Controller
                    name="newPassword"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="outlined-password-input"
                        placeholder="Enter your New Password"
                        type={showNewPassword ? "text" : "password"}
                        variant="outlined"
                        sx={{ width: "35rem" }}
                        InputLabelProps={{ shrink: false }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={toggleNewPassword}>
                                {showNewPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        error={!!errors.newPassword}
                        helperText={
                          errors.newPassword?.message?.toString() ?? ""
                        }
                      />
                    )}
                  />

                  <InputLabel
                    sx={{ display: "flex", width: "88%", margin: "0.7rem" }}
                  >
                    Confirm Password
                  </InputLabel>
                  <Controller
                    name="confirmPassword"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="outlined-password-input"
                        placeholder="Re-enter your New Password"
                        type={showConfirmPassword ? "text" : "password"}
                        variant="outlined"
                        sx={{ width: "35rem" }}
                        InputLabelProps={{ shrink: false }}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton onClick={toggleConfirmPassword}>
                                {showConfirmPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                        error={!!errors.confirmPassword}
                        helperText={
                          errors.confirmPassword?.message?.toString() ?? ""
                        }
                      />
                    )}
                  />
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  marginTop: "2rem",
                  justifyContent: "center",
                  alignSelf: "center",
                }}
              >
                {" "}
                <Button
                  type="submit"
                  sx={{
                    mr: 1,
                    bgcolor: "#2CA5C3",
                    width: 200,
                    height: 50,
                    color: "white",
                    borderRadius: "8px",
                    textTransform: "capitalize",
                    "&:hover": {
                      bgcolor: "#39b8d2",
                    },
                  }}
                >
                  Save
                </Button>
                <Button
                  onClick={handleBack}
                  sx={{
                    mr: "8px",
                    bgcolor: "white",
                    borderColor: "#39b8d2",
                    borderRadius: "8px",
                    borderWidth: "1.4px",
                    borderStyle: "solid",
                    width: 200,
                    height: 50,
                    color: "#39b8d2",
                    textTransform: "capitalize",
                    "&:hover": {
                      bgcolor: "#f5f5f5",
                      color: "#39b8d2",
                    },
                  }}
                  //   disabled={activeStep === 0}
                >
                  Cancel
                </Button>
              </Box>
            </form>
          </center>
        );

        return (
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Step 2 content */}
            <Button type="submit">Save</Button>
          </form>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <Box sx={{ width: "100%", marginTop: "2rem" }}>
      <center>
        <Stepper sx={{ width: "45%" }} activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </center>
      <div>{getStepContent(activeStep)}</div>
    </Box>
  );
}
