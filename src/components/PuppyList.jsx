import Puppy from "./Puppy";

const PuppyList = (props) => {
  // console.log(props.puppies)
  return ( 
    <>
      <h2> This is a PuppyList component </h2>
      {props.puppies?.map(puppy => <Puppy key={puppy.name} puppy={puppy}/>)}
    </>
  );
}

export default PuppyList;

/* Line 10 - this is an implicit return so don't need curly brackets, only thing we're ever going to map to is one component */

// we use empty jsx fragments because the return statement can only return one thing, so everything needs to be wrapped in one thing that gets returned...using <> lets us create a parent element that has no styling to it, so the styling can be done on everything within

// take this array and with the contents of this array which we will refer to as puppy, return an array made up of these elements --> here's the original array, transform each puppy object into a puppy element into a puppy object that also gets accessed
// convert an array of objects into an array of components made up of JSX
// map returns a new array made up of the contents of whatever the callback function does to 

// for every puppy object in the puppies array, what we want to do is create a puppy component...that will represent and display that puppy data...when we return that component, we're also passing it down the puppy object so that its accessible within the puppy object...