import { Helmet } from "react-helmet-async"
import Cover from './../../Shared/Cover/Cover';
import shopBannar from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'; 
const Shop = () => {
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
         <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
            <TabList className={'text-center'}>
                <Tab>SALAD</Tab>
                <Tab>PIZZA</Tab>
                <Tab>SOUPS</Tab>
                <Tab>DESSERT</Tab>
            </TabList>
            <TabPanel>qqq</TabPanel>
            <TabPanel>qqqqqq</TabPanel>
            <TabPanel>qqqqaaaqq</TabPanel>
         </Tabs>
        </div>
    </div>
  )
}

export default Shop