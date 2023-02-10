function Greeter(props) {
  return (
    <>
    {/* this is Javascript inside the <h1> etc...it's not HTML! we have to use className because class is a reserved word in JS */}
      <h1>Hello, {props.friend ? props.friend.name : 'friend'}</h1>
      <h2>You're from {props.friend.town}!</h2>
      <h2>I believe in you</h2>
      <h3>Another option is {props.friend?.name || "friend"}</h3>
      {/* if there's a user props.friend we can do something with it, if not, let's forget about it and just use "friend" */}
      <p>Today is {new Date().getDay() === 1 ? 'Monday' : 'Not Monday'}</p>
      {/* any valid JS expression can go inside of these curly brackets */}

    </>
  )  
}

export default Greeter

