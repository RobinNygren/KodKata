import Header from "./components/Header/Header"
import RepeatText from "./components/RepeatText/RepeatText";
import List from "./components/List/List";
import Counter from "./components/Counter/Counter";
import Check from "./components/Check/Check";
const App = () => {


  return (
    <>
     <h1>hejsan</h1>
     <Header headerText="Steg 4 klart!" />
     <RepeatText count ={7} text="en liten båt blir snabbt full"/>
     <List animalArray={["ko", "häst", "hund", "giraff"]}/>
     <Counter />
     <Check />
    </>
  );
}

export default App;
