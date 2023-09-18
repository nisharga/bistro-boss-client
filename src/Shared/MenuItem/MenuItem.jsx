
const MenuItem = ({data}) => {
    // const {name} = menu;
  return (
    <div className="flex space-x-4">
      <div className="menu_image w-32">
        <img
        style={{borderRadius: '0px 200px 200px 200px'}}  
        src={data?.image} alt="menu_img" /></div>   
      <div>
        <h3 className="uppercase">{data.name} ------------------</h3> 
        <p>{data.recipe}</p> 
      </div>   
      <div className="">
        <p className="text-[#BB8506]">${data?.price}</p>
      </div>
    </div>
  )
}

export default MenuItem