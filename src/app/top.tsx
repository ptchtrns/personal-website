import Link from 'next/link'

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
            <h3 className="mb-2">Design</h3>
            <p className="text-lg md:text-xl font-light">I plan and design websites, so that they look neat and are easy to use.</p>
          </div>
        </li>
        <li className="mb-4 flex items-start w-full md:w-1/2 pr-8">
          <FontAwesomeIcon icon={faPlus} className="text-neutral-700 mr-4 mt-2" />
          <div>
            <h3 className="mb-2">Software development</h3>
            <p className="text-lg md:text-xl font-light">I write working and maintainable using best practices.</p>
          </div>
        </li>
        <li className="mb-4 flex items-start w-full md:w-1/2 pr-8">
          <FontAwesomeIcon icon={faPlus} className="text-neutral-700 mr-4 mt-2" />
          <div>
            <h3 className="mb-2">Other things</h3>
            <p className="text-lg md:text-xl font-light">I&#x2019;m always happy to provide my assistance in other things!</p>
          </div>
        </li>
      </ul>
      <Link href="" className="btn btn-main btn-green mt-6 mb-12">Send me a message</Link>
    </div>
  )
}