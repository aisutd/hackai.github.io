import { FC } from 'react'
import Link from 'next/link'

interface NavbarItemProps {
  text: string
  href?: string
}

export const NavbarItem: FC<NavbarItemProps> = ({ text, href }: NavbarItemProps) => {
  const link = (
    <a className='link cursor-pointer font-medium text-xl text-gray-400 hover:text-gray-200'>
      {text}
    </a>
  )
  return href ? <Link href={href}>{link}</Link> : link
}

const Navbar: FC = () => {
  return (
    <div
      id='navbar'
      className='py-6 w-full flex items-center justify-center fixed bg-gunmetal bg-opacity-80 top-0 z-50'>
      <div
        className='w-full sm:w-full md:w-full lg:w-2/3 xl:w-3/10 flex flex-wrap items-center justify-between px-8'
        style={{ maxWidth: '800px' }}>
        <NavbarItem text='Home' href='/' />
        <NavbarItem text='Interest Form' href='/' />
        <NavbarItem text='Schedule' href='/' />
        <NavbarItem text='FAQs' href='/' />
      </div>
    </div>
  )
}

export default Navbar
