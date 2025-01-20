import Hero from "./components/Hero/Hero";
import Feat from "./components/Features/Feat";
import Choose from "./components/WhyUs/Choose";
import Blog from "./components/Blog/Blog";


export default function Home() {
  return (
    <div>
     <Hero />
     <Feat />
     <Choose />
     <Blog  />
    </div>
  );
}
