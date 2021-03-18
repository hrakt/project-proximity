import Hero from "../components/Carousel/Carousel";
import Feautred from "../components/Featured/Featured";
import Newsletter from "../components/Newsletter/Newsletter";
import DefaultLayout from "../layouts/DefaultLayout";

export default function Home() {
  return (
    <div>
      <DefaultLayout>
        <Hero />
        <Feautred />
        <Newsletter />
      </DefaultLayout>
    </div>
  );
}
