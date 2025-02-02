import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';


const Post = ({ profilePic, imgName, userName, timeStamp, message }) => {
    return (
        <div className='post'>
            <div className='post__top'>
                <Avatar src={profilePic} className='post__avatar' />
                <div className='post__topInfo'>
                    <h3>{userName}</h3>
                    <p>{new Date(parseInt(timeStamp)).toUTCString()}</p>

                </div>
            </div>

            <div className='post__bottom'>
                <p>{message}</p>
                {/*image coming later*/}
            </div>

            <div className='post__options'>
                <div className='post__option'>
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className='post__option'>
                    <ChatBubbleOutlineIcon />
                    <p>Comment</p>
                </div>
                <div className='post__option'>
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className='post__option'>
                    <AccountCircleIcon />
                    <ExpandMoreOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Post