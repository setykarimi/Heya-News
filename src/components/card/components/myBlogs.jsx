import { useSelector } from "react-redux";
import CardBlog from "../cardBlog";
import { useTranslation } from "react-i18next";

const MyBlog = () => {
    const {blog} = useSelector(state => state.blog)
    const { t } = useTranslation()

    return (
        <div className=" h-fit mt-4">
            <h2 className='text-xl text-blue-gray-950 font-bold mb-4 '>
                {t("my_blog.title")}
            </h2>
            <div className="flex flex-col gap-4">
                {blog.map((item) => <CardBlog key={item.id} id={item.id} img={item.img} title={item.title} content={item.content} />)}
            </div>
        </div>
    );
}

export default MyBlog;