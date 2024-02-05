import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"

export default function Top () {
  return (
    <div className="top overflow-hidden relative w-full xl:w-3/4 3xl:w-1/2 relative overflow-visible px-8 lg:px-12">
      <h1 className="mb-8">I design and turn your dream websites into reality</h1>
      <ul className="flex flex-wrap">
        <li className="mb-4 flex items-start w-full md:w-1/2 pr-8">
          <FontAwesomeIcon icon={faPlus} className="text-neutral-700 mr-4 mt-2" />
          <div>
            <h3 className="mb-2">Web Design & Development</h3>
            <p className="text-lg md:text-xl font-light">I design and turn your dream websites into reality. From concept to execution, your digital presence is crafted with precision and creativity.</p>
          </div>
        </li>
        <li className="mb-4 flex items-start w-full md:w-1/2 pr-8">
          <FontAwesomeIcon icon={faPlus} className="text-neutral-700 mr-4 mt-2" />
          <div>
            <h3 className="mb-2">Software Development</h3>
            <p className="text-lg md:text-xl font-light">Crafting custom apps that are strong and adaptable, designed specifically for you.</p>
          </div>
        </li>
        <li className="mb-4 flex items-start w-full md:w-1/2 pr-8">
          <FontAwesomeIcon icon={faPlus} className="text-neutral-700 mr-4 mt-2" />
          <div>
            <h3 className="mb-2">Music Production</h3>
            <p className="text-lg md:text-xl font-light">Dive into the world of electronic music. I create captivating tunes for your enjoyment.</p>
          </div>
        </li>
      </ul>
      <Link href="#contact" className="btn btn-main btn-green mt-6 mb-6">Send me a message</Link>
      <div className="mb-12">
        <Link href="https://github.com/ptchtrns" target="_blank" className="inline-block opacity-80 hover:opacity-90 mr-2"><Image src="/images/github.svg" height={23} width={23} alt="Github icon" /></Link>
        <Link href="https://www.reddit.com/user/ptchtrns" target="_blank" className="inline-block opacity-80 hover:opacity-90 mr-2"><Image src="/images/reddit.svg" height={23} width={23} alt="Reddit icon" /></Link>
      </div>
    </div>
  )
}