import React from 'react';
import { ThemeProvider } from "styled-components";

const theme =  {
    colors:{
        background:"#F3F4F8",
        primary:"#FF5023",
        grey:"#828282",
        black:"#000000",
        white:"#FFFFFF"
    }
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;