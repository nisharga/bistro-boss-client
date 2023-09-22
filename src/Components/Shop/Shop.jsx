import { Helmet } from "react-helmet-async"
import Cover from './../../Shared/Cover/Cover';
import shopBannar from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; 
import SingleShopItem from './SingleShopItem/SingleShopItem';
import { useState } from "react";
import useMenu from "../../hooks/useMenu";

import Loading from "../../Shared/Loading/Loading";
const Shop = () => {
    const [index, setIndex] = useState(0);
    //all menus
    const [menu] = useMenu(); 
    const salad = menu?.filter(val => val.category === "salad") 
    const pizza = menu?.filter(val => val.category === "pizza") 
    const soup = menu?.filter(val => val.category === "soup")
    const dessert = menu?.filter(val => val.category === "dessert")
    //all menus
  return (
    <div>
        <Helmet>
            <title>Bistro Boss | Shop</title>
        </Helmet>
        <Cover
            image={shopBannar} 
            title="Our Shop" 
            subtitle="Would you like to try a dish"
        />
        <div className="py-16 container mx-auto">
         <Tabs defaultIndex={1} onSelect={(index) => setIndex(index)}>
            <TabList className={'text-center'}>
                <Tab>SALAD</Tab>
                <Tab>PIZZA</Tab>
                <Tab>SOUPS</Tab>
                <Tab>DESSERT</Tab>
            </TabList>
            <TabPanel>
            <div className="grid md:grid-cols-3 gap-4 container mx-auto mb-12 mt-12">
                {
                    salad ? salad?.map((data) => <SingleShopItem 
                    key={data._id} 
                    data={data}
                    ></SingleShopItem>)
                    : <Loading/>
                } 
            </div>
            </TabPanel>
            <TabPanel>
            <div className="grid md:grid-cols-3 gap-4 container mx-auto mb-12 mt-12">
                {
                    pizza ? pizza?.map((data) => <SingleShopItem 
                    key={data._id} 
                    data={data}
                    ></SingleShopItem>)
                    : <Loading/>
                } 
            </div>
            </TabPanel>
            <TabPanel>
            <div className="grid md:grid-cols-3 gap-4 container mx-auto mb-12 mt-12">
                {
                    soup ? soup?.map((data) => <SingleShopItem 
                    key={data._id} 
                    data={data}
                    ></SingleShopItem>)
                    : <Loading/>
                } 
            </div>
            </TabPanel>
            <TabPanel>
            <div className="grid md:grid-cols-3 gap-4 container mx-auto mb-12 mt-12">
                {
                    dessert ? dessert?.map((data) => <SingleShopItem 
                    key={data._id} 
                    data={data}
                    ></SingleShopItem>)
                    : <Loading/>
                }
                </div>
            </TabPanel>
         </Tabs> 
        </div>
    </div>
  )
}

export default Shop