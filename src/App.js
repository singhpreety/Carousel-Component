// import './App.css';
import Carousel, { CarouselItem } from "./Carousel";
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';

function App() {
  return (
    <div className="App">
      <Carousel>
      <CarouselItem><img src={image1} alt={"image1"} className={"image1"}/></CarouselItem>
      <CarouselItem><img src={image2} alt={"image1"} className={"image2"}/></CarouselItem>
      <CarouselItem><img src={image3} alt={"image1"} className={"image3"}/></CarouselItem>
      </Carousel>
    </div>
  );
}

export default App;
