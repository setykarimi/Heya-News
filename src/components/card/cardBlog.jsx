import { Edit } from "iconsax-react";

const CardBlog = ({ img, title, content }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4">
            <img src={img} loading="lazy" className="rounded-full w-16 h-16 object-cover" alt={title} />
            <div>
                <span className="block font-medium">{title}</span>
                <p className="text-sm line-clamp-1">{content}</p>
            </div>
            <Edit size="24" color="#3B82F6" variant="TwoTone"
            />
        </div>);
}

export default CardBlog;