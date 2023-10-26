import { Helmet } from "react-helmet-async"
import SectionTitle from "../../Shared/SectionTitle/SectionTitle"
import Pagination from "./Pagination";
import { useState } from "react";
import UpdateItem from "./updateItem";


 
const ManageItems = () => {
  const [updatePage, setUpdatedPage] = useState(false) 
  const [updateProductID, setUpdateProductID] = useState(null)    
  return (
    <div className="py-8 bg-[#f6f6f6]">
         <Helmet>
              <title>Bistro Boss | Mange Items</title>
          </Helmet>
          <SectionTitle
            title="MANAGE ALL ITEMS"
            subtitle="Hurry up?"
          /> 
          <div className="mx-auto container md:px-16 px-6 text-center">
            <div className="bg-white">
              <div className="cartHeader uppercase flex flex-row justify-between items-center
              p-6">
                <h3 className="text-2xl">Total items:</h3> 
              </div>
              <div className="cartTable">
                {/* <ManageItemsTable/> */}
                {
                    updatePage 
                    ? <UpdateItem updateProductID={updateProductID} setUpdatedPage={setUpdatedPage}/> 
                    : <Pagination setUpdatedPage={setUpdatedPage} setUpdateProductID={setUpdateProductID}/>}
              </div>
            </div>
          </div>
    </div>
  )
}

export default ManageItems