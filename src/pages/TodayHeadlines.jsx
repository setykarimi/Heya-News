import CardNewsDetail from "Cards/cardNewsDetail";
import CardTitle from "Cards/cardTitle";
import axios from "axios";
import { useQuery } from "react-query";

const TodayHeadlines = () => {
    async function fetchData() {
        const { data } = await axios.get(`https://techcrunch.com/wp-json/wp/v2/posts?per_page=5&context=embed&search=today`);
        return data;
    }
    const { data, isError, isLoading } = useQuery("news", fetchData);

    return (
        <div>
            <CardTitle title="Today Headlines" description="Top today news in the US right now" />
            <div className="flex flex-col gap-8 mt-12">
            {isLoading ? <div>Loading</div> : isError ? <div>Error</div> :
                data.map((item, index) => <CardNewsDetail key={item.id} data={item} index={index}/>)}
                </div>
        </div>
    );
}
 
export default TodayHeadlines;