import React from 'react';
import Image from 'next/image';
import TPLogo from '/public/tplogo.svg';
import NYPLogo from '/public/nyplogo.svg';
import SPLogo from '/public/splogo.svg'
import Link from 'next/link';
export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 flex justify-center w-full">
      <nav
        className="flex flex-row items-center flex-grow max-w-xl px-4 py-3 mx-4 mt-4 border rounded-full shadow-md bg-material/50 backdrop-blur-2xl border-zinc-800">
        <div className="flex-grow"></div>

        <div className="flex justify-center space-x-[0.95rem] py-1.5 px-2.5 mx-0.5 border rounded-full border-zinc-800">
          <Link title="GitHub" href="/dropout/tp" target="_blank"
            className="flex justify-center w-6 h-6 transition-colors duration-100 text-zinc-300 hover:text-white">
            <Image alt="Temasek Polytechnic" src={TPLogo}/>
          </Link>
          <Link title="Twitter" target="_blank" href="/dropout/nyp"
            className="flex justify-center w-6 h-6 transition-colors duration-100 text-zinc-300 hover:text-white">
            <Image alt="Nanyang Polytechnic" src={NYPLogo}/>
          </Link>
          <Link title="Patreon" target="_blank" href="/dropout/sp"
            className="flex justify-center w-6 h-6 p-0.5 transition-colors duration-100 text-zinc-300 hover:text-white">
            <Image alt="Singapore Polytechnic" src={SPLogo}/>
          </Link>
        </div>
      </nav>
    </div>

  )
}
