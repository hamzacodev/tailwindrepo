import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import Image from "next/image";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { ContainedButton, PrimaryButton } from "../Buttons";

interface ButtonsProps {
  title1: string;
  title2: string;
  onPressForgotPass: () => void;
  onPressSignUp: () => void;
  onPressGoogle: () => void;
}

function LoginForm(props: ButtonsProps) {
  const { title1, title2, onPressForgotPass, onPressSignUp, onPressGoogle } =
    props;
  const [showNewPassword, setShowNewPassword] = useState(false);
  const toggleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url("/images/LeftIcon.svg"), url("/images/RightIcon.svg")`,
        background: `url("/images/LeftIcon.svg") no-repeat left center, url("/images/RightIcon.svg") no-repeat right bottom`,
        backgroundSize: "auto, auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center, right bottom",
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box sx={{}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/images/jobreefLogo.png"
            alt="Logo.svg"
            width={250}
            height={78.72}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginTop: 8,
          }}
        >
          <InputLabel sx={{ width: "100%" }}>Email</InputLabel>
          <TextField
            id="outlined-basic"
            placeholder="Enter Email"
            variant="outlined"
            sx={{
              height: 58,
              width: 564,
              marginTop: 2,
              backgroundColor: "#F7F9FB",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
              },
            }}
            InputLabelProps={{ shrink: false }}
          />
          <InputLabel sx={{ width: "100%", marginTop: 5 }}>Password</InputLabel>
          <TextField
            id="outlined-password-input"
            placeholder="Enter your New Password"
            type={showNewPassword ? "text" : "password"}
            variant="outlined"
            sx={{
              backgroundColor: "#F7F9FB",
              width: "35rem",
              marginTop: 2,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white", // Change the outline color here
                },
              },
            }}
            InputLabelProps={{ shrink: false }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleNewPassword}>
                    {showNewPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <InputLabel
            onClick={onPressForgotPass}
            sx={{
              marginTop: 2,
              marginLeft: 50,
              color: "#2CA5C3",
              fontWeight: "600",
            }}
          >
            {title2}
          </InputLabel>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 4,
          }}
        >
          <InputLabel>Don’t have an account? </InputLabel>
          <InputLabel
            onClick={onPressSignUp}
            sx={{ color: "#2CA5C3", marginLeft: 0.7 }}
          >
            {" "}
            Sign up
          </InputLabel>
        </Box>
        <ContainedButton title={title1} />
        <PrimaryButton title={"sign in with google"} onPress={onPressGoogle} />
      </Box>
    </Box>
  );
}

export default LoginForm;
