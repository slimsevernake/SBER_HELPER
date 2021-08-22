import React from 'react';
import Header from '../../components/Header/header'
import { ThemeProvider} from '@emotion/react'
import { themeLight } from "./theme-ligth"

const Main = (props) => {
    return (
        <ThemeProvider theme={themeLight}>
            <Header />
        </ThemeProvider>
    )
}

export default Main;