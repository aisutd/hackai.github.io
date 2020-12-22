import { FC } from 'react'
import Link from 'next/link'

interface NavbarItemProps {
  text: string
  href?: string
}

export const NavbarItem: FC<NavbarItemProps> = ({ text, href }: NavbarItemProps) => {
  const link = (
    <a className='link cursor-pointer font-medium text-xl text-wisteria hover:text-gray-200'>
      {text}
    </a>
  )
  return href ? <Link href={href}>{link}</Link> : link
}

const Navbar: FC = () => {
  return (
    <div id='navbar' className='py-6 w-full flex items-center justify-center'>
      <div
        className='w-full sm:w-full md:w-full lg:w-2/3 xl:w-3/10 flex flex-wrap items-center justify-between px-8'
        style={{ maxWidth: '800px' }}>
        <NavbarItem text='Home' href='/' />
        <NavbarItem text='Interest Form' href='//form.typeform.com/to/NJCsokJY' />
        <NavbarItem text='Past Sponsors' href='#past-sponsors' />
        {/* <NavbarItem text='Schedule' href='/' /> */}
        <NavbarItem text='FAQs' href='#faqs' />
      </div>
    </div>
  )
}

export default Navbar
