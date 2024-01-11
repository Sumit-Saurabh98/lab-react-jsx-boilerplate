import './App.css';
import elephant from "./images/elephant.jpeg";
import "./style.css"

function App(props) {

  const data = props.name;

  return <div >
    <h1 className='text'>Kalvium Gallary</h1>
    <div className='main-container'>
      {
      data.map((ele, idx, data)=>{
        return <div key={ele.id}>
          <img src={ele.img} />
        </div>
      })
    }
    </div>
  </div>

  // code here
}

export default App;
