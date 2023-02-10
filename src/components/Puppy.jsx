import Toy from "./components/Toy"

const Puppy = (props) => {
  // console.log(props.toys)
  return (
    <>
      <h3>
        {props.puppy.name} is a {props.puppy.age} year old {props.puppy.breed}.
      </h3>
      
      {props.puppy.toys.map(toy => (
        <Toy key={toy} toy={toy} dogName={props.puppy.name} />
      ))}
    </>
  )
}

export default Puppy