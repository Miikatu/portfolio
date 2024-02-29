import './globals.css'
import Navbar from './components/navigation/navbar'
//import Sidebar from './components/navigation/sidebar'
import Headbar from './components/headbar'
import ContentBox from './components/contentBox'
import Welcome from './components/content/welcome'
import Skills from './components/content/skills'
import CardContainer from './components/content/cardContainer'
import LinkContainer from './components/contacts/linkContainer'
export const metadata = {
  // METATAG API
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata
  title: 'Miikatti.js'
}

const programming = ["Java", "Python", "C++", "C"];
const frontEnd = ["React", "Vue", "Tailwind"];
const database = ["SQL", "MySQL", "MongoDB"];
const software = ["Power Bi", "Microsoft 365", "LibreOffice"];

const skills = [programming, frontEnd, database, software]
export default function RootLayout() {
  return (
    <html className="scroll-smooth font-mono" lang="en">
      <body>
        <div >
          <div>
            <Navbar />
            <Welcome />
            <Skills title="Skills" items={skills} />
            <CardContainer titles={software} />
            <LinkContainer />
          </div>
        </div>
      </body>
    </html>
  )
}
