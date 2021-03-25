import Banner from "../components/Banner";
import Newsletter from "../components/Newsletter/Newsletter";
import Practices from "../components/Practices";
import Story from "../components/About/Story";
import DefaultLayout from "../layouts/DefaultLayout";

export default function About() {
  return (
    <div>
      <DefaultLayout>
        <Banner header="About us" />
        <Story />
        <Practices />
        <Newsletter />
      </DefaultLayout>
    </div>
  );
}
