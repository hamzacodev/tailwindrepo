

import React from 'react'
import { Box, Button } from "@mui/material";
import Image from "next/image";

interface ButtonsProps {
    title: string;
    onPress?: () => void;
    loading?: boolean;
    disabled?: boolean,
    buttonStyle?: {},
    styles?: {},
    labelStyle?: {}
}

export function PrimaryButton(props: ButtonsProps) {

    const { title, onPress, } = props
    const formattedText = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
    return (
        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
            <Button onClick={onPress}
                variant="contained"
                color="primary"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '12.5rem',
                    height: 50,
                    borderRadius: 1.7,
                    justifyContent: 'center',
                    background: 'white',
                    color: '#2CA5C3',
                    '&:hover': {
                        backgroundColor: 'white',
                    },
                    fontSize: 12,
                    textTransform: 'none'
                }}
            >
                <Image src={'/images/google-icon.svg'} alt={''} width={20}
                    height={20}
                    style={{ marginRight: 7 }}
                />
                <p>{formattedText}</p>
            </Button>
        </Box>
    )
}

export function ContainedButton(props: ButtonsProps) {
    const { title, onPress, loading, disabled, buttonStyle, styles, labelStyle } = props

    return (
        <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 60 }}>
            <Button onClick={onPress} sx={{
                textTransform: 'capitalize',
                borderRadius: 1.7,
                width: '12.5rem', height: 50, background: '#2CA5C3',
                '&:hover': {
                    backgroundColor: '#2CA5C3',
                },
            }} variant="contained" >
                {title}
            </Button>
        </Box>
    )
}


