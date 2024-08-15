import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className="flex flex-col justify-between min-h-screen p-24 ps-32 pe-32">
      <nav>
        <p>Example navbar here</p>
      </nav>
      <div className="flex flex-col">
        <h1 className="pb-4 leading-loose text-5xl font-bold bg-gradient-to-r from-blue-400 to-gray-100 bg-clip-text text-transparent">
          OpenPolyDropout
        </h1>
        <div className="flex space-x-4">
          <Button variant={"default"}>Get started</Button>
          <Button variant={"secondary"}>Learn More</Button>
        </div>
      </div>
      <div className="flex flex-col text-gray-400 space-y-6 items-center">
        <p>Scroll for more</p>
        <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </main>
  );
}
