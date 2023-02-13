
// function getMood() {
//   const moods = ['Angry', 'Depresso', 'Hungry', 'Hangry']
//   return moods[Math.floor(Math.random() * moods.length)]
// }


const Hello = (props) => {
  let bangs = "!".repeat(props.bangs)
  return ( 
    <>
      <div>
        <h1>Hello there {props.to} from {props.from}{bangs}</h1>
      </div>
    </>
  );
}

export default Hello;

