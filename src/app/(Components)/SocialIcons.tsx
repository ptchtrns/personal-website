import Link from "next/link"
import Image from "next/image"

export default function SocialIcons () {
  return(
    <>
      <Link href="https://github.com/ptchtrns" target="_blank" className="inline-block opacity-80 hover:opacity-90 mr-2"><Image src="/images/github.svg" height={23} width={23} alt="Github icon" className="dark:invert" /></Link>
      <Link href="https://www.reddit.com/user/ptchtrns" target="_blank" className="inline-block opacity-80 hover:opacity-90 mr-2"><Image src="/images/reddit.svg" height={23} width={23} alt="Reddit icon" className="dark:invert" /></Link>
    </>
  )
}