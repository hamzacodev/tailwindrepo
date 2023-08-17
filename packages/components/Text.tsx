import { Typography } from "@mui/material";
import React from "react";

interface TextProps {
    message: string | undefined;
}

export function ErrorText(props: TextProps) {
    const { message } = props;
    return <Typography sx={{ color: "red" }}>{message}</Typography>;
}


