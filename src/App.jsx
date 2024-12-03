import { useState } from 'react'

import './App.css'
import { NavLink, useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard';

function App() {
  const loadedCoffees = useLoaderData() || [];
  const [coffees, setCoffees] = useState(loadedCoffees);
  console.log("Loaded Coffees:", loadedCoffees);


  return (
    <div className='my-20 '>
      <NavLink to='/addCoffee' className={'btn btn-primary'}>Add Coffee</NavLink>

      <h1 className='text-6xl text-center text-purple-600'>Coffees: {coffees.length}</h1>

      <div className='w-4/5 mx-auto my-12 grid md:grid-cols-2 gap-4'>
        {
          Array.isArray(coffees) &&
          coffees.map(coffee => <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App
