import Counter from "./Components/Counter";
import ProfileCard from "./Components/ProfileCard"
import WeatherCard from "./Components/WeatherCard";
import NavBar from "./Components/NavBar"
import Rendering from "./Components/Rendering";
import ProductCard from "./Components/ProductCard";
import Gallery from "./Components/Gallery";
import ThemesToggle from "./Components/ThemesToggle";

const App = () => {
  const img1 ="src/assets/image.png";
  const img2 ="src/assets/image copy.png";
  const img3 = "src/assets/image copy 2.png";
const img4 ="src/assets/image copy 3.png";
const img5 = "src/assets/image copy 4.png";
const img6="src/assets/image copy 5.png";

  return (
    <div>
      <h1 className="text-center text-blue-400  uppercase font-serif font-bold mt-10 text-2xl">Profile of users</h1>
      <div className="w-11/12 mx-auto my-10 grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <ProfileCard name="david" age="50" bio="i'am software developer at uk" image={img1}/>
      <ProfileCard name="dawudi" age="40" bio="i'am trader maker at usa" image={img2}/>
      <ProfileCard name="danny" age="100" bio="i'am syber securitor at isreal" image={img3}/>
      </div>
      <Counter/>
      <div className="w-11/12 mx-auto my-10 grid grid-cols-3 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  ">
      <WeatherCard temperature="23.4c" city="washington DC" country="american" winter="rainfall" summer="sun"/>
      <WeatherCard temperature="20.0c" city="berline" country="German" winter="high rainfall" summer="sun"/>
      <WeatherCard temperature="17.8c" city="mosquo" country="blussia" winter="less rainfall" summer="sun"/>
      </div>
      <NavBar/>
      <Rendering/>
      <div className="grid grid-cols-3 gap-4 w-11/12 mx-auto sm:grid-cols-1 sm:gap-10 md:grid-cols-2 lg:grid-cols-3">
      <ProductCard product="computer" price ="$2k" image={img4}/>
      <ProductCard product="telephone" price ="$1k" image={img5}/>
      <ProductCard product="car" price ="$2m" image={img6}/>
      </div>
       <Gallery/>
       <ThemesToggle/>
    </div>
  )
}

export default App