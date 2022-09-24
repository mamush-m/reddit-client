import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectActPost, selectComments, selectRender, selectStatus, togglePost, upReply, downReply, upComment, downComment } from "./indPostSlice";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';


export const Comments = () => {
    const dispatch = useDispatch();

    const actPost = useSelector(selectActPost);
    const status = useSelector(selectStatus);
    const comments = useSelector(selectComments);


    let commBody = [];


    if(status === 'success') {
        // console.log(commBody)

        

        {comments.map(comment => {
            let commVotes;
                if(comment.ups < 1000) {
                    commVotes = comment.ups;
                }else if(comment.ups > 1000 && comment.ups < 1000000) {
                    commVotes = `${Math.round(comment.ups/1000 * 10)/10}k`
                }else {
                    commVotes = `${comment.ups/10}m`
                }


            //Has replies
            if(comment.distinguished === null && comment.replies && comment.replies.data.children.length > 0 && comment.subreddit_id){

                commBody.push(<ul id="list-wrapper" className="list outer" key={comment.id}>
                    <li>

                        <div >
                            <div >
                                <h4 id="outer-author">{comment.author}</h4>
                                <p id="outer-body">{comment.body}</p>
                            </div>

                            <div id="outer-stats" style={{display: "flex", alignItems: "center", marginBottom: "10px"}}>
                                <ThumbUpAltOutlinedIcon id="outer-thumbsUp" onClick={() => {dispatch(upComment(comment))}}/>
                                <p style={{margin: "0 5px"}}>{commVotes}</p>
                                <ThumbDownAltOutlinedIcon id="outer-thumbsDown" style={{display: "inline"}} onClick={() => dispatch(downComment(comment))}/>
                            </div>
                        </div>

                       
                        <ul className="list">
                            {comment.replies.data.children.filter(child => child.kind === 't1').map(childCom => {
                                let childVotes;
                                if(childCom.data.ups < 1000) {
                                    childVotes = childCom.data.ups;
                                }else if(childCom.data.ups > 1000 && childCom.data.ups < 1000000) {
                                    childVotes = `${Math.round(childCom.data.ups/1000 * 10)/10}k`
                                }else {
                                    childVotes = `${childCom.data.ups/10}m`
                                }

                                // childCom.data.ups

                                return <div id="rep-group" key={childCom.data.id}>
    
                                    <div id="arr-group">
                                        <ArrowRightAltIcon id="rep-arrow"/>
                                    </div>
    
                                    <div id="actual-reply">
                                        <h4 id="inner-author">{childCom.data.author}</h4>
                                        <li style={{margin: "5px 0 10px 0"}} key={childCom.id} id='reply'>{childCom.data.body}</li>

                                        <div id="inner-stats" style={{display: "flex"}}>
                                            <ThumbUpAltOutlinedIcon id="inner-thumbUp" onClick={() => {
                                                dispatch(upReply({parent: comment, child: childCom}))
                                            }}/>
                                            <p>{childVotes}</p>
                                            <ThumbDownAltOutlinedIcon id="inner-thumbDown" onClick={() => {
                                                dispatch(downReply({parent: comment, child: childCom}))
                                            }}/>
                                        </div>
                                       
                                    </div>
                                    
                                </div>
                            })}
                        </ul>
    
                    </li>
    
                </ul>)

                //No replies
            }else if(comment.distinguished === null && comment.subreddit_id) {
                commBody.push(
                    <ul className="list">
                        <li key={comment.id} className="list" id="replyless-com">
                            {<h4>{comment.author}</h4>}
                            {<p>{comment.body}</p>}
                            {<h2>{commVotes}</h2>}
                        </li>
                    </ul>
                )
            }
            // return commBody;
        })}
    }

    return (
        <div>
           {commBody}
        </div>
    )
}