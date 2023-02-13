const Friend = (props) => {

  const { name, hobbies } = props
  
  return ( 
    <>
      <div>
        <h1>{name}</h1>
        <h1>{hobbies.map(h => <li>{h}</li>)}</h1>
      </div>
    </>
  );
}

export default Friend;