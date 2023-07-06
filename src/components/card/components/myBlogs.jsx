import CardBlog from "../cardBlog";
import img1 from 'Images/travel/camping.png'
import img2 from 'Images/university/freinds.png'

const MyBlog = () => {
    const blogs = [
        {
            img: img1,
            title: "Meta CEO Mark Zuckerberg",
            content: "Instagram’s Threads app, a text-based social media  poised to become Twitter’s latest competitor, is now available to users in more than 100 countries."
        },
        {
            img: img2,
            title: "Freindship & drug-resistant infections; Domestic cats",
            content: "The app opens up to a scrollable feed of short-form text limited to 500 characters a post, with the ability to add individual or carousel photos and videos. Posts will include content from accounts users"
        }
    ]
    return (
        <div className=" h-fit mt-4">
            <h2 className='text-xl text-blue-gray-950 font-bold mb-4 '>
                My Blogs
            </h2>
            <div className="flex flex-col gap-4">
                {blogs.map((item) => <CardBlog img={item.img} title={item.title} content={item.content} />)}
            </div>
        </div>
    );
}

export default MyBlog;