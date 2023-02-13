import './App.css'
import Machine from './components/machine/Machine.jsx'
// import Friend from './components/friend/Friend.jsx'
// import Num from './components/numPicker/Num.jsx'


// function component
function App({s1, s2, s3}) {
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
        {/* {things.map(thing => <li key={thing}>{thing}</li>)} */}
        {/* <Num /> */}
      <h1>Slot Machines!</h1>
      <Machine
        s1={s1}
        s2={s2}
        s3={s3}
      />
      {/* <Friend 
        name='Joe'
        hobbies={['Piano', 'Dance', 'Soccer']}
      /> */}
    </div>
  )
}

export default App