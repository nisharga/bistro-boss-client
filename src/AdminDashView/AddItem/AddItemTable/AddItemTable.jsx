import { useState } from "react";
import { useForm } from "react-hook-form";
import { ImSpoonKnife } from "react-icons/im"; 
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AddItemTable = () => {
    const { register, handleSubmit, reset } = useForm();
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [axiosSecure] = useAxiosSecure();
    
    const onChangeFile = (e) => { 
       //image attached with formData
       setLoading(true)
       const formData = new FormData();
    formData.append("image", e.target.files[0]);
    const url = `http://localhost:5000/api/v1/file/create`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setFile(data.data.path)
        
     });
         if(file){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'File Upload Sucessfull',
                showConfirmButton: false,
                timer: 1500
            })
            setLoading(false)
        }  
      };
      
    const onSubmit = data => {
        const name = data.receiptName;
        const category = data.category;
        const price = data.price;
        const recipe = data.receiptDetails; 
        const image = file;
        // all data save together
        const saveData = {name, recipe, image, category, price}

        axiosSecure.post('/api/v1/menu/create', saveData)
        .then(data => console.log(data))

        fetch('http://localhost:5000/api/v1/menu/create', {
                method: 'POST', 
                headers: { 
                  'content-type' : 'application/json'
                },
                body: JSON.stringify(saveData)
              })
              .then(res => res.json())
              .then(data => {
                if(data.statusCode == 200){
                  Swal.fire(
                    'Item Added Successful',
                    'Add Another Item',
                    'success'
                  )
                }
              }) 
              // eslint-disable-next-line no-undef
              reset()
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pb-5 px-8">
        <div className="grid grid-cols-12">
            <div className="col-span-12">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe name*</span> 
                    </label> 
                    <input {...register("receiptName")} type="text" placeholder="Recipe name"  className="input input-bordered w-full"/>
                </div>
            </div>
            <div className="lg:col-span-6 col-span-12 py-3 lg:mr-2">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Category*</span> 
                    </label> 
                    <select {...register("category")} className="select select-bordered w-full">
                        <option value="SALAD">SALAD</option>
                        <option value="PIZZA">PIZZA</option>
                        <option value="SOUPS">SOUPS</option>
                        <option value="DESSERT">DESSERT</option>
                    </select>
                </div>
            </div>
            <div className="lg:col-span-6 col-span-12 py-3 lg:ml-2"> 
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price*</span> 
                    </label> 
                    <input type="number" {...register("price")}  placeholder="Price*"  className="input input-bordered w-full"/>
                </div> 
            </div>
            <div className="col-span-12">
            <label className="label">
                <span className="label-text">Receipt Detailss*</span> 
            </label> 
              <textarea className="textarea textarea-bordered w-full" placeholder="Receipt Details" {...register("receiptDetails")} ></textarea>
            </div>
            <div className="lg:col-span-6 py-4 col-span-12 ">
                <input type="file" className="file-input w-full" {...register("file")}
                onChange={onChangeFile}/> 
                <p>{loading ? "Loading File Uploaded..." : ""}</p>
            </div>
            <div className="col-span-12">
                <button type="submit" className="bg-gradient-to-r from-[rgba(131,93,35,1)] to-[rgba(181,129,48,1)] text-white py-2 px-4 flex justify-center items-center"><span className="mr-2">Add Item</span> <ImSpoonKnife/></button>
            </div>
        </div> 
      
    </form>
  )
}

export default AddItemTable