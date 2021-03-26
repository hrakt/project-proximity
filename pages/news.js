import Banner from "../components/Banner";
import DefaultLayout from "../layouts/DefaultLayout";
import NewsPreview from "../components/News/NewsPreview";
import Newsletter from "../components/Newsletter/Newsletter";

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

export default function News({ articles }) {
  return (
    <div>
      <DefaultLayout>
        <Banner header="News" />
        <NewsPreview articles={articles} />
        <Newsletter />
      </DefaultLayout>
    </div>
  );
}
