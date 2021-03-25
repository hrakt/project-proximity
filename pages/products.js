import Banner from "../components/Banner";
import Overview from "../components/Products";
import DefaultLayout from "../layouts/DefaultLayout";
import Newsletter from "../components/Newsletter/Newsletter";

export default function Products() {
  return (
    <div>
      <DefaultLayout>
        <Banner header="Products" />
        <Overview />
        <Newsletter />
      </DefaultLayout>
    </div>
  );
}
