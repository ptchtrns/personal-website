import Image from "next/image"

interface SkillProps {
  name: string;
  fileName: string;
  fileAlt: string;
}

const Skill: React.FC<SkillProps> = ({name, fileName, fileAlt}) => {
  return(
    <>
      <div className="py-1">
        <Image src={`/images/tech-logos/${fileName}`} height={10} width={15} alt={fileAlt} className="inline-block align-middle h-8" /> &nbsp;
        <span className="inline-block align-middle">{name}</span>
      </div>
    </>
  )
}

export default Skill