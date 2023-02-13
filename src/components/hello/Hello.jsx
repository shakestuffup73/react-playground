
// function getMood() {
//   const moods = ['Angry', 'Depresso', 'Hungry', 'Hangry']
//   return moods[Math.floor(Math.random() * moods.length)]
// }


const Hello = () => {
  let bangs = "!".repeat(this.props.bangs)
  return ( 
    <>
      <div>
        <h1>Hello there {this.props.to} from {this.props.from}{bangs}</h1>
      </div>
    </>
  );
}

export default Hello;

