import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectActPost, selectComments, selectRender, selectStatus, togglePost } from "./indPostSlice";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Comments } from "./Comments";
import { ActPost } from "./ActPost";

export const IndPost = () => {
    const dispatch = useDispatch();


    return (
        <div style={{width: "70%", backgroundColor: "hsla(0, 0%, 10%, 1)", margin: "0 auto", borderRadius: "55px"}}>
            <ActPost/>
            <Comments/>
        </div>
    )
}