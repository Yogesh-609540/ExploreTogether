import React from 'react'
import StoryReel from './StoryReel'
import MessageSender from './MessageSender'
import Post from './Post'
import Dp from './Media/draken.jpg'

const Feed = () => {
    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />

            <Post
                profilePic={Dp}
                message='yo this is a message'
                timeStamp='1687113113737'
                imgName='imgName'
                userName='Johhny'
            />

            {
                // postsData.map(entry => {
                //     <Post
                //         profilePic={entry.avatar}
                //         message={entry.text}
                //         timestamp={entry.timestamp}
                //         imgName={entry.imgName}
                //         username={entry.user}
                //     />
                // })
            }
        </div>
    )
}

export default Feed