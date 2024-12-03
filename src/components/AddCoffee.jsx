
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddCoffee = () => {

    const handleAddCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const coffeeName = form.coffeeName.value;
        const availableQuantity = form.availableQuantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {
            coffeeName,
            availableQuantity,
            supplier,
            taste,
            category,
            details,
            photo
        }
        console.log(newCoffee);
        // send data to the server
        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)    
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire(
                    {
                        title: 'Success!',
                        text: 'Coffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    }
                )
                // form.reset();

            }
        })
    }


    return (
        <div className='bg-[#F4f3f0] p-24 '>
            <NavLink to='/' className='btn btn-primary'>Home</NavLink>
            <h2 className='text-3xl font-bold mb-4'>Add Coffee</h2>
            <form onSubmit={handleAddCoffee} className='w-full space-y-4'>
                {/* form name and quantity row  */}
                <div className='md:flex gap-6'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='coffeeName' placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='availableQuantity' placeholder="Type here" className="input input-bordered w-full " />
                        </label>
                    </div>

                </div>
                {/* form supplier and taste row  */}
                <div className='md:flex gap-6'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='supplier' placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='taste' placeholder="Type here" className="input input-bordered w-full " />
                        </label>
                    </div>

                </div>
                {/* form category and details row  */}
                <div className='md:flex gap-6'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='category' placeholder="Type here" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='details' placeholder="Type here" className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                {/* form photo url row  */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" name='photo' placeholder="Type here" className="input input-bordered w-full " />
                    </label>
                </div>
                {/* form submit button  */}
                <input type="submit" value="Add Coffee" className="btn btn-block btn-primary" />    
            </form>
        </div>
    );
};

export default AddCoffee;