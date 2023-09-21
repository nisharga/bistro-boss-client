import FavouriteFoodButton from "../../../Shared/FavouriteFoodButton/FavouriteFoodButton"
import MenuItem from "../../../Shared/MenuItem/MenuItem"
import SectinonBannar from "../../../Shared/SectionBannar/SectionBannar"
 
const Pizza = ({pizzaBG, pizza}) => {
  return (
    <div>
        <SectinonBannar
        bannar={pizzaBG}
        title="Pizza"
        content="Hot, cheesy pizza for your taste buds"
       />
       <div className="grid md:grid-cols-2 gap-4 container mx-auto py-8">
     {pizza?.slice(0, 6).map(data => <MenuItem data={data} key={data._id}></MenuItem>)}
    </div>
    <FavouriteFoodButton
      btnText="ORDER YOUR FAVOURITE FOOD"
      to="/shop"
    />
    </div>
  )
}

export default Pizza