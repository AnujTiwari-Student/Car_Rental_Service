import CarouselTab from "@/components/CaroselTab";
import DownloadTab from "@/components/DownloadTab";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <DownloadTab />
      <CarouselTab />
    </main>
  );
}
