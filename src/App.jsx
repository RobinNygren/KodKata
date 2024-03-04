import Header from "./components/Header/Header";
import RepeatText from "./components/RepeatText/RepeatText";
import List from "./components/List/List";
import Counter from "./components/Counter/Counter";
import Check from "./components/Check/Check";
import DropDown from "./components/Dropdown/Dropdown";
import Radio from "./components/Radio/Radio";
import ToDo from "./components/ToDo/ToDo";
import ColorBox from "./components/ColorBox/ColorBox";
const App = () => {
  return (
    <>
      <h1>hejsan</h1>
      <Header headerText="Steg 4 klart!" />
      <RepeatText count={7} text="en liten båt blir snabbt full" />
      <List animalArray={["ko", "häst", "hund", "giraff"]} />
      <Counter />
      <Check />
      <DropDown items={["Bil", "Lastbil", "Motorcykel", "Cykel"]} />
      <Radio />
      <h3>To-do!</h3>
      <ToDo />
      <ColorBox Colors={["green", "blue", "pink", "red", "black"]} />
    </>
  );
};

export default App;
