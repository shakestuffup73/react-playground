import Hello from '../../components/hello/Hello.jsx'

const Num = () => {
  
  function getNum() {
    return Math.floor(Math.random() * 10) + 1
  }

  const num = getNum()
  let msg

  if (num === 7){
    msg = <h1>'LUCKY!'</h1>
  } else {
    msg = <h1>'BUMMER'</h1>
  } 

  return ( 
    <>
      <h1>Your number is {getNum()}</h1>
      <div>{msg}</div>
      <Hello 
        to="ringo"
        from="paul"
        bangs={4}
      />
    </>
  );
}

export default Num;