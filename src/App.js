import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import ColorItems from "./component/color_item"
function App() {
  const colors = ['#2d3436','green','yellow','black','purple','brown','orange','teal','pink','gray','olive','silver','aqua','fuchsia','lime'];

  const setTheme = (color)=>{
    document.documentElement.style.setProperty('--bg-color',color);
  }


  const setColor = (event) =>{
    const currentColor = event.target.style.getPropertyValue('--bg-color');
    setTheme(currentColor);
    console.log(currentColor);
  }


  return (
    <div className="App"> <h6>Rishabh Sharma -- 21BCE11053</h6>
      <div className="color-switcher">
       
        <div className='color-list' id="to">
          
            {colors.map((color,idx)=><ColorItems setColor= {setColor} color={color} />)}
        
        </div>
        
        <h1 className='heading'>Select Colour</h1>

      </div>
    </div>
  );
}

export default App;
