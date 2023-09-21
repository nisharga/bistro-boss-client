import { Helmet } from "react-helmet-async"
import Cover from './../../Shared/Cover/Cover';
import shopBannar from "../../assets/shop/banner2.jpg";

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
    </div>
  )
}

export default Shop