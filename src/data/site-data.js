const yearsInWebDev = () => {
  const started = 2014
  const current = new Date().getFullYear()
  return current - started
}

const siteData = {
  title: 'Kendall Whitman',
  subtitle: 'Front End Developer',
  description: `Hi! I'm Kendall, a Front End Developer with ${yearsInWebDev()} years of experience in a wide range of disciplines.`,
  email: 'kendallwhitman@gmail.com',
  resumes: [
    {
      link: 'https://next.thewhitmans.cloud/index.php/s/qyARtBYmGK4srcz/download',
      name: 'PDF',
    },
    {
      link: 'https://next.thewhitmans.cloud/index.php/s/nrDsDTBYaqEtTQD/download',
      name: 'Word',
    },
    {
      link: 'https://next.thewhitmans.cloud/index.php/s/32PgrfkNcP8KfB8/download',
      name: 'Text',
    },
  ]
}

export default siteData
