import Image from "next/image";
import Fetch from "./components/Fetch/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Fetch/>
    </main>
  );
}
