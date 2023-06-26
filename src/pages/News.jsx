import { useLocation } from "react-router-dom";
import axios from "axios";
import CardTitle from "../components/card/cardTitle";
import { useQuery } from "react-query";
import CardNewsDetail from "../components/card/cardNewsDetail";


const News = () => {
    const location = useLocation()
    const { search } = location.state

    async function fetchData() {
        const { data } = await axios.get(`https://techcrunch.com/wp-json/wp/v2/posts?per_page=10&context=embed&search=${search}`);
        return data;
    }
    const { data, isError, isLoading } = useQuery("news", fetchData);

    if (isLoading) {
        return <div>is Loading</div>
    }

    if(isError){
        return <div>is Error</div>
    }

    return (
        <div>
            <div className="flex flex-col gap-8 mt-12">
                {data.map((item, index) => <CardNewsDetail key={item.id} data={item} index={index} />)}
            </div>
        </div>
    );
}

export default News;