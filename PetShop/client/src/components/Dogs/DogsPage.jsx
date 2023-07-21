import './Dogs.css'
import DogsCard from "./DogsCard"

const DogsPage = (props) => {
  const { allDogs } = props
  return (
    <section className="dogs-container">
      {allDogs.map(dog => (
        <div key={dog.id} className="">
          <DogsCard id={dog.id} name={dog.name} breed={dog.breed} description={dog.description} price={dog.price} imageUrl={dog.imageUrl}/>
        </div>
      ))}
    </section>
  )
}

export default DogsPage