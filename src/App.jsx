import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTwitch,
  FaSteam,
  FaPlaystation,
} from 'react-icons/fa'

export default function App() {
  const socials = [
    {
      href: 'https://tr.linkedin.com/in/dorukakinci',
      label: 'LinkedIn',
      Icon: FaLinkedin,
    },
    { href: 'https://twitter.com/dorukakinci', label: 'Twitter', Icon: FaTwitter },
    {
      href: 'https://www.instagram.com/dorukakinci/',
      label: 'Instagram',
      Icon: FaInstagram,
    },
    {
      href: 'https://www.youtube.com/user/dorukakinci/',
      label: 'YouTube',
      Icon: FaYoutube,
    },
    {
      href: 'https://www.twitch.tv/dorukakinci/profile',
      label: 'Twitch',
      Icon: FaTwitch,
    },
    {
      href: 'http://steamcommunity.com/id/Faultless',
      label: 'Steam',
      Icon: FaSteam,
    },
    {
      href: 'https://my.playstation.com/Faultless',
      label: 'PlayStation',
      Icon: FaPlaystation,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
      <header className="sticky top-0 bg-white shadow">
        <div className="max-w-4xl mx-auto flex justify-between items-center p-4">
          <span className="font-bold text-xl">Kerim Doruk Akinci</span>
          <nav className="space-x-4">
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>
      <main className="flex-1 max-w-4xl mx-auto p-4 space-y-32">
        <section className="flex flex-col items-center justify-center text-center h-[60vh]" id="hero">
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Kerim Doruk Akinci</h1>
          <p className="text-lg text-gray-600">Full-stack developer building modern web experiences.</p>
        </section>
        <section id="about">
          <h2 className="text-3xl font-semibold mb-4">About</h2>
          <p className="text-gray-700">I enjoy creating fast, accessible and responsive web applications with modern technologies.</p>
        </section>
        <section id="projects">
          <h2 className="text-3xl font-semibold mb-4">Projects</h2>
          <ul className="grid md:grid-cols-2 gap-6">
            <li className="p-4 border rounded-lg shadow-sm bg-white">
              <h3 className="font-semibold">Example Project</h3>
              <p className="text-sm text-gray-600">Replace this section with your real projects.</p>
            </li>
          </ul>
        </section>
        <section id="contact">
          <h2 className="text-3xl font-semibold mb-4">Get in touch</h2>
          <p className="text-gray-700">
            Feel free to reach out via
            {' '}<a href="mailto:kerim@example.com" className="text-blue-600">email</a>.
          </p>
        </section>
      </main>
      <footer className="text-center py-6 text-sm text-gray-500">
        <div className="flex justify-center space-x-6 mb-4">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-600 hover:text-blue-600"
            >
              <Icon />
            </a>
          ))}
        </div>
        <div>© {new Date().getFullYear()} Kerim Doruk Akinci</div>
      </footer>
    </div>
  )
}
