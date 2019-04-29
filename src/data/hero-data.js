const yearsInWebDev = () => {
  const started = 2014
  const current = new Date().getFullYear()
  return current - started
}

const heroData = {
  title: `Hi! I'm Kendall.`,
  message: `A Front End Developer with ${yearsInWebDev()} years of experience in a wide range of disciplines.`,
}

export default heroData
