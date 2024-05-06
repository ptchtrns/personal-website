import ProjectElement from './ProjectElement'


export default function Projects() {
  return (
    <div className="px-8 lg:px-12">
      <h2 className="">Personal projects</h2>
      <div className="flex flex-col xl:flex-row">
        <ProjectElement img="/images/simpictures.svg" href="https://www.simpictures.com/" linkText="Read more" title="SimPictures" text="Think of it as the Instagram for virtual aviation enthusiasts, where you can effortlessly share captivating photos, discover breathtaking flights, and establish yourself as a prominent third-party scenery, plane, or addon developer in the flight sim community." />
        <ProjectElement img="/images/pitchtransition.svg" href="https://ffm.bio/ptchtrns" linkText="Enjoy" title="pitch transition" text="Handmade epic electronic music, crafted electronic vibes of transition pitches." />
      </div>
    </div>
  )
}