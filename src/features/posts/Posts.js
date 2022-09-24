import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "./postsSlice";
import { v4 as uuidv4 } from 'uuid'
import { Post } from '../../components/post/Post'
import { SideMenu } from "../../components/sideMenu/SideMenu";

export const Posts = () => {
    const posts = useSelector(selectPosts);


    let feed = posts.map(post => {
        // console.log(post)
        const key = uuidv4();
        let source;
        
        //Image post
        if((post.url.includes('.jpg') || post.url.includes('.png')) && post.is_video === false) {
            source = post.url;
        }

        //Video post
        if(post.is_video === true) {
            source = post.media.reddit_video.fallback_url
        }

        return <div id="posts">
            <Post

            key={key.toString()}
            author={post.author}
            id={key}
            src={source}
            ups={post.ups}
            subreddit={post.subreddit_name_prefixed}
            postTitle={post.title}
            time={post.created}
            url={post.url}
            permalink={post.permalink}
            numOfComments={post.num_comments}
            />
        </div>
    })

    return (
        <div>
            {feed}
            {/* <SideMenu/> */}
        </div>
    )
}