import React, { useEffect, useState } from "react";
import { Posts } from "../../features/posts/Posts";
// import { selectToggle } from "../../features/posts/postsSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectStatus as indStatus, selectRender, selectActPost } from "../../features/indPost/indPostSlice";
import { IndPost } from "../../features/indPost/IndPost";

export function HomePage() {
    const render = useSelector(selectRender)
    const actPost = useSelector(selectActPost);
    
    return (
        <div>
            {/* <Posts/> */}
            {/* <SideMenu/> */}
            {render? <IndPost/> : <Posts/>}
        </div>
    )
}