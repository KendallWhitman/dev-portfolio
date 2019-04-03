import Airplane from '../images/airplane.svg'

const ProjectData = [
  {
    icon: Airplane,
    name: `American Sign Language API`,
    description: `
      My wife and I started learning American Sign Language in late 2018. We relied on free, online resources for learning new signs, but the interfaces were a bit dated. I thought I could pull from an open API and create a more streamlined front end for learning. Unfortunately I couldn't find any open (or closed for that matter) APIs regarding American Sign Language. So...I decided to build one. The goal is to create an application where users, much more knowledgable than I, can record themselves performing a sign and submit it to be included in the API. It's still early days, but it's definitely exciting!
    `,
    links: [
      {
        name: 'Front End',
        link: 'https://asl.thewhitmans.cloud'
      },
      {
        name: 'API',
        link: 'https://aslapi.thewhitmans.cloud/api/signs/'
      }
    ],
  },
]

export default ProjectData
