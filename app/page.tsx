import CarDetailsTab from "@/components/CarDetailsTab";
import CarouselTab from "@/components/CaroselTab";
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
    </main>
  );
}
