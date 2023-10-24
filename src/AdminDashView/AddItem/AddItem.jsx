import { Helmet } from "react-helmet-async"
import SectionTitle from "../../Shared/SectionTitle/SectionTitle"
import AddItemTable from "./AddItemTable/AddItemTable"

const AddItem = () => {
  return (
    <div className="py-8 ">
        <Helmet>
              <title>Bistro Boss | Add Item</title>
          </Helmet>
          <SectionTitle
            title="ADD AN ITEM"
            subtitle="what's new?"
          /> 

        {/* table for all users  */}
        <div className="mx-auto container md:px-16 px-6 text-center">
            <div className="bg-[#f6f6f6]">
              <div className="cartHeader uppercase flex flex-row justify-center items-center md:justify-start
              p-6"> 
              </div>
              <div>
                <AddItemTable/>
              </div>
            </div>
          </div>

    </div>
  )
}

export default AddItem