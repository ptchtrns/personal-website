import Link from 'next/link'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"
 
export default function NotFound() {
  return (
    <div className="w-full h-screen p-8 lg:p-12 flex flex-col justify-center">
      <h1 className="mb-6">404 Not Found</h1>
      <p className="text-lg md:text-xl font-light mb-6">Could not find requested resource. <Link href="/" className="text-xl font-bold text-blue-800 hover:text-blue-600 dark:text-blue-600 dark:hover:text-blue-400 transition ease-in-out duration-1000">Go Home <FontAwesomeIcon icon={faLink} /></Link>
      </p>
    </div>
  )
}