import Banner from "../components/Banner";
import Overiew from "../components/Products/Overiew";
import DefaultLayout from "../layouts/DefaultLayout";
import Newsletter from "../components/Newsletter/Newsletter";

let client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: "product",
  });

  return {
    props: {
      products: data.items,
    },
  };
}

export default function Products({ products }) {
  return (
    <div>
      <DefaultLayout>
        <Banner header="Products" />
        <Overiew products={products} />
        <Newsletter />
      </DefaultLayout>
    </div>
  );
}
