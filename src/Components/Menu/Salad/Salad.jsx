import FavouriteFoodButton from "../../../Shared/FavouriteFoodButton/FavouriteFoodButton"
import MenuItem from "../../../Shared/MenuItem/MenuItem"
import SectinonBannar from "../../../Shared/SectionBannar/SectionBannar"
 
const Salad = ({saladBG, salad}) => {
  return (
    <div>
        <SectinonBannar
        bannar={saladBG}
        title="Salad"
        content="Fresh salads for a healthy dining experience."
       />
       <div className="grid md:grid-cols-2 gap-4 container mx-auto py-8">
     {salad?.slice(0, 6).map(data => <MenuItem data={data} key={data._id}></MenuItem>)}
    </div>
    <FavouriteFoodButton
      btnText="ORDER YOUR FAVOURITE FOOD"
      to="/"
    />
    </div>
  )
}

export default Salad