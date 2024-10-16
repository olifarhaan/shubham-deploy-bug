import Achievements from "../components/Achievements.js";
import ContactUs from "../components/ContactUs.js";
import Footprints from "../components/Footprints.js";
import FrontPage from "../components/Front.js";
import LatestInsights from "../components/LatestInsights.js";
import Offerings from "../components/Offerings.js";
import TrustedClients from "../components/TrustedClients.js";
import WhyChoose from "../components/WhyChoose.js";

function Home() {
  return (
    <div className="Home">
      <FrontPage />
      <Achievements />
      <Offerings />
      <WhyChoose />
      <TrustedClients />
      <Footprints />
      <LatestInsights />
      <ContactUs />
    </div>
  );
}
export default Home;
