import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import style from "./Home.module.css";
import HomeBody from "../Home/HomeBody";

const Home = () => {
  console.log("Home re render");
  return (
    <div className={style.Home__main__conatainer}>
      <Header />
      <HomeBody />
      <Footer />
    </div>
  );
};

export default Home;
