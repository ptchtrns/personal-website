import Image from 'next/image'
import Link from 'next/link';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLink } from "@fortawesome/free-solid-svg-icons"

interface ProjectElementProps {
  img: string;
  href: string;
  linkText: string;
  title: string;
  text: string;
}

const ProjectElement: React.FC<ProjectElementProps> = ({ img, href, linkText, title, text }) => {
  return(
    <>
      <Link href={href} target="_blank" rel="noopener noreferrer" className="flex flex-1">
        <div className="flex items-top py-8 project-element">
          <div className="flex-none">
            <Image src={img} alt="Nikolai's personal project" width={100} height={100} className="opacity-80 project-element-image w-[50px] md:w-[100px] mt-3" style={{ objectFit: "cover" }} />
          </div>
          <div className="pl-6 md:pl-12 pr-6 sm:pr-24 2xl:pr-48">
            <span className="text-xl sm:text-2xl project-element-title">{title}</span>
            <p className="font-light text-lg sm:text-xl my-2">{text}</p>
            <button className="text-xl font-bold text-blue-800 hover:text-blue-600 transition ease-in-out duration-1000">{linkText} <FontAwesomeIcon icon={faLink} /></button>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ProjectElement;