import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons'
import FooterLinkColumn from './FooterLinkColumn'
import SocialIcon from './SocialIcon'


const FIRST_COL = [
  {
    label: 'Start here',
    link: '/'
  },
  {
    label: 'Login',
    link: '/login'
  },
  {
    label: 'Pricing',
    link: '/pricing'
  },
]

const SECOND_COL = [
  {
    label: 'About us',
    link: '/about'
  },
  {
    label: 'Contact us',
    link: '/contact'
  },
  {
    label: 'Frequently Asked Questions',
    link: '/faq'
  },
]

function Footer() {
  return (
    <footer className="bg-palette-lighter font-primary text-gray-900 pt-10 pb-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-3xl font-semibold mb-4 md:mb-0">
              Get exclusive access now
            </h2>
            <p className="text-lg mt-2 mb-2 font-secondary text-gray-600">
              Officia sint in ea labore occaecat minim duis ut. Elit consectetur nulla laboris incididunt ad esse culpa occaecat sit.
            </p>
            <div className="mt-6 space-x-4">
              <SocialIcon icon={faTwitter} url="https://twitter.com" />
              <SocialIcon icon={faFacebook} url="https://www.facebook.com" />
              <SocialIcon icon={faInstagram} url="https://instagram.com" />
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <FooterLinkColumn
                header="Products"
                items={FIRST_COL}
              />
              <FooterLinkColumn
                header="Resources"
                items={SECOND_COL}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm font-medium py-1 text-gray-600">
              Copyright © {new Date().getFullYear()}{" "}
              <a
                href="/"
                className=""
              >
                {process.env.siteTitle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer