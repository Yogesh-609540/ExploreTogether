import React from 'react'
import Story from './Story'
import './StoryReel.css'
import Dp from './Media/draken.jpg'
import S from './Media/story1.jpg'

const StoryReel = () => {
    return (
        <div className='storyReel'>
            <Story
                image={S}
                profileSrc={Dp}
                title='Draken' />

            <Story
                image={S}
                profileSrc={Dp}
                title='Draken' />

            <Story
                image={S}
                profileSrc={Dp}
                title='Draken' />
        </div>
    )
}

export default StoryReel