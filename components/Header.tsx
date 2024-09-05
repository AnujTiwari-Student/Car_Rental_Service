'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import logo from '../assets/logo1.webp'
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Link from 'next/link'
import ContactUsButton from './ContactUsButton'



function Header() {

  const [isOpen , setIsOpen] = useState(false)

  const toggleMenu = ()=>{
    setIsOpen(!isOpen)
  }

  return (
    <div className='mx-4 my-4 md:mx-20 flex flex-row justify-between items-center'>
        <div className='flex space-x-10 items-center'>
          <div className=''>
              <Image src={logo} alt='logo' height={60} width={60} />
          </div>
          <div className='items-center lg:flex hidden '>
            <ul className='flex lg:space-x-10 space-y-6 lg:space-y-0 lg:flex-row flex-col'>
              <li>
                <Link href='/' className='text-lg cursor-pointer flex items-center space-x-1'>
                  <Menubar>
                    <MenubarMenu>
                      <MenubarTrigger className='flex space-x-1 items-center cursor-pointer'>Home</MenubarTrigger>
                    </MenubarMenu>
                  </Menubar>
                </Link>
              </li>
              <li>
                <Link href='#' className='text-lg cursor-pointer flex items-center space-x-1'>
                    <Menubar>
                      <MenubarMenu>
                        <MenubarTrigger className='flex space-x-1 items-center cursor-pointer'>Features</MenubarTrigger>
                        <MenubarContent>
                          <MenubarItem>
                            Typography
                          </MenubarItem>
                          <MenubarSeparator />
                          <MenubarItem>Shortcodes</MenubarItem>
                          <MenubarSeparator />
                          <MenubarItem>Service Plus</MenubarItem>
                          <MenubarSeparator />
                          <MenubarItem>Privacy Policy</MenubarItem>
                        </MenubarContent>
                      </MenubarMenu>
                    </Menubar>
                  </Link>
              </li>
              <li>
                <Link href='/AboutUs' className='text-lg cursor-pointer flex items-center space-x-1'>
                    <Menubar>
                      <MenubarMenu>
                        <MenubarTrigger className='flex space-x-1 items-center cursor-pointer'>About Us</MenubarTrigger>
                      </MenubarMenu>
                    </Menubar>
                </Link>
              </li>
              <li>
                <Link href='#' className='text-lg cursor-pointer'>
                    <Menubar>
                      <MenubarMenu>
                        <MenubarTrigger className='flex space-x-1 items-center cursor-pointer'>Rent a Car</MenubarTrigger>
                      </MenubarMenu>
                    </Menubar>
                </Link>
              </li>
              <li>
                <Link href='/Blogs' className='text-lg cursor-pointer flex items-center space-x-1'>
                    <Menubar>
                      <MenubarMenu>
                        <MenubarTrigger className='flex space-x-1 items-center cursor-pointer'>Blogs</MenubarTrigger>
                      </MenubarMenu>
                    </Menubar>
                </Link>
              </li>
              <li>
                <Link href='/Contact' className='text-lg cursor-pointer'>
                    <Menubar>
                      <MenubarMenu>
                        <MenubarTrigger className='flex space-x-1 items-center cursor-pointer'>Contacts</MenubarTrigger>
                      </MenubarMenu>
                    </Menubar>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='lg:hidden flex items-center'>
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen &&(
          <div className='absolute top-20 right-0 bg-white shadow-lg rounded-t-none rounded-lg px-4 w-full flex flex-col justify-center'>
            <ul className='flex lg:space-x-10 space-y-6 lg:space-y-0 lg:flex-row flex-col md:mx-16 z-50'>
              <li>
                <Link href='/' className='text-lg cursor-pointer flex items-center space-x-1'>
                  <Menubar>
                    <MenubarMenu>
                      <MenubarTrigger className='flex space-x-1 items-center cursor-pointer'>Home</MenubarTrigger>
                    </MenubarMenu>
                  </Menubar>
                </Link>
              </li>
              <li>
                <Link href='#' className='text-lg cursor-pointer flex items-center space-x-1'>
                    <Menubar>
                      <MenubarMenu>
                        <MenubarTrigger className='flex space-x-1 items-center cursor-pointer'>Features</MenubarTrigger>
                        <MenubarContent>
                          <MenubarItem>
                            Typography
                          </MenubarItem>
                          <MenubarSeparator />
                          <MenubarItem>Shortcodes</MenubarItem>
                          <MenubarSeparator />
                          <MenubarItem>Service Plus</MenubarItem>
                          <MenubarSeparator />
                          <MenubarItem>Privacy Policy</MenubarItem>
                        </MenubarContent>
                      </MenubarMenu>
                    </Menubar>
                  </Link>
              </li>
              <li>
                <Link href='/AboutUs' className='text-lg cursor-pointer flex items-center space-x-1'>
                    <Menubar>
                      <MenubarMenu>
                        <MenubarTrigger className='flex space-x-1 items-center cursor-pointer'>About Us</MenubarTrigger>
                      </MenubarMenu>
                    </Menubar>
                </Link>
              </li>
              <li>
                <Link href='#' className='text-lg cursor-pointer'>
                    <Menubar>
                      <MenubarMenu>
                        <MenubarTrigger className='flex space-x-1 items-center cursor-pointer'>Rent a Car</MenubarTrigger>
                      </MenubarMenu>
                    </Menubar>
                </Link>
              </li>
              <li>
                <Link href='/Blogs' className='text-lg cursor-pointer flex items-center space-x-1'>
                    <Menubar>
                      <MenubarMenu>  
                          <MenubarTrigger className='flex space-x-1 items-center cursor-pointer'>Blogs</MenubarTrigger>
                      </MenubarMenu>
                    </Menubar>
                </Link>
              </li>
              <li>
                <Link href='/Contact' className='text-lg cursor-pointer'>
                    <Menubar>
                      <MenubarMenu>
                        <MenubarTrigger className='flex space-x-1 items-center cursor-pointer mb-2'>Contacts</MenubarTrigger>
                      </MenubarMenu>
                    </Menubar>
                </Link>
              </li>
          </ul>
        </div>
        )}
        <ContactUsButton title='Find a Car Now' />
    </div>
  )
}

export default Header