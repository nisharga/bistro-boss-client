import { Helmet } from "react-helmet-async"
import SectionTitle from "../../Shared/SectionTitle/SectionTitle"
import AddReviewTable from "./AddReviewTable/AddReviewTable"

const AddReview = () => {
  return (
    <div className="py-8 ">
    <Helmet>
          <title>Bistro Boss | Add Item</title>
      </Helmet>
      <SectionTitle
        title="GIVE A REVIEW"
        subtitle="Sharing is Caring!!!"
      /> 

    {/* table for all users  */}
    <div className="mx-auto container md:px-16 px-6 text-center">
        <div className="bg-[#f6f6f6]">
          <div className="cartHeader uppercase flex flex-row justify-center items-center md:justify-start
          p-6"> 
          </div>
          <div>
            <AddReviewTable/>
          </div>
        </div>
      </div>

</div>
  )
}

export default AddReview