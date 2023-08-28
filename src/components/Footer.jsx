export const socialLogos = [
    {
        link: 'https://instagram.com',
        src: 'instagram',
        alt: 'instagram'
    },
    {
        link: 'https://github.com',
        src: 'GithHub',
        alt: 'GithHub'
    }
]

const Footer = () => {
  return (
    <footer>
        <ul>
            {socialLogos.map((logo, idx)=>(
                <li key={idx}>
                    <a href={logo.link}>
                        <img src={logo.src} alt={logo.alt} />
                    </a>
                </li>
            ))}
        </ul>
        <p>Create with love by mis huevos <span role="img">🥚🥚</span></p>
    </footer>
  )
}

export default Footer