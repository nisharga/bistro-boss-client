import FavouriteFoodButton from "../../../Shared/FavouriteFoodButton/FavouriteFoodButton"
import MenuItem from "../../../Shared/MenuItem/MenuItem"
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle"

const TodaysOffer = ({offered}) => {
  return (
     <>
     <div className="pt-16">
     <SectionTitle
             title="TODAY'S OFFER" 
             subtitle="Don't miss"
         />
    </div>
    <div className="grid md:grid-cols-2 gap-4 container mx-auto py-8">
     {offered?.map(data => <MenuItem data={data} key={data._id}></MenuItem>)}
    </div>
    <FavouriteFoodButton
      btnText="ORDER YOUR FAVOURITE FOOD"
      to="/"
    />
    </>
  )
}

export default TodaysOffer