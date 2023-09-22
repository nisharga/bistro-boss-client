import { Helmet } from "react-helmet-async"
import Cover from "../../Shared/Cover/Cover"
import bannar from "../../assets/contact/banner.jpg"

const ContactUs = () => {
  return (
    <div>
       <Helmet>
            <title>Bistro Boss | Contact Us</title>
        </Helmet>
        <Cover 
            image={bannar} 
            title="CONTACT US" 
            subtitle="Would you like to try a dish"
        /> 
    </div>
  )
}

export default ContactUs