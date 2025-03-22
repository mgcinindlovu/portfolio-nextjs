import Navigation from '@/components/navigation';
import Hero from '@/components/hero';
import About from '@/components/About';
import ProductRange from '@/components/ProductRange';
import Factory from '@/components/Factory';
import Request from '@/components/Request';
import Game from '@/components/Game';
import Recipe from '@/components/Recipe';
const Page = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <ProductRange />
      <Factory />
      <Request />
      <Game />
      <Recipe />
      {/* Add other page content here */}
    </div>
  );
};

export default Page; 