import React from 'react'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles';

export default function LoginForm() {
    const useStyles = makeStyles({
        login: {
            padding: 0,
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            color: 'white',
            width: '700px',
            height: '700px',
            border: '1px solid red'
        },
    });
    const classes = useStyles();
    return (
        <Container className={classes.login}>
            Тут будет форма авторизации
        </Container>
    )
}
