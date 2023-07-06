import { Heart } from "iconsax-react";

const CardLike = ({
    img,
    content
}) => {
    return (
        <div className="flex gap-2 justify-between w-full p-4 items-center border border-gray-200 bg-white rounded-lg">
            <img src={img} className="w-16 h-16 rounded-lg object-cover" alt="likes" />
            <p className="xl:text-xs line-clamp-4 text-justify">{content}</p>
            <button>
                <Heart size="15" variant="Bold" color="#EF4444" /></button>
        </div>
    );
}

export default CardLike;