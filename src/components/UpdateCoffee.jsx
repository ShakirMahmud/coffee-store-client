import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {
        _id,
        coffeeName,
        availableQuantity,
        supplier,
        taste,
        category,
        details,
        photo } = coffee;

        const handleUpdateCoffee = event => {
            event.preventDefault();
            const form = event.target;
            const coffeeName = form.coffeeName.value;
            const availableQuantity = form.availableQuantity.value;
            const supplier = form.supplier.value;
            const taste = form.taste.value;
            const category = form.category.value;
            const details = form.details.value;
            const photo = form.photo.value;
            const updatedCoffee = {
                coffeeName,
                availableQuantity,
                supplier,
                taste,
                category,
                details,
                photo
            }
            console.log(updatedCoffee);
            // send data to the server
            fetch(`https://coffee-store-server-snowy-xi.vercel.app/coffee/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedCoffee)    
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount > 0){
                    Swal.fire(
                        {
                            title: 'Success!',
                            text: 'Coffee Updated added successfully',
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
            <NavLink to='/' className={'btn btn-primary'}>Home</NavLink>
            <h2 className='text-3xl font-bold mb-4'>Update Coffee</h2>
            <form onSubmit={handleUpdateCoffee} className='w-full space-y-4'>
                {/* form name and quantity row  */}
                <div className='md:flex gap-6'>
                    <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='coffeeName' defaultValue={coffeeName} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='availableQuantity' defaultValue={availableQuantity} className="input input-bordered w-full " />
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
                            <input type="text" name='supplier' defaultValue={supplier} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='taste' defaultValue={taste} className="input input-bordered w-full " />
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
                            <input type="text" name='category' defaultValue={category} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control w-1/2 ">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='details' defaultValue={details} className="input input-bordered w-full " />
                        </label>
                    </div>
                </div>
                {/* form photo url row  */}
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className='input-group'>
                        <input type="text" name='photo' defaultValue={photo} className="input input-bordered w-full " />
                    </label>
                </div>
                {/* form submit button  */}
                <input type="submit" value="Update Coffee" className="btn btn-block btn-primary" />    
            </form>
        </div>
    );
};

export default UpdateCoffee;