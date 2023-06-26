const CardTitle = ({title, description}) => {
    return ( <div className="bg-gray-200 p-10 rounded-xl text-center">
        <span className="font-bold lg:text-5xl text-3xl text-gray-800 block">{title}</span>
        <span className="text-gray-500 block font-light mt-3">{description}</span>
    </div> );
}
 
export default CardTitle;