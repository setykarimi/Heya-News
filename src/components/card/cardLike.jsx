import { Heart } from "iconsax-react";
import { useState } from "react";

const CardLike = ({ img, content }) => {
    const [like, setLike] = useState(true)
    const likeHandler = () => {
        setLike(!like)
    }
    return (
        <div className="flex gap-2 justify-between w-full p-4 items-center border border-gray-200 bg-white rounded-lg">
            <img src={img} loading="lazy" className="w-16 h-16 rounded-lg object-cover" alt="likes" />
            <p className="xl:text-xs line-clamp-4 text-justify">{content}</p>
            <button onClick={likeHandler}>
                <Heart size="15" variant={like ? "Bold" : "Outline"} color="#EF4444" />
            </button>
        </div>
    );
}

export default CardLike;