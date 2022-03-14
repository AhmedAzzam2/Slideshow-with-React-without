import './App.css';

const colors = ["#0088FE", "#00C49F", "#FFBB28"];

function App() {
  return (
    <div className="slideshow">
      <div className="slideshowSlider">
        {colors.map((backgroundColor, index) => (
          <div className="slide" key={index} style={{ backgroundColor }}/>
        ))}
      </div>
    </div>
  );
}

export default App;
