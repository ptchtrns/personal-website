import Link from 'next/link'
import Image from 'next/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import WorkElement from './workElement'
import Project from './project'


export default function Projects() {
  return (
    <div className="px-8 lg:px-12">
      <h2 className="">Personal projects</h2>
      <div className="flex flex-col xl:flex-row">
        <Project img="/images/simpictures.svg" href="https://www.google.com/" title="SimPictures" text="Consectetur adipiscing elit, ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Project img="/images/pitchtransition.svg" href="https://www.google.com/" title="pitch transition" text="Consectetur adipiscing elit, ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
      </div>
    </div>
  )
}