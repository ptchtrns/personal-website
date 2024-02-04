import Image from "next/image"
import Skill from "./skill"

export default function Skills () {
  return(
    <>
      <div className="px-8 lg:px-12">
        <h2 className="">Skills</h2>
        <div className="py-8 flex flex-col sm:flex-row">
          <div className="mr-0 sm:mr-12">
            <span className="text-lg sm:text-xl">Experienced</span>
            <div className="my-3">
              <Skill name="HTML" fileName="html-5.svg" fileAlt="HTML5 logo" />
              <Skill name="CSS" fileName="css-3.svg" fileAlt="CSS3 logo" />
              <Skill name="Tailwind" fileName="tailwindcss-icon.svg" fileAlt="TailwindCSS logo" />
              <Skill name="Bootstrap" fileName="bootstrap.svg" fileAlt="Bootstrap logo" />
              <Skill name="Javascript" fileName="javascript.svg" fileAlt="Javascript logo" />
              <Skill name="Node" fileName="nodejs-icon.svg" fileAlt="NodeJS logo" />
            </div>
          </div>
          <div className="mr-0 sm:mr-12">
            <span className="text-lg sm:text-xl">Intermediate</span>
            <div className="my-3">
              <Skill name="MongoDB" fileName="mongodb-icon.svg" fileAlt="MongoDB logo" />
              <Skill name="ExpressJS" fileName="expressjs.svg" fileAlt="ExpressJS logo" />
              <Skill name="SQL" fileName="mysql-icon.svg" fileAlt="MySQL logo" />
              <Skill name="NextJS" fileName="nextjs-icon.svg" fileAlt="MySQL logo" />
              <Skill name="Typescript" fileName="typescript-icon.svg" fileAlt="Typescript logo" />
              <Skill name="Python" fileName="python.svg" fileAlt="Python logo" />
              <Skill name="Figma" fileName="figma.svg" fileAlt="Figma logo" />
            </div>
          </div>
          <div className="mr-0 sm:mr-12">
            <span className="text-lg sm:text-xl">Basic</span>
            <div className="my-3">
              <Skill name="PHP" fileName="php.svg" fileAlt="PHP logo" />
              <Skill name="C#" fileName="c-sharp.svg" fileAlt="C# logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}