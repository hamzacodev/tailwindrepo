import React from "react";
import { Box } from "@mui/material";
import Image from "next/image";

function CandidateSignUp() {
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
                        backgroundImage: `url('/images/CandidateLayout.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "top left",
                        width: "100%",
                        height: "80%",
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                    }}
                >
                    <div
                        style={{
                            marginLeft: "30px",
                            marginTop: "40px",
                            color: "white",
                            fontSize: "24px",
                            fontWeight: "bold",
                        }}
                    >
                        1. About You
                    </div>
                    <div
                        style={{
                            marginLeft: "30px",
                            marginTop: "30px",
                            color: "white",
                            fontSize: "24px",
                            fontWeight: "bold",
                        }}
                    >
                        2. About Your Work
                    </div>
                </div>

                <div
                    style={{
                        backgroundImage: `url('/images/Remote-Chat.png')`,
                        backgroundSize: "cover",
                        backgroundPosition: "top left",
                        width: 500,
                        height: 500,
                        position: "absolute",
                        top: "20%",
                        left: 0,
                        marginLeft: 70,
                        marginTop: 30,
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
                    src={"/images/jobreefLogo.svg"}
                    alt={"Logo.svg"}
                    width={250}
                    height={78.72}
                    style={{ objectFit: "contain" }}
                />
            </Box>
        </Box>
    );
}

export default CandidateSignUp;


