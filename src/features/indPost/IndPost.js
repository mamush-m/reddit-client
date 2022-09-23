import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectActPost, selectComments, selectRender, selectStatus, togglePost } from "./indPostSlice";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Comments } from "./Comments";
import { ActPost } from "./ActPost";

export const IndPost = () => {
    // const dispatch = useDispatch();

    // const actPost = useSelector(selectActPost);
    // const status = useSelector(selectStatus);
    // const comments = useSelector(selectComments)

    // let data;

    // // if(status === 'success') {
    // //     const title = actPost.title;

    // //     data = <div>
    // //         {/* <h3 onClick={() => dispatch(togglePost())}>close</h3>
    // //         <h1>{title}</h1> */}


    // //         {/* {comments.map(comment => {
    // //             let commBody = [];

    // //             //Has replies
    // //             if(comment.distinguished === null && comment.replies && comment.replies.data.children.length > 0 && comment.subreddit_id){
    // //                 commBody.push(<ul className="list outer">
    // //                     <li>
    // //                         {<h4 id="outer-author">{comment.author}</h4>}
    // //                         {<p id="outer-body">{comment.body}</p>}
    // //                         <ul className="list">
    // //                             {comment.replies.data.children.filter(child => child.kind === 't1').map(childCom => {
    // //                                 return <div id="rep-group">

    // //                                     <div id="arr-group">
    // //                                         <ArrowRightAltIcon id="rep-arrow"/>
    // //                                     </div>

    // //                                     <div id="actual-reply">
    // //                                         <h4 id="inner-author">{childCom.data.author}</h4>
    // //                                         <li key={childCom.id} id='reply'>{childCom.data.body}</li>
    // //                                     </div>
                                        
    // //                                 </div>
    // //                             })}
    // //                         </ul>

    // //                     </li>

    // //                 </ul>)
    // //             }else if(comment.distinguished === null && comment.subreddit_id) {
    // //                 commBody.push(
    // //                     <ul className="list">
    // //                         <li key={comment.id} className="list" id="replyless-com">
    // //                             {<h4>{comment.author}</h4>}
    // //                             {<p>{comment.body}</p>}
    // //                         </li>
    // //                     </ul>
    // //                 )
    // //             }

    // //             return commBody;
    // //         })} */}
    // //     </div>
    // // }


    return (
        <div>
            {/* <h2 id="go-back" onHover={console.log('happy days')}>Go back`</h2> */}
            <ActPost/>
            <Comments/>
        </div>
    )
}