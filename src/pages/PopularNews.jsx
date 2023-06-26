import axios from "axios";
import CardTitle from "../components/card/cardTitle";
import { useQuery } from "react-query";
import CardNewsDetail from "../components/card/cardNewsDetail";

const PopularNews = () => {
    async function fetchData() {
        const { data } = await axios.get(`https://techcrunch.com/wp-json/wp/v2/posts?per_page=5&context=embed&search=popular`);
        return data;
    }
    const { data, isError, isLoading } = useQuery("news", fetchData);

    return (
        <div>
            <CardTitle title="Popular Articles" description="We share common trends, startegies ideas, opinions, short & long stories from the team behind company." />
            <div className="flex flex-col gap-8 mt-12">
            {isLoading ? <div>Loading</div> : isError ? <div>Error</div> :
                data.map((item, index) => <CardNewsDetail key={item.id} data={item} index={index}/>)}
                </div>
        </div>
    );
}

export default PopularNews;