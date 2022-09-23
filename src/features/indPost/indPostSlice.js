import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const render = createAsyncThunk(
    'indPost/render',
    async (perm, thunkAPI) => {
        const res = await fetch(`https://www.reddit.com${perm}.json`);
        const data = await res.json();

        return data;
    }
)

export const indPostSlice = createSlice({
    name: 'indPost',
    initialState: {
        render: false,
        post: {},
        status: 'not loaded',
        url: ''
    },
    reducers: {
        togglePost: (state, action) => {
            state.render = !state.render;
        },

        upComment: (state, action) => {
            const ind = state.post.comments.findIndex(comment => comment.id === action.payload.id)

            state.post.comments[ind].ups += 1;
        },

        downComment: (state, action) => {
            const ind = state.post.comments.findIndex(comment => comment.id === action.payload.id)

            state.post.comments[ind].ups -= 1;
        },

        upReply: (state, action) => {
            // const childId = action.payload.data.id;

            // console.log('this is the child ID', childId)

            const parentIndex = state.post.comments.findIndex(comment => JSON.stringify(comment) === JSON.stringify(action.payload.parent))
            // console.log('this is the PARENT index', parentIndex)

            const childIndex = state.post.comments[parentIndex].replies.data.children.findIndex(child => JSON.stringify(child) === JSON.stringify(action.payload.child))
            // console.log('this is the CHILD index', childIndex);

            state.post.comments[parentIndex].replies.data.children[childIndex].data.ups += 1;
        },

        downReply: (state, action) => {
            const parentIndex = state.post.comments.findIndex(comment => JSON.stringify(comment) === JSON.stringify(action.payload.parent))
            // console.log('this is the PARENT index', parentIndex)

            const childIndex = state.post.comments[parentIndex].replies.data.children.findIndex(child => JSON.stringify(child) === JSON.stringify(action.payload.child))
            // console.log('this is the CHILD index', childIndex);

            state.post.comments[parentIndex].replies.data.children[childIndex].data.ups -= 1;
        }
    },

    extraReducers: {
        [render.pending]: (state, action) => {
            state.status = 'loading';
        },

        [render.fulfilled]: (state, action) => {
            state.status = 'success';
            state.post.actPost = action.payload[0].data.children[0].data;

            state.post.comments = action.payload[1].data.children.map(child => child.data);
        },

        [render.rejected]: (state, action) => {
            state.status = 'rejected';
        }
    }
})

export const selectPost = state => state.indPost.post;
export const selectActPost = state => state.indPost.post.actPost
export const selectComments = state => state.indPost.post.comments
export const selectRender = state => state.indPost.render
export const selectUrl = state => state.indPost.url;
export const selectStatus = state => state.indPost.status

//not yet
// export const selectStatus = state => state.indPost.status;

export const { togglePost, upReply, downReply, upComment, downComment } = indPostSlice.actions;

export default indPostSlice.reducer;

