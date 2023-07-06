import { useSelector } from "react-redux";
import CardBlog from "../cardBlog";

const MyBlog = () => {
    const {blog} = useSelector(state => state.blog)
   
    return (
        <div className=" h-fit mt-4">
            <h2 className='text-xl text-blue-gray-950 font-bold mb-4 '>
                My Blogs
            </h2>
            <div className="flex flex-col gap-4">
                {blog.map((item) => <CardBlog id={item.id} img={item.img} title={item.title} content={item.content} />)}
            </div>
        </div>
    );
}

export default MyBlog;