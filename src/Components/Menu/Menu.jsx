import { Helmet } from "react-helmet-async"
import Cover from "../../Shared/Cover/Cover"
import bannar from "../../assets/menu/banner3.jpg"

const Menu = () => {
  return (
    <div>
        <Helmet>
            <title>Bistro Boss | Menu</title>
        </Helmet>
        <Cover image={bannar} title="Our Menu" subtitle="Would you like to try a dish"/>
    </div>
  )
}

export default Menu