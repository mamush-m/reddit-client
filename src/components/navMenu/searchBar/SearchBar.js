import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../../features/posts/postsSlice";

export const SearchBar = () => {
    const dispatch = useDispatch();

    const [term, setTerm] = useState('Search Reddit')

    const handleChange = (e) => {
        setTerm(e.target.value)
    }

    const handleSearch = (e) => {
        e.preventDefault()
        dispatch(getPosts(term))
    }

    return (
        <div>
            <form>

                <label htmlFor="search"></label>
                <input id="search" type="text" placeholder={term} onChange={handleChange}/>
                <button type="submit" placeholder="submit" onClick={handleSearch}>Search</button>

            </form>
        </div>
    )
}