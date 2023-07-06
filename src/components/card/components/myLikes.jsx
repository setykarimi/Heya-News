import CardLike from "../cardLike";
import img1 from 'Images/travel/rent.png'
import img2 from 'Images/university/friendship.png'
import img3 from 'Images/university/university.png'

const MyLikes = () => {
    const like = [
        {
            img: img1,
            content: "The attacker faces sentencing after pleading guilty to federal hate crimes charges. "
        },
        {
            img: img2,
            content: "Emotional testimony from survivors and victims’ families began on Wednesday in the federal sentencing hearing"
        },
        {
            img: img3,
            content: "In the federal case, where testimony on a possible sentence was expected to last at least two days, prosecutors agreed with the"
        }
    ]
    return (
        <div className="bg-white rounded-xl h-fit">
            <h2 className='text-xl text-blue-gray-950 font-bold mb-4 md:p-8 p-4 border-b border-gray-100'>
                My Likes
            </h2>
            <div className="p-4 grid xl:grid-cols-1 md:grid-cols-2 grid-cols-1 gap-4">
                {like.map((item) => <CardLike img={item.img} content={item.content} />)}
                </div>
        </div>
    );
}

export default MyLikes;