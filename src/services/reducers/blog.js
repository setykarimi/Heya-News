import { createSlice } from '@reduxjs/toolkit'
import img1 from 'Images/travel/camping.png'
import img2 from 'Images/university/freinds.png'
import i18n from '../../../i18n';

const initialState = {
    blog: [
        {
            id: 0,
            img: img1,
            title: i18n.t("my_blog.list.title1"),
            content: i18n.t("my_blog.list.desc1")
        },
        {
            id: 1,
            img: img2,
            title: i18n.t("my_blog.list.title2"),
            content: i18n.t("my_blog.list.desc2")
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