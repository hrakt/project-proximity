import Hero from "../components/Carousel/Carousel";
import Feautred from "../components/Featured/Featured";
import NewsPreview from "../components/News/NewsPreview";
import Newsletter from "../components/Newsletter/Newsletter";
import Practices from "../components/Practices";
import DefaultLayout from "../layouts/DefaultLayout";

let client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "article",
  });

  return {
    props: {
      articles: data.items,
    },
  };
}

export default function Home({ articles }) {
  return (
    <div>
      <DefaultLayout>
        <Hero />
        <Feautred />
        <Practices />
        <NewsPreview articles={articles} />
        <Newsletter />
      </DefaultLayout>
    </div>
  );
}
