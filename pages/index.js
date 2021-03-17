import Hero from "../components/Carousel/Carousel";
import Feautred from "../components/Featured/Featured";
import DefaultLayout from "../layouts/DefaultLayout";

export default function Home() {
  return (
    <div>
      <DefaultLayout>
        <Hero />
        <Feautred />
      </DefaultLayout>
    </div>
  );
}
