import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import WorkElement from './ShowcaseElement'

export default function Header() {
  return (
  <div className="relative w-[150px] h-[150px] 2xl:w-[225px] 2xl:h-[225px] mb-8 mt-12 mx-8 lg:mx-12">
    <Image fill src="/images/me.jpeg" alt="Nikolai Zakharov" className="rounded-full" />
  </div>
  )
}