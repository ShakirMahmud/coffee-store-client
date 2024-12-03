import { AiOutlineDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import React from 'react';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-snowy-xi.vercel.app/coffee/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                "Deleted!",
                                "This coffee has been deleted.",
                                "success"
                            );
                            const remaining = coffees.filter(coffee => coffee._id !== id);
                            setCoffees(remaining);
                        }
                    });
            }
        });
    }

    const {
        _id,
        coffeeName,
        availableQuantity,
        supplier,
        taste,
        category,
        details,
        photo } = coffee;

    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img
                    src={photo}
                />
            </figure>
            <div className="card-body flex-row flex justify-between">
                <div>
                    <h2 className="card-title">Name: {coffeeName}</h2>
                    <p>{availableQuantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="card-actions">
                    <div className="join join-vertical space-y-3">
                        <button className="btn join-item"><FaEye /></button>
                        <Link to={`/updateCoffee/${_id}`} className="btn join-item"><FaEdit /></Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn join-item bg-orange-300 font-bold"><AiOutlineDelete /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;