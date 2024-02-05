import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"

interface ShowcaseElementProps {
  img: string;
  href: string;
  title: string;
  text: string;
  linkText: string;
}

const ShowcaseElement: React.FC<ShowcaseElementProps> = ({ img, href, title, text, linkText }) => {
  return (
    <Link href={href} target="_blank" className="mr-12 inline-block work-element" rel="noopener noreferrer">
      <div className="">
        <div className="relative w-[263.25px] h-[175.5px] lg:w-[405px] lg:h-[270px] 2xl:w-[540px] 2xl:h-[360px] max-w-full work-element-image">
          <Image fill src={img} alt="Nikolai Zakharov" className="rounded-lg" />
        </div>
        <div className="w-[263.25px] lg:w-[405px] 2xl:w-[540px] mt-8 max-w-full pr-4">
          <span className="text-xl sm:text-2xl work-element-title">{title}</span>
          <p className="font-light text-lg sm:text-xl my-4">{text}</p>
          <button className="text-xl font-bold text-blue-800 hover:text-blue-600 transition ease-in-out duration-1000">{linkText} <FontAwesomeIcon icon={faLink} /></button>
        </div>
      </div>
    </Link>
  );
}

export default ShowcaseElement;