import SkillElement from "./SkillElement"

export default function Skills () {
  return(
    <>
      <div className="px-8 lg:px-12">
        <h2 className="">Skills</h2>
        <div className="py-8 flex flex-col sm:flex-row">
          <div className="skill-col-width">
            <span className="text-lg sm:text-xl">Experienced</span>
            <div className="my-3">
              <SkillElement name="HTML" fileName="html-5.svg" fileAlt="HTML5 logo" />
              <SkillElement name="CSS" fileName="css-3.svg" fileAlt="CSS3 logo" />
              <SkillElement name="Tailwind" fileName="tailwindcss-icon.svg" fileAlt="TailwindCSS logo" />
              <SkillElement name="Bootstrap" fileName="bootstrap.svg" fileAlt="Bootstrap logo" />
              <SkillElement name="Javascript" fileName="javascript.svg" fileAlt="Javascript logo" />
              <SkillElement name="Node" fileName="nodejs-icon.svg" fileAlt="NodeJS logo" />
            </div>
          </div>
          <div className="skill-col-width">
            <span className="text-lg sm:text-xl">Intermediate</span>
            <div className="my-3">
              <SkillElement name="NextJS" fileName="nextjs-icon.svg" fileAlt="MySQL logo" />
              <SkillElement name="Typescript" fileName="typescript-icon.svg" fileAlt="Typescript logo" />
              <SkillElement name="Python" fileName="python.svg" fileAlt="Python logo" />
              <SkillElement name="MongoDB" fileName="mongodb-icon.svg" fileAlt="MongoDB logo" />
              <SkillElement name="Figma" fileName="figma.svg" fileAlt="Figma logo" />
              <SkillElement name="SQL" fileName="database.svg" fileAlt="SQL logo" />
            </div>
          </div>
          <div className="skill-col-width">
            <span className="text-lg sm:text-xl">Basic</span>
            <div className="my-3">
              <SkillElement name="C#" fileName="c-sharp.svg" fileAlt="C# logo" />
              <SkillElement name="PHP" fileName="php.svg" fileAlt="PHP logo" />
              <SkillElement name="Angular" fileName="angular-icon.svg" fileAlt="Angular logo" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}