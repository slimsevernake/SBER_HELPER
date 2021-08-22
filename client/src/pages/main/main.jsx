import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import Header from '../../components/Header/header'
import Auth from '../auth/auth'

const useStyles = makeStyles({
    root: {
        margin: 0,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(90deg, rgb(100, 186, 74) 14%, rgb(38, 172, 125));',
        border: 0,
        color: 'white',
        height: '100vh',
        maxWidth: '100vw'
    },
});

const Main = (props) => {
    const [auth, setAuth] = useState(false)
    const classes = useStyles();
    if (auth) {
        return (
            <Container className={classes.root} >
                <Header />
            </Container>
        )
    }
    return (
        <Container className={classes.root} >
            <Auth />
        </Container>
    )
}

export default Main;

