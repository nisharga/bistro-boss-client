import FavouriteFoodButton from "../../../Shared/FavouriteFoodButton/FavouriteFoodButton"
import MenuItem from "../../../Shared/MenuItem/MenuItem"
import SectinonBannar from "../../../Shared/SectionBannar/SectionBannar"
 
const Soup = ({soupBG, soup}) => {
  return (
    <div>
        <SectinonBannar
        bannar={soupBG}
        title="Shoups"
        content="Hearty soups to warm your soul and stomach."
       />
       <div className="grid md:grid-cols-2 gap-4 container mx-auto py-8">
     {soup?.slice(0, 6).map(data => <MenuItem data={data} key={data._id}></MenuItem>)}
    </div>
    <FavouriteFoodButton
      btnText="ORDER YOUR FAVOURITE FOOD"
      to="/"
    />
    </div>
  )
}

export default Soup