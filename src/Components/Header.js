import React from 'react'
import logo from './Media/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';

import { Avatar, IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

import './Header.css';


const Header = () => {
    return (

        <div className='header'>
            <div className="header__left">
                <img src={logo} alt="Logo" />
            </div>

            <div className="header__input">
                <SearchIcon />
                <input placeholder='Search People' type="text" />
            </div>

            <div className='header__center'>
                <div className='header__option header__option--active'>
                    <HomeIcon fontsize='large' />
                </div>
                <div className='header__option'>
                    <FlagIcon fontsize='large' />
                </div>
                <div className='header__option'>
                    <SubscriptionsOutlinedIcon fontsize='large' />
                </div>
                <div className='header__option'>
                    <StorefrontOutlinedIcon fontsize='large' />
                </div>
                <div className='header__option'>
                    <SupervisedUserCircleIcon fontsize='large' />
                </div>
            </div>

            <div className='header__right'>
                <div className='header__info'>
                    <Avatar />
                    <h4>Johnny</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>

            </div>

        </div>
    )
}

export default Header