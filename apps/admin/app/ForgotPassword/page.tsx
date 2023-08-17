import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import ForgotPassword from "../../../../packages/components/forms/forgotPassword";

export default function ForgotPass() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "50%",
          position: "relative",
        }}
      >
        <div
          style={{
            backgroundImage: `url('/images/yellowIcon.png')`,
            backgroundSize: "cover",
            backgroundPosition: "top left",
            width: "100%",
            height: "80%",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url('/images/ForgotScreenIcon.png')`,
            backgroundSize: "cover",
            backgroundPosition: "top left",
            width: 600,
            height: 600,
            position: "absolute",
            top: "20%",
            left: 0,
            zIndex: -1,
            marginLeft: 20
          }}
        ></div>
      </Box>

      <Box
        sx={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Image
          src={"/images/jobreefLogo.png"}
          alt={"Logo.svg"}
          width={250}
          height={78.72}
          style={{ objectFit: "contain" }}
        />
        <ForgotPassword />
      </Box>
    </Box>
  );
}



