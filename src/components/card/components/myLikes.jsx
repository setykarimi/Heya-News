import CardLike from "../cardLike";
import img1 from 'Images/travel/rent.png'
import img2 from 'Images/university/friendship.png'
import img3 from 'Images/university/university.png'
import { useTranslation } from "react-i18next";

const MyLikes = () => {
    const { t } = useTranslation()

    const like = [
        {
            img: img1,
            content: t("my_likes.like2")
        },
        {
            img: img2,
            content: t("my_likes.like2")
        },
        {
            img: img3,
            content: t("my_likes.like3")
        }
    ]
    return (
        <div className="bg-white rounded-xl h-fit">
            <h2 className='text-xl text-blue-gray-950 font-bold mb-4 md:p-8 p-4 border-b border-gray-100'>
                {t("my_likes.title")}
            </h2>
            <div className="p-4 grid xl:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-4">
                {like.map((item, index) => <CardLike key={index} img={item.img} content={item.content} />)}
            </div>
        </div>
    );
}

export default MyLikes;