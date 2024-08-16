import Image from "next/image";
import { Button } from "@/components/ui/button";

function FAQ({ title = "question", answer = "answer" }) {
  return (
    <div className="flex flex-col py-2">
      <h3 className="text-3xl pb-2">{title}</h3>
      <p>{answer}</p>
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex flex-col justify-around">
      <div className="flex flex-col justify-evenly min-h-screen">
        <div>
          <h1 className="pb-4 leading-loose text-5xl font-bold bg-gradient-to-b from-blue-400 to-gray-100 bg-clip-text text-transparent">
            OpenPolyDropout
          </h1>
          <p>We think dropping out should be as easy and convenient for you as possible.</p>
          <span className="bg-gradient-to-b to-slate-400 from-slate-100 bg-clip-text text-transparent font-bold">Skip filling in your personal data and just DROP OUT!</span>
          <div className="pt-8 flex space-x-4">
            <Button variant={"default"}>Get started</Button>
            <Button variant={"secondary"}>Learn More</Button>
          </div>
        </div>
        <div className="flex flex-col text-gray-400 space-y-6 items-center">
          <p>Scroll for more</p>
          <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
      <div className="flex flex-col w-auto">
        <h2 className="text-4xl pb-4 bg-gradient-to-b from-blue-400 to-gray-100 bg-clip-text text-transparent font-bold">Frequently Asked Questions</h2>
        <div className="flex">
          <div className="flex flex-col w-1/2">
            <FAQ title="asdasd" answer="asdasd" />
            <FAQ title="asdasd" answer="asdasd" />
            <FAQ title="asdasd" answer="asdasd" />
          </div>
          <div className="flex flex-col w-1/2">
            <FAQ title="asdasd" answer="asdasd" />
            <FAQ title="asdasd" answer="asdasd" />
            <FAQ title="asdasd" answer="asdasd" />
          </div>
        </div>
      </div>
    </main>
  );
}
