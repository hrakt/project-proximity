import Hero from "../components/Carousel/Carousel";
import Feautred from "../components/Featured/Featured";
import NewsPreview from "../components/News/NewsPreview";
import Newsletter from "../components/Newsletter/Newsletter";
import DefaultLayout from "../layouts/DefaultLayout";

export default function Home() {
  return (
    <div>
      <DefaultLayout>
        <Hero />
        <Feautred />
        <NewsPreview />
        <Newsletter />
      </DefaultLayout>
    </div>
  );
}
