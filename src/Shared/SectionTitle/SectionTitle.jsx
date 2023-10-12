
function SectionTitle({title, subtitle}) {
  return (
    <div className="md:w-3/12 mx-auto text-center my-3 mb-10">
        <h4 className="text-[#D99904] mb-3">---{subtitle}---</h4>
        <h2 className="text-3xl uppercase border-y-4 py-3">{title}</h2>
    </div>
  )
}

export default SectionTitle