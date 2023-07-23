import { useLocation } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import CardNewsDetail from "Cards/cardNewsDetail";
import Loading from "Components/alert/loading";


const News = () => {
    const location = useLocation()
    const { search } = location.state

    async function fetchData() {
        const { data } = await axios.get(`https://techcrunch.com/wp-json/wp/v2/posts?per_page=10&context=embed&search=${search}`);
        return data;
    }
    const { data, isError, isLoading } = useQuery("news", fetchData);

    if (isLoading) {
        return <Loading />
    }

    if(isError){
        return <div>is Error</div>
    }

    return (
        <div className="xl:w-10/12 lg:w-11/12 md:w-full mx-auto">
            <div className="flex flex-col gap-8 mt-12">
                {data.map((item, index) => <CardNewsDetail key={item.id} data={item} index={index} />)}
            </div>
        </div>
    );
}

export default News;