import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { TextField } from "@mui/material";
import {Link, Outlet} from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Jobs from "../../Pages/Jobs/Jobs";
import BeAWorker from "../../Pages/BeAWorker/BeAWorker";
import Search from "../../Pages/Search/Search";


const navigation = [
    { name: 'WorkHub', href: '/home', current: false },
    { name: 'Jobs', href: '/jobs', current: false },
    { name: 'Be A Worker', href: '/beAworker', current: false },
  ]

const navigationRight = [
  { name: 'Sign Up', href: '/register', current: false},
  { name: 'Login', href: '/login', current: false},
]
  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }

const Navbar=()=>{
  
    return(
      <Disclosure as="nav" className="bg-white max-w-screen m-auto">
      {({ open }) => (
        <>
          <div className="bg-blue-700 max-w-screen px-6 m-auto sticky z-10 top-0">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">  
                  {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                      
                    ))}
                    <SearchBar/>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="flex space-x-4">
                    {navigationRight.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                      
                    ))}
                  </div>
              </div>
            </div>
          </div>          
          <Outlet/>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
      
    </Disclosure>
    );
}

export default Navbar;