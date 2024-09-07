import CarCardsTab from "@/components/CarCardsTab";
import CarDetailsTab from "@/components/CarDetailsTab";
import CarouselTab from "@/components/CaroselTab";
import CustomerDetails from "@/components/CustomerDetails";
import CustomerSupport from "@/components/CustomerSupport";
import DownloadTab from "@/components/DownloadTab";
import VideoPlayBack from "@/components/VideoPlayBack";
import Image from "next/image";

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
    </main>
  );
}
