 const UpdateItem = ({updateProductID, setUpdatedPage}) => {
    const updatedItem = () => {
        setUpdatedPage(false)
    }
  return (
    <div>updateItem {updateProductID}
    <button onClick={() => updatedItem()}>-----update</button>
    </div>
  )
}

export default UpdateItem