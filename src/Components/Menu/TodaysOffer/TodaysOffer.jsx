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
    <div className=" pb-12 text-center">
         <button className=" text-[#1F2937] font-bold uppercase border-b-900 border-b rounded-bl rounded-br border-black pb-3 mt-5 text-center"
       onClick={() => alert("HELLO BANGLADESH")}
       >
       View Full Menu</button>
    </div>
    </>
  )
}

export default TodaysOffer