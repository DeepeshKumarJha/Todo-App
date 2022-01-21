import * as React from 'react';
import { AppBar, Box, Toolbar } from '@mui/material';



import ReactDOM from 'react-dom';
import todoimg from './T.png';
import './Header.css'
// import { UserConsumer } from '../../UserContext';


const Header = ()=> {

    const HeaderBody = (
        <AppBar position='relative' sx={{background:'rgb(255,255,255)', marginBottom:'2rem'}}>
            <Toolbar disableGutters={false}>
                <Box sx={{ p:2, m:'0 auto' }}>
                    <img src={todoimg} alt="logo" height='50px'/>
                </Box>
            </Toolbar>
        </AppBar>
    )

    const HeaderPosition = document.getElementById('header-root')
    return (
        ReactDOM.createPortal(HeaderBody, HeaderPosition)
    )
}

export default Header;