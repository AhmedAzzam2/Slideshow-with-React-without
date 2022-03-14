import './App.css';
import React from 'react';

const img = ["https://cdn.pixabay.com/photo/2020/02/13/06/49/seascape-4844697_960_720.jpg",
  "https://cdn.pixabay.com/photo/2019/11/20/17/10/people-4640597_960_720.jpg",
  "https://cdn.pixabay.com/photo/2014/12/20/19/18/old-woman-574278_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/01/14/13/59/castelmezzano-1979546_960_720.jpg",
  "https://cdn.pixabay.com/photo/2021/08/20/14/53/monastery-6560623_960_720.jpg",
  "https://cdn.pixabay.com/photo/2021/12/19/12/27/road-6881040_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/11/07/15/58/dashboard-3800651_960_720.jpg"];

const delay = 2500;

function App() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === img.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      <h1> slideshow with react without library </h1>
      <div className="slideshow">
        <div 
          className="slideshowSlider "
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {img.map((backgroundColor, index) => (

            <div className="card">
              <div className="img">
                <img src={backgroundColor} className="slide" alt="logo" />

              </div>
              <div className="info">
                add text for test only
              </div>
            </div>


          ))}
        </div>
        <div className="slideshowArrow">

          <span className="ArrowL"
            onClick={() => {
              setIndex((prevIndex) =>
                prevIndex === img.length - 1 ? 0 : prevIndex + 1
              )
            }}
          > 	&#8592; </span>
          <span className="ArrowR"
            onClick={() => {
              setIndex((prevIndex) =>
                prevIndex === img.length - 1 ? 0 : prevIndex + 1
              )
            }}
          > 	&#8594; </span>


        </div>

        <div className="slideshowDots">
          {img.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
export default App;
