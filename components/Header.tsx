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



function Header() {

  const [isOpen , setIsOpen] = useState(false)

  const toggleMenu = ()=>{
    setIsOpen(!isOpen)
  }

  return (
    <div className='mx-4 my-4 md:mx-20 flex flex-row justify-between lg:justify-around items-center'>
        <div className='mr-8'>
            <Image src={logo} alt='logo' height={150} width={150} />
        </div>
        <div className='items-center lg:flex hidden '>
          <ul className='flex lg:space-x-10 space-y-6 lg:space-y-0 lg:flex-row flex-col'>
            <li>
              <a href='#' className='text-lg cursor-pointer flex items-center space-x-1'>
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger className='flex space-x-1 items-center cursor-pointer'>Home</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        Home Car 1
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Home Car 2</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Home-Boxed</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Home Bicycle</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Home Scooter</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Home Kayak</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Home Yatch</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </a>
            </li>
            <li>
              <a href='#' className='text-lg cursor-pointer flex items-center space-x-1'>
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
                </a>
            </li>
            <li>
              <a href='#' className='text-lg cursor-pointer flex items-center space-x-1'>
                  <Menubar>
                    <MenubarMenu>
                      <MenubarTrigger className='flex space-x-1 items-center cursor-pointer'>About Us</MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem>Shop</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Our Features</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Our Benefits</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Testimonials</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Gallery</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>FAQs</MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
              </a>
            </li>
            <li>
              <a href='#' className='text-lg cursor-pointer'>
                  <Menubar>
                    <MenubarMenu>
                      <MenubarTrigger className='flex space-x-1 items-center cursor-pointer'>Rent a Car</MenubarTrigger>
                    </MenubarMenu>
                  </Menubar>
              </a>
            </li>
            <li>
              <a href='#' className='text-lg cursor-pointer flex items-center space-x-1'>
                  <Menubar>
                    <MenubarMenu>
                      <MenubarTrigger className='flex space-x-1 items-center cursor-pointer'>News</MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem>All Posts</MenubarItem>
                        <MenubarSeparator />
                          <MenubarSub>
                            <MenubarSubTrigger className='flex space-x-2 items-center'>Classic Style</MenubarSubTrigger>
                            <MenubarSubContent>
                              <MenubarItem>2 Columns</MenubarItem>
                              <MenubarItem>3 Columns</MenubarItem>
                            </MenubarSubContent>
                          </MenubarSub>
                        <MenubarSeparator />
                          <MenubarSub>
                            <MenubarSubTrigger className='flex space-x-2 items-center'>Portfolio Style</MenubarSubTrigger>
                            <MenubarSubContent>
                              <MenubarItem>2 Columns</MenubarItem>
                              <MenubarItem>3 Columns</MenubarItem>
                              <MenubarItem>4 Columns</MenubarItem>
                            </MenubarSubContent>
                          </MenubarSub>
                        <MenubarSeparator />
                          <MenubarSub>
                            <MenubarSubTrigger className='flex space-x-2 items-center'>Chess Style</MenubarSubTrigger>
                            <MenubarSubContent>
                              <MenubarItem>1 Columns</MenubarItem>
                              <MenubarItem>2 Columns</MenubarItem>
                              <MenubarItem>3 Columns</MenubarItem>
                            </MenubarSubContent>
                          </MenubarSub>
                        <MenubarSeparator />
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
              </a>
            </li>
            <li>
              <a href='#' className='text-lg cursor-pointer'>
                  <Menubar>
                    <MenubarMenu>
                      <MenubarTrigger className='flex space-x-1 items-center cursor-pointer'>Contacts</MenubarTrigger>
                    </MenubarMenu>
                  </Menubar>
              </a>
            </li>
          </ul>
        </div>
        <div className='lg:hidden flex items-center'>
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen &&(
          <div className='absolute top-16 right-0 bg-white shadow-lg rounded-t-none rounded-lg p-4 w-full flex flex-col justify-center'>
            <ul className='flex lg:space-x-10 space-y-6 lg:space-y-0 lg:flex-row flex-col md:mx-16'>
            <li>
              <a href='#' className='text-lg cursor-pointer flex items-center space-x-1'>
                <Menubar>
                  <MenubarMenu>
                    <MenubarTrigger className='flex space-x-1 items-center cursor-pointer'>Home</MenubarTrigger>
                    <MenubarContent>
                      <MenubarItem>
                        Home Car 1
                      </MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Home Car 2</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Home-Boxed</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Home Bicycle</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Home Scooter</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Home Kayak</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Home Yatch</MenubarItem>
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              </a>
            </li>
            <li>
              <a href='#' className='text-lg cursor-pointer flex items-center space-x-1'>
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
                </a>
            </li>
            <li>
              <a href='#' className='text-lg cursor-pointer flex items-center space-x-1'>
                  <Menubar>
                    <MenubarMenu>
                      <MenubarTrigger className='flex space-x-1 items-center cursor-pointer'>About Us</MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem>Shop</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Our Features</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Our Benefits</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Testimonials</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Gallery</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>FAQs</MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
              </a>
            </li>
            <li>
              <a href='#' className='text-lg cursor-pointer'>
                  <Menubar>
                    <MenubarMenu>
                      <MenubarTrigger className='flex space-x-1 items-center cursor-pointer'>Rent a Car</MenubarTrigger>
                    </MenubarMenu>
                  </Menubar>
              </a>
            </li>
            <li>
              <a href='#' className='text-lg cursor-pointer flex items-center space-x-1'>
                  <Menubar>
                    <MenubarMenu>
                      <MenubarTrigger className='flex space-x-1 items-center cursor-pointer'>News</MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem>All Posts</MenubarItem>
                        <MenubarSeparator />
                          <MenubarSub>
                            <MenubarSubTrigger className='flex space-x-2 items-center'>Classic Style</MenubarSubTrigger>
                            <MenubarSubContent>
                              <MenubarItem>2 Columns</MenubarItem>
                              <MenubarItem>3 Columns</MenubarItem>
                            </MenubarSubContent>
                          </MenubarSub>
                        <MenubarSeparator />
                          <MenubarSub>
                            <MenubarSubTrigger className='flex space-x-2 items-center'>Portfolio Style</MenubarSubTrigger>
                            <MenubarSubContent>
                              <MenubarItem>2 Columns</MenubarItem>
                              <MenubarItem>3 Columns</MenubarItem>
                              <MenubarItem>4 Columns</MenubarItem>
                            </MenubarSubContent>
                          </MenubarSub>
                        <MenubarSeparator />
                          <MenubarSub>
                            <MenubarSubTrigger className='flex space-x-2 items-center'>Chess Style</MenubarSubTrigger>
                            <MenubarSubContent>
                              <MenubarItem>1 Columns</MenubarItem>
                              <MenubarItem>2 Columns</MenubarItem>
                              <MenubarItem>3 Columns</MenubarItem>
                            </MenubarSubContent>
                          </MenubarSub>
                        <MenubarSeparator />
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
              </a>
            </li>
            <li>
              <a href='#' className='text-lg cursor-pointer'>
                  <Menubar>
                    <MenubarMenu>
                      <MenubarTrigger className='flex space-x-1 items-center cursor-pointer'>Contacts</MenubarTrigger>
                    </MenubarMenu>
                  </Menubar>
              </a>
            </li>
          </ul>
        </div>
        )}
        <div className='hidden xl:flex'>
          <button className='bg-[#024430] text-[#FFE7BB] px-6 py-3 rounded-lg'>
            Find a Car Now
          </button>
        </div>
    </div>
  )
}

export default Header