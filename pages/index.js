import Hero from "../components/Carousel/Carousel";
import DefaultLayout from "../layouts/DefaultLayout";

export default function Home() {
  return (
    <div>
      <DefaultLayout>
        <Hero />
      </DefaultLayout>
    </div>
  );
}
