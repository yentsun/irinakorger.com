import { Disclosure, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import NavRightButton from './NavRightButton';


const navigation = [
  { name: 'обо мне', href: '/about' },
  { name: 'ча-во', href: '/faq' },
  { name: 'связаться', href: '/contact' },
  { name: 'цены', href: '/pricing' },
];

function Nav() {
  return (
    <Disclosure as="nav" className="">
      {({ open }) => (
        <>
          <div className="max-w-6xl mx-auto px-2 sm:px-6 lg:px-8 font-primary">
            <div className="relative flex items-center justify-between h-16 sm:h-20">
              <Link className="flex items-center" href="/">
                  <img
                    className="w-2/4"
                    src="/logo-horizontal.svg"
                    alt="logo"
                  />
              </Link>

              <div>
                <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-palette-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="hidden sm:block sm:ml-6">
                    <div className="flex items-center space-x-4 text-sm">
                      {navigation.map((item) => (
                        <Link className="text-gray-600 hover:underline whitespace-nowrap
                                         px-3 py-2 rounded-md font-medium"
                          key={item.name}
                          href={item.href}
                        >

                            {item.name}
                        </Link>
                      ))}
                      <NavRightButton
                        text="войти"
                        layout="desktop"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Transition
            show={open}
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel static className="sm:hidden h-screen">
              <div className="py-4 space-y-1 text-center text-base">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    className='w-full block px-3 py-4 font-medium border-b border-gray-300'
                  >
                    <Link
                      href={item.href}
                      className='text-gray-600 hover:text-palette-dark'

                    >

                        {item.name}
                    </Link>
                  </Disclosure.Button>
                ))}

              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  )
}

export default Nav
