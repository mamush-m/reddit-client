import React from 'react';
import { selectPost, selectActPost, selectStatus, togglePost } from './indPostSlice';
import { useDispatch, useSelector } from 'react-redux';
import { act } from 'react-dom/test-utils';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
// post_hint
// is_reddit_media_domain

export const ActPost = () => {
    const dispatch = useDispatch();

    const actPost = useSelector(selectActPost);
    const status = useSelector(selectStatus);
    let post;


    if (status === 'success') {
        const title = actPost.title
        let media;
        
        //Image post
        if(actPost.post_hint && actPost.post_hint === 'image'){
            media = <img id='ind-media' src={actPost.url}/>
        }

        //Video post
        if(actPost.is_video === true && actPost.post_hint.includes('vid')) {
            const source = actPost.media.reddit_video.fallback_url;
            media = <video src={source} id="ind-vid" controls autoPlay="true">Couldn't load</video>
        }

        let votes;
        if(actPost.ups < 1000) {
            votes = actPost.ups;
        }else if(actPost.ups > 1000 && actPost.ups < 1000000) {
            votes = `${Math.round(actPost.ups/1000 * 10)/10}k`
        }else {
            votes = `${actPost.ups/10}m`
        }

        // if(actPost.post_hint && acp)

        post = <div id='act-post'>
            <h3 onClick={() => dispatch(togglePost())}>close</h3>

            <div>
                <ArrowUpwardOutlinedIcon id="ind-up"/>
                <p>{votes}</p>
                <ArrowDownwardIcon id="ind-down"/>
            </div>

            <div>
                <p id='ind-subreddit'>{actPost.subreddit_name_prefixed}</p>
                <p id='ind-author'>Posted by u/{actPost.author}</p>
                <h1>{title}</h1>
                {media}
            </div>

        </div>

    }else if(status === 'loading') {
        post = <h3>Loading Post</h3>
    }

    return (
        <div>
            {post}
        </div>
    )
}