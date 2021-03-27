import { FC } from 'react'
import Link from 'next/link'

interface NavbarItemProps {
  text: string
  href?: string
}

export const NavbarItem: FC<NavbarItemProps> = ({ text, href }: NavbarItemProps) => {
  const link = (
    <div className='link text-center cursor-pointer font-medium text-xl text-wisteria hover:text-black hover:bg-wisteria px-1 py-3'>
      {text}
    </div>
  )
  return href ? <Link href={href}>{link}</Link> : link
}

const Navbar: FC = () => {
  return (
    <div id='navbar' className='w-full flex items-center justify-center bg-black bg-opacity-20'>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 w-full max-w-3xl'>
        <NavbarItem text='Submit project' href='https://utd-hackai-21.devpost.com/' />
        <NavbarItem text='Sponsors' href='/#sponsors' />
        <NavbarItem text='FAQs' href='/#faqs' />
      </div>
    </div>
  )
}

export default Navbar
