import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { act } from "react-dom/test-utils";

export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async (subRed, thunkAPI) => {
        const searcher = subRed.split(' ').join('');
        const res = await fetch(`https://www.reddit.com/r/${searcher}.json`);
        const data = await res.json();

        console.log('Here is the data: ', data)
        return data
    }
)

export const setHome = createAsyncThunk(
    'posts/homePost',
    async (placeholder, thunkAPI) => {
            const res = await fetch('https://www.reddit.com/.json');
            const data = await res.json();

            return data;
    }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        data: [],
        isLoading: false,
        isSuccessful: false,
        isRejected: false,
        status: null,
        getPost: false
    },
    reducers: {
        addPost: (state, action) => {
            state[action.payload.id] = action.payload
        },

        deletePost: (state, action) => {
            delete state[action.payload.id]
        },

        upVote: (state, action) => {
            const ind = state.data.findIndex(element => element.title === action.payload);
            state.data[ind].ups += 1;
            console.log(state.data[ind].ups)
        },

        downVote: (state, action) => {
            const ind = state.data.findIndex(element => element.title === action.payload);
            state.data[ind].ups -= 1;
            console.log(state.data[ind].ups)
        },

        togglePost: (state, action) => {
            state.getPost = !state.getPost;
        }
    },

    extraReducers: {
        [getPosts.pending]: (state, action) => {
            state.isLoading = true;
            state.isRejected = false;
            state.isSuccessful = false;
        },

        [getPosts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isSuccessful = true;
            state.isRejected = false;

            state.data = [];

            action.payload.data.children.forEach(child => state.data.push(child.data))
        },

        [getPosts.rejected]: (state, action) => {
            state.isLoading = false;
            state.isSuccessful = false;
            state.isRejected = true;
        },


        [setHome.pending]: (state, action) => {
            state.isLoading = true;
            state.isSuccessful = false;
            state.isRejected = false;

            state.status = 'loading'
        },
        [setHome.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.isSuccessful = true;
            state.isRejected = false;

            action.payload.data.children.forEach(child => state.data.push(child.data));

            state.status = 'success';
        },
        [setHome.rejected]: (state, action) => {
            state.isLoading = false;
            state.isSuccessful = false;
            state.isRejected = true;

            state.status = 'rejected';
        }
    }
})



export const selectPosts = state => state.posts.data;
export const selectStatus = state => state.posts.status;
export const selectToggle = state => state.posts.getPost;

export const { addPost, deletePost, upVote, downVote, togglePost } = postsSlice.actions;
export default postsSlice.reducer;


const sampleChild = {
    "kind": "t3",
    "data": {
        "approved_at_utc": null,
        "subreddit": "realmadrid",
        "selftext": "",
        "author_fullname": "t2_e5snm10",
        "saved": false,
        "mod_reason_title": null,
        "gilded": 0,
        "clicked": false,
        "title": "[Let's be Real Podcast] S2E11 We reflect upon Eden Hazard possibly turning back the clock under the lights in front of an energetic Celtic Park crowd, how benzema's injury paves way for Eden's incorporation into the starting XI, kroos &amp;amp; modric still setting the tempo, Mallorca visiting on Sunday etc",
        "link_flair_richtext": [
            {
                "e": "text",
                "t": "Media"
            }
        ],
        "subreddit_name_prefixed": "r/realmadrid",
        "hidden": false,
        "pwls": 6,
        "link_flair_css_class": "other",
        "downs": 0,
        "thumbnail_height": 105,
        "top_awarded_type": null,
        "hide_score": false,
        "name": "t3_x9frgf",
        "quarantine": false,
        "link_flair_text_color": "dark",
        "upvote_ratio": 0.78,
        "author_flair_background_color": "#ffb000",
        "ups": 8,
        "total_awards_received": 0,
        "media_embed": {
            "content": "&amp;lt;iframe width=\"356\" height=\"200\" src=\"https://www.youtube.com/embed/SR6J3mCS_ZI?feature=oembed&amp;amp;enablejsapi=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen title=\"Real Madrid vs Celtic Post Game and Mallorca Preview| Let's Be Real A Real Madrid Podcast\"&amp;gt;&amp;lt;/iframe&amp;gt;",
            "width": 356,
            "scrolling": false,
            "height": 200
        },
        "thumbnail_width": 140,
        "author_flair_template_id": "ad7ca258-b880-11e6-b5b2-0e961a69d3da",
        "is_original_content": false,
        "user_reports": [],
        "secure_media": {
            "type": "youtube.com",
            "oembed": {
                "provider_url": "https://www.youtube.com/",
                "version": "1.0",
                "title": "Real Madrid vs Celtic Post Game and Mallorca Preview| Let's Be Real A Real Madrid Podcast",
                "type": "video",
                "thumbnail_width": 480,
                "height": 200,
                "width": 356,
                "html": "&amp;lt;iframe width=\"356\" height=\"200\" src=\"https://www.youtube.com/embed/SR6J3mCS_ZI?feature=oembed&amp;amp;enablejsapi=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen title=\"Real Madrid vs Celtic Post Game and Mallorca Preview| Let's Be Real A Real Madrid Podcast\"&amp;gt;&amp;lt;/iframe&amp;gt;",
                "author_name": "Let's be Real - A Real Madrid Podcast",
                "provider_name": "YouTube",
                "thumbnail_url": "https://i.ytimg.com/vi/SR6J3mCS_ZI/hqdefault.jpg",
                "thumbnail_height": 360,
                "author_url": "https://www.youtube.com/c/LetsbeReal1902"
            }
        },
        "is_reddit_media_domain": false,
        "is_meta": false,
        "category": null,
        "secure_media_embed": {
            "content": "&amp;lt;iframe width=\"356\" height=\"200\" src=\"https://www.youtube.com/embed/SR6J3mCS_ZI?feature=oembed&amp;amp;enablejsapi=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen title=\"Real Madrid vs Celtic Post Game and Mallorca Preview| Let's Be Real A Real Madrid Podcast\"&amp;gt;&amp;lt;/iframe&amp;gt;",
            "width": 356,
            "scrolling": false,
            "media_domain_url": "https://www.redditmedia.com/mediaembed/x9frgf",
            "height": 200
        },
        "link_flair_text": "Media",
        "can_mod_post": false,
        "score": 8,
        "approved_by": null,
        "is_created_from_ads_ui": false,
        "author_premium": false,
        "thumbnail": "https://b.thumbs.redditmedia.com/qqKzVXlF0CCyrN22APJBs4uidaK_2P9gU1rBS5EPCRA.jpg",
        "edited": false,
        "author_flair_css_class": "Ramos",
        "author_flair_richtext": [
            {
                "e": "text",
                "t": "Sergio Ramos"
            },
            {
                "a": ":Ramos:",
                "e": "emoji",
                "u": "https://emoji.redditmedia.com/5iu3pctt3ao51_t5_2rr0e/Ramos"
            }
        ],
        "gildings": {},
        "post_hint": "rich:video",
        "content_categories": null,
        "is_self": false,
        "subreddit_type": "public",
        "created": 1662681044,
        "link_flair_type": "richtext",
        "wls": 6,
        "removed_by_category": null,
        "banned_by": null,
        "author_flair_type": "richtext",
        "domain": "youtu.be",
        "allow_live_comments": false,
        "selftext_html": null,
        "likes": null,
        "suggested_sort": null,
        "banned_at_utc": null,
        "url_overridden_by_dest": "https://youtu.be/SR6J3mCS_ZI",
        "view_count": null,
        "archived": false,
        "no_follow": false,
        "is_crosspostable": false,
        "pinned": false,
        "over_18": false,
        "preview": {
            "images": [
                {
                    "source": {
                        "url": "https://external-preview.redd.it/vN5JyCt51Td1ZRnEDU6zCj0KUQQIs4jzbsHcOCDIX_0.jpg?auto=webp&amp;amp;s=e7a81360f29d9ccf89c4427e061eadfd3d1b52a9",
                        "width": 480,
                        "height": 360
                    },
                    "resolutions": [
                        {
                            "url": "https://external-preview.redd.it/vN5JyCt51Td1ZRnEDU6zCj0KUQQIs4jzbsHcOCDIX_0.jpg?width=108&amp;amp;crop=smart&amp;amp;auto=webp&amp;amp;s=3187072e0bba344dbb1ea03669dd9c0e69f0d912",
                            "width": 108,
                            "height": 81
                        },
                        {
                            "url": "https://external-preview.redd.it/vN5JyCt51Td1ZRnEDU6zCj0KUQQIs4jzbsHcOCDIX_0.jpg?width=216&amp;amp;crop=smart&amp;amp;auto=webp&amp;amp;s=6250894a5bce704aaf04f8c22a3dc9a863efae45",
                            "width": 216,
                            "height": 162
                        },
                        {
                            "url": "https://external-preview.redd.it/vN5JyCt51Td1ZRnEDU6zCj0KUQQIs4jzbsHcOCDIX_0.jpg?width=320&amp;amp;crop=smart&amp;amp;auto=webp&amp;amp;s=a656eba78848055cda9ecd9675410080229b0b37",
                            "width": 320,
                            "height": 240
                        }
                    ],
                    "variants": {},
                    "id": "wcllW8yzIA6tUj-Z6DqbZpTEFevCWbduIJQeWfa_lnc"
                }
            ],
            "enabled": false
        },
        "all_awardings": [],
        "awarders": [],
        "media_only": false,
        "link_flair_template_id": "b8f55ed8-ea8a-11e9-a9f0-0ec92e8df416",
        "can_gild": false,
        "spoiler": false,
        "locked": false,
        "author_flair_text": "Sergio Ramos:Ramos:",
        "treatment_tags": [],
        "visited": false,
        "removed_by": null,
        "mod_note": null,
        "distinguished": null,
        "subreddit_id": "t5_2rr0e",
        "author_is_blocked": false,
        "mod_reason_by": null,
        "num_reports": null,
        "removal_reason": null,
        "link_flair_background_color": "#0dd3bb",
        "id": "x9frgf",
        "is_robot_indexable": true,
        "report_reasons": null,
        "author": "MSunaid",
        "discussion_type": null,
        "num_comments": 0,
        "send_replies": true,
        "whitelist_status": "all_ads",
        "contest_mode": false,
        "mod_reports": [],
        "author_patreon_flair": false,
        "author_flair_text_color": "light",
        "permalink": "/r/realmadrid/comments/x9frgf/lets_be_real_podcast_s2e11_we_reflect_upon_eden/",
        "parent_whitelist_status": "all_ads",
        "stickied": false,
        "url": "https://youtu.be/SR6J3mCS_ZI",
        "subreddit_subscribers": 149916,
        "created_utc": 1662681044,
        "num_crossposts": 0,
        "media": {
            "type": "youtube.com",
            "oembed": {
                "provider_url": "https://www.youtube.com/",
                "version": "1.0",
                "title": "Real Madrid vs Celtic Post Game and Mallorca Preview| Let's Be Real A Real Madrid Podcast",
                "type": "video",
                "thumbnail_width": 480,
                "height": 200,
                "width": 356,
                "html": "&amp;lt;iframe width=\"356\" height=\"200\" src=\"https://www.youtube.com/embed/SR6J3mCS_ZI?feature=oembed&amp;amp;enablejsapi=1\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen title=\"Real Madrid vs Celtic Post Game and Mallorca Preview| Let's Be Real A Real Madrid Podcast\"&amp;gt;&amp;lt;/iframe&amp;gt;",
                "author_name": "Let's be Real - A Real Madrid Podcast",
                "provider_name": "YouTube",
                "thumbnail_url": "https://i.ytimg.com/vi/SR6J3mCS_ZI/hqdefault.jpg",
                "thumbnail_height": 360,
                "author_url": "https://www.youtube.com/c/LetsbeReal1902"
            }
        },
        "is_video": false
    }
}