import React from "react";
import { getPosts } from '../../features/posts/postsSlice'
import { useDispatch } from "react-redux";
// import { selectStatus } from "../../features/indPost/indPostSlice";

export const SideMenu = () => {
    const dispatch = useDispatch();

    const searchSub = e => {
        console.log(e.target.innerHTML.slice(2))

        const searcher = e.target.innerHTML.slice(2);
        dispatch(getPosts(searcher));

        window.scroll(0,0)
    }

    // useEffect(() => {
    //     console.log('first log', 'status changed')
    // }, [status])

    return (
        <div>
            <h4>Trending Subreddits</h4>
            <div>
                <h5>1</h5>
                    <p onClick={searchSub}>r/mildlyinteresting</p>
            </div>

            <div>
                <h5>2</h5>
                    <p onClick={searchSub}>r/funny</p>
            </div>

            <div>
                <h5>3</h5>
                    <p onClick={searchSub}>r/space</p>
            </div>

            <div>
                <h5>4</h5>
                    <p onClick={searchSub}>r/worldnews</p>
            </div>

            <div>
                <h5>5</h5>
                    <p onClick={searchSub}>r/Damnthatsinteresting</p>
            </div>

            <div>
                <h5>6</h5>
                    <p onClick={searchSub}>r/nottheonion</p>
            </div>

            <div>
                <h5>7</h5>
                    <p onClick={searchSub}>r/music</p>
            </div>

            <div>
                <h5>8</h5>
                    <p onClick={searchSub}>r/books</p>
            </div>

            <div>
                <h5>9</h5>
                    <p onClick={searchSub}>r/ThatsInsane</p>
            </div>

            <div>
                <h5>10</h5>
                    <p onClick={searchSub}>r/sports</p>
            </div>
        </div>
    )
}