import { Announcement } from "../components/Announcement";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { Categories } from "../components/Categories";
import { Products } from "../components/Products";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div>
      <Announcement />
      <Header />
      <Slider />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
};
