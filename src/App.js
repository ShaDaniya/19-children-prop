import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>Text inside of the wrapper</h2>
        <button>Click me!</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Another text</h2>
        <p>some description</p>
        <input type="text" placeholder="Enter value" />
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Cat picture</h2>
        <img src="https://mobimg.b-cdn.net/v3/fetch/c4/c493aac67877288476b0fc52d55f55cf.jpeg" alt="" style={{"width": "60%"}}/>
        <input type="number" placeholder="Enter number" />
      </Wrapper>
    </div>
  );
}

export default App;
