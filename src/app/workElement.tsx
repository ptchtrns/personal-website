import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"

interface WorkElementProps {
  img: string;
  href: string;
  title: string;
  text: string;
}

const WorkElement: React.FC<WorkElementProps> = ({ img, href, title, text }) => {
  return (
    <Link href={href} className="mr-12 inline-block work-element">
      <div className="">
        <div className="relative w-[315px] h-[210px] lg:w-[405px] lg:h-[270px] 2xl:w-[540px] 2xl:h-[360px] max-w-full work-element-image">
          <Image fill src={img} alt="Nikolai Zakharov" className="rounded-3xl" />
        </div>
        <div className="w-[315] lg:w-[405px] 2xl:w-[540px] mt-8 max-w-full px-4">
          <span className="text-3xl font-bold work-element-title">{title}</span>
          <p className="font-light text-xl my-4">{text}</p>
          <button className="text-xl font-bold text-blue-800 hover:text-blue-600 transition ease-in-out duration-1000">Demo <FontAwesomeIcon icon={faLink} /></button>
        </div>
      </div>
    </Link>
  );
}

export default WorkElement;