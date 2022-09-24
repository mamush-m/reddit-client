import React from "react";
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareIcon from '@mui/icons-material/Share';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { upVote, downVote } from "../../features/posts/postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { togglePost, selectUrl, render } from "../../features/indPost/indPostSlice";

export const Post = ({author, id, comments, src, subreddit, postTitle, time, ups, url, permalink, numOfComments}) => {
    const dispatch = useDispatch();
    const targetURL = useSelector(selectUrl)
   
    const handleToggle = () => {
        dispatch(togglePost())
        dispatch(render(permalink))
    }

   let media 
   const title = postTitle;

   function handleUpVote(title) {
    title = postTitle;
    dispatch(upVote(title))
   }

   const handleDownVote = title => {
    title = postTitle;
    dispatch(downVote(title))
   }

//    const handleToggle = () => {
//     dispatch(togglePost())
//    }


   let votes;
   if(ups < 1000) {
    votes = ups;
   }else if(ups > 1000 && ups < 1000000) {
    votes = `${Math.round(ups/1000 * 10)/10}k`
   }else {
    votes = `${ups/10}m`
   }


   let post;

    //Image version
    if((src !== undefined && src.includes('.jpg')) || (src !== undefined && src.includes('.png'))) {
        media = <img id="img" src={src}/>

        post = <div id="ind-post" >

            <div id="post-stats">
                <ArrowUpwardOutlinedIcon id="upArrow" onClick={handleUpVote}/>
                <p id="votes">{votes}</p>
                <ArrowDownwardIcon id="downArrow" onClick={handleDownVote}/>
            </div>


            <div id="main-post" onClick={handleToggle}>
                <div id="post-info">
                    <p id="subreddit">{subreddit}</p>
                    <p id="author">Posted by u/{author}</p>
                </div>

                <p id="title">{title}</p>
                {media}

                
                <div id="expanded-stats">

                    <div id="chat">
                        <ChatBubbleOutlineOutlinedIcon/>
                        <p>{numOfComments}</p>
                    </div>

                    <div id="share">
                        <ShareIcon/>
                        <p>Share</p>
                    </div>

                    <div id="save">
                        <SaveAltIcon/>
                        <p>Save</p>
                    </div>
                
                </div>
            </div>
            
        </div>

    //Video version
    }else if(src !== undefined) {
        media = <video id="vid" src={src} autoPlay={true} controls>Sorry cant load</video>

        post = <div id="ind-post" >
            
            <div id="post-stats" >
                <ArrowUpwardOutlinedIcon id="upArrow" onClick={handleUpVote}/>
                <p id="votes">{votes}</p>
                <ArrowDownwardIcon id="downArrow" onClick={handleDownVote}/>
            </div>
            

            <div id="main-post" onClick={handleToggle}>

                <div id="post-info">
                    <p id="subreddit">{subreddit}</p>
                    <p id="author">Posted by u/{author}</p>
                </div>

                <p id="title">{title}</p>
                {media}

                <div id="expanded-stats">

                    <div id="chat">
                        <ChatBubbleOutlineOutlinedIcon/>
                        <p>{numOfComments}</p>
                    </div>

                    <div id="share">
                        <ShareIcon/>
                        <p>Share</p>
                    </div>

                    <div id="save">
                        <SaveAltIcon/>
                        <p>Save</p>
                    </div>

                    </div>

            </div>


            {/* <ChatBubbleOutlineOutlinedIcon/>
            <p>{numOfComments}</p>
            <ShareIcon/>
            <p>Share</p>
            <SaveAltIcon/>
            <p>Save</p> */}
        </div>

    //No media version
    }else if(src === undefined) {
        post = <div id="ind-post" >

            <div id="post-stats">
                <ArrowUpwardOutlinedIcon id="upArrow" onClick={handleUpVote}/>
                <p id="votes">{votes}</p>
                <ArrowDownwardIcon id="downArrow" onClick={handleDownVote}/>
            </div>


            <div id="main-post" onClick={handleToggle}>
                <div id="post-info">
                    <p id="subreddit">{subreddit}</p>
                    <p id="author">Posted by u/{author}</p>
                </div>

                <p id="title">{title}</p>

                <div id="expanded-stats">

                    <div id="chat">
                        <ChatBubbleOutlineOutlinedIcon/>
                        <p>{numOfComments}</p>
                    </div>

                    <div id="share">
                        <ShareIcon/>
                        <p>Share</p>
                    </div>

                    <div id="save">
                        <SaveAltIcon/>
                        <p>Save</p>
                    </div>

                    </div>
            </div>
            
            
            {/* <ChatBubbleOutlineOutlinedIcon/>
            <p>{numOfComments}</p>
            <ShareIcon/>
            <p>Share</p>
            <SaveAltIcon/>
            <p>Save</p> */}
        </div>
    }

  


    return (
        <div id="post">
            {post}
        </div>
    )
}