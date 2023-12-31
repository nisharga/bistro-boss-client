import { useEffect, useState } from "react"
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle"
import SingleFeaturedItem from "./SingleFeaturedItem/SingleFeaturedItem";

const Featured = () => { 
    const [FeaturedData, setFeaturedData] = useState([]); 
    useEffect(() => {
        fetch('https://bistro-boss-server-three-olive.vercel.app/api/v1/menu/getallmenu')
            .then(res => res.json())
            .then(data => {
                const saladData = data?.data.filter(item => item.category === "salad"); 
                setFeaturedData(saladData);
            });
    }, [FeaturedData._id]);
 
  return (
    <div className="container mx-auto pb-16 pt-8">
        <SectionTitle
            title="CHEF RECOMMENDS"
            subtitle="Should Try"
        />
        <div className="grid md:grid-cols-3 gap-6 p-4">
            { FeaturedData?.slice(0, 3).map(data => <SingleFeaturedItem
                key={data._id}
                data={data}
            ></SingleFeaturedItem>)}
        </div> 
    </div>
  )
}

export default Featured