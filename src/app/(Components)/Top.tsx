import Link from 'next/link'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import SocialIcons from './SocialIcons'

export default function Top () {
  return (
    <div className="top overflow-hidden relative w-full xl:w-3/4 3xl:w-1/2 relative overflow-visible px-8 lg:px-12">
      <h1 className="mb-8">Hello, my name is Nikolai</h1>
      <ul className="flex flex-wrap">
        <li className="mb-4 flex items-start w-full md:w-1/2 pr-8">
          <FontAwesomeIcon icon={faPlus} className="text-neutral-700 mr-4 mt-2 dark:invert" />
          <div>
            <h3 className="mb-2">Web Design & Development</h3>
            <p className="text-lg md:text-xl font-light">I design and turn websites into reality, from concept to execution.</p>
          </div>
        </li>
        <li className="mb-4 flex items-start w-full md:w-1/2 pr-8">
          <FontAwesomeIcon icon={faPlus} className="text-neutral-700 mr-4 mt-2 dark:invert" />
          <div>
            <h3 className="mb-2">Software Development</h3>
            <p className="text-lg md:text-xl font-light">Crafting custom applications for wide range of devices.</p>
          </div>
        </li>
      </ul>
      <Link href="#contact" className="btn btn-main btn-green mt-6 mb-6">Send me a message</Link>
      <div className="mb-12">
        <SocialIcons />
      </div>
    </div>
  )
}