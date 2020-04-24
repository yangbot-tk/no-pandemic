import React from 'react'

function SocialMediaItem(props) {
    return(
        <a class="btn" href={props.url}>
            <i class={props.icon}></i>
        </a>
    )
}
export default SocialMediaItem 