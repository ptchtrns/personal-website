import Image from "next/image"

interface SkillElementProps {
  name: string;
  fileName: string;
  fileAlt: string;
}

const SkillElement: React.FC<SkillElementProps> = ({name, fileName, fileAlt}) => {
  return(
    <>
      <div className="py-1">
        <Image src={`/images/tech-logos/${fileName}`} height={10} width={15} alt={fileAlt} className="inline-block align-middle h-8" />
        <span className="inline-block align-middle ml-3">{name}</span>
      </div>
    </>
  )
}

export default SkillElement;