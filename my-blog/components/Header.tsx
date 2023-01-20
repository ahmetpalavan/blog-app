/** @format */

import Image from "next/image";
import Link from "next/link";
import { Chart } from "@devexpress/dx-react-chart-material-ui";

function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
      <div className="flex font items-center space-x-2">
        <Link href="/">
          <Image
            className="rounded-full object-cover"
            src="https://avatars.githubusercontent.com/u/105593137?s=400&u=97c5e25e12a8da3bbe89eaa08f453992cb2f1476&v=4"
            alt="Ahmet Palavan"
            width={50}
            height={50}
          />
        </Link>
        <h1>The PALAVAN</h1>
      </div>
      <div>
        <Link
            className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#f7ab0a] flex items-center text-center rounded-full" 
            href="https://github.com/ahmetpalavan?tab=repositories">
            My Github Project Repositories    
        </Link>
      </div>
    </header>
  );
}

export default Header;
