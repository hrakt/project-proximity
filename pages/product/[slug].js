import DefaultLayout from "../../layouts/DefaultLayout";
import Product from "../../components/Products/Product";
import Banner from "../../components/Banner";

let client = require("contentful").createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: "product",
  });

  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: true,
  };
}
export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: "product",
    "fields.slug": params.slug,
  });

  return {
    props: {
      product: data.items[0],
    },
  };
}

export default function ProductPage({ product }) {
  return (
    <div>
      <DefaultLayout>
        <Product product={product} />
      </DefaultLayout>
    </div>
  );
}
