import CarCardsTab from "@/components/CarCardsTab";
import CarDetailsTab from "@/components/CarDetailsTab";
import CarouselTab from "@/components/CaroselTab";
import CustomerDetails from "@/components/CustomerDetails";
import CustomerSupport from "@/components/CustomerSupport";
import DownloadTab from "@/components/DownloadTab";
import Footer from "@/components/Footer";
import NewsLetterComponent from "@/components/NewsLetterComponent";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import VideoPlayBack from "@/components/VideoPlayBack";

export default function Home() {
  return (
    <main>
      <DownloadTab />
      <CarouselTab />
      <VideoPlayBack />
      <CarDetailsTab />
      <CustomerSupport />
      <CustomerDetails />
      <CarCardsTab />
      <NewsLetterComponent />
      <Footer />
      <PrivacyPolicy />
    </main>
  );
}
