import React from 'react'

const Widget = () => {
    return (
        <div className='widgets'>
            <iframe src='https://www.instagram.com/anime_official_instagram/?hl=en'
                width="500"
                height="1000"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameBorder="0"
                allowTransparency="true"
                allow="encrypted-media"
            ></iframe>
        </div>
    )
}

export default Widget