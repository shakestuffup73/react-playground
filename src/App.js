import './App.css'
import Hello from './components/hello/Hello.jsx'
// import Greeter from './Greeter.jsx'
// import PuppyList from './components/PuppyList'
// import Chip from './components/Chip.jsx'

// function component
function App() {
  // const things = ['water', 'cattle', 'poptarts', 'sadness']
  // const listOfThings = things.map((thing, idx) => <li key={idx}>{thing}</li>)
  // const puppies = [
  //   {
  //     name: "Ruby", 
  //     breed: 'Cheese Hound', 
  //     age: 2, 
  //     toys: ['squeaky ball', 'stick', 'giant rope toy']
  //   },{
  //     name: "Liam", 
  //     breed: 'Schnauzer', 
  //     age: 2, 
  //     toys: ['green duck', 'purple duck', 'yellow duck']
  //   },{
  //     name: "Franklin", 
  //     breed: 'Border Collie', 
  //     age: 15, 
  //     toys: ['deer antler', 'stuffed pig', 'squeaky duck']
  //   }
  // ]
  // const puppiesList = puppies.map((puppy, idx) => <li key={idx}>{puppy.name}</li>)

  return (
    <div>
      {/* <Greeter friend={{name: "David", town: "Austin"}} /> */}
      {/* <PuppyList puppies={puppies} /> */}
      {/* <Chip /> */}
      {/* any datatype other than a string, including template literals, needs to be wrapped in curly braces */}
      {/* passed this prop as friend - when you declare a prop like this and pass it to a component, you can access it by typing props.friend (or props.whateverItIs) */}
      {/* <h3>Give us your:</h3> */}
      {/* <ul>{listOfThings}</ul> */}
      {/* <ul>{puppiesList}</ul> */}
      {/* can also write it this way */}
      <ul>
        {/* {things.map(thing => <li key={thing}>{thing}</li>)} */}
        <Hello />
        <Hello />
        <Hello />
      </ul>
    </div>
  )
}

export default App