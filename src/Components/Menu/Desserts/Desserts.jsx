import FavouriteFoodButton from "../../../Shared/FavouriteFoodButton/FavouriteFoodButton"
import MenuItem from "../../../Shared/MenuItem/MenuItem"
import SectinonBannar from "../../../Shared/SectionBannar/SectionBannar"
 
const Desserts = ({dessertBG, dessert}) => {
  return (
    <div>
        <SectinonBannar
        bannar={dessertBG}
        title="Desserts"
        content="Delicious desserts to satisfy your sweet cravings."
       />
       <div className="grid md:grid-cols-2 gap-4 container mx-auto py-8">
     {dessert?.slice(0, 6).map(data => <MenuItem data={data} key={data._id}></MenuItem>)}
    </div>
    <FavouriteFoodButton
      btnText="ORDER YOUR FAVOURITE FOOD"
      to="/"
    />
    </div>
  )
}

export default Desserts