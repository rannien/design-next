import React, { ReactNode, useState } from 'react'
import Head from 'next/head'
import MobileMenu from './MobileMenu'
import { MenuItem } from '../interfaces/menu-item'
import DesktopMenu from './DesktopMenu'

type Props = {
  children?: ReactNode
  title?: string
}

const menuItems: MenuItem[] = [
  { url: '/', name: 'Home' },
  { url: '/about', name: 'About' },
  { url: '/events', name: 'Events' },
  { url: '/prices', name: 'Prices' },
  { url: '/subscribe', name: 'Subscribe' },
  { url: '/collection', name: 'Collection' },
]

const currentDate: Date = new Date;

const Layout = ({ children, title = 'Next.JS & Tailwind CSS Playground' }: Props) => {
  const [open, setOpen] = useState(false);

  return <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
          <div>
            <DesktopMenu items={menuItems} open={open} setOpen={setOpen} />

            <MobileMenu items={menuItems} open={open} setOpen={setOpen} />
          </div>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </main>
        </div>
      </div>
      {/* <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" />
      </div> */}
    </div>
    <footer className="text-center text-gray-500">
      <span>{currentDate.toLocaleDateString()}</span>
    </footer>
  </div>
}

export default Layout
