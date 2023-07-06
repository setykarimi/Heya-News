export default function Hashtags() {
    const popularTags = [
        "Design", "User Experience", "User Interface"
    ]
    
    return (
        <div className="text-gray-500 mt-4 flex flex-wrap items-center">
            <span className="font-light md:mb-0 mb-2 mr-2">Popular tags:</span>
           <div className="flex gap-2"> {popularTags.map((title) => <Hashtag key={title} title={title} />)}
           </div>
        </div>
    )
}

const Hashtag = ({ title }) => {
    return (<button className="px-3 text-sm py-1 backdrop-blur-md border border-white bg-white/20 rounded-full font-light">
        {title}
    </button>);
}