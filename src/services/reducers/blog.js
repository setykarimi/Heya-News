import { createSlice } from '@reduxjs/toolkit'
import img1 from 'Images/travel/camping.png'
import img2 from 'Images/university/freinds.png'

const initialState = {
    blog: [
        {
            id: 0,
            img: img1,
            title: "Meta CEO Mark Zuckerberg",
            content: "Instagram’s Threads app, a text-based social media  poised to become Twitter’s latest competitor, is now available to users in more than 100 countries."
        },
        {
            id: 1,
            img: img2,
            title: "Freindship & drug-resistant infections; Domestic cats",
            content: "The app opens up to a scrollable feed of short-form text limited to 500 characters a post, with the ability to add individual or carousel photos and videos. Posts will include content from accounts users"
        }
    ]
}

export const BlogSLice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        UPDATE_BLOG: (state, { payload }) => {
            state.blog[payload.id].title = payload.values.title
            state.blog[payload.id].content = payload.values.content
        }
    },
})

export const { UPDATE_BLOG } = BlogSLice.actions

export default BlogSLice.reducer