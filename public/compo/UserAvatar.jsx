import React from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {
  ArchiveIcon,
  ArrowCircleRightIcon,
  ChevronDownIcon,
  DuplicateIcon,
  HeartIcon,
  PencilAltIcon,
  TrashIcon,
  UserAddIcon,
  UserRemoveIcon,
  UserIcon
} from '@heroicons/react/solid'
import { LogoutIcon } from '@heroicons/react/outline';
import { useAuth } from '../store';
import Router from 'next/router';





export function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  // console.log(color);
  /* eslint-enable no-bitwise */
  return color;
}

// string to color name 

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export const UserAvatar = ({ name = "Meshv" }) => {
  let auth = useAuth();


  function stringToColorName(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "";
    const colorName = [
      "red",
      "orange",
      "yellow",
      "olive",
      "green",
      "teal",
      "blue",
      "violet",
      "purple",
      "pink",
      "brown",
      "grey",
      "black",
    ];
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color = colorName[value % 13];
    }
    console.log(typeof color);
    /* eslint-enable no-bitwise */
    return `bg-${color}-500`;
  }


  function logoutUser() {
    auth.logout();
    Router.push('/')
  }

  return (
    <>

      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button
          // className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          >
            <span className={`inline-flex items-center justify-center h-7 w-7 rounded-full bg-purple-500`} role='button'>
              <span className="text-xs font-medium leading-none text-white">{name.charAt(0)}</span>
            </span>
            {/* <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" /> */}
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none z-10">
            <div className="px-4 py-3">

              <p className="text-sm text-slate-600">Signed in as
                <span className="text-base text-gray-900 truncate font-bold">  {name}</span>
              </p>
            </div>
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'group flex items-center px-4 py-2 text-sm'
                    )}
                  >
                    <UserIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />

                    Account settings
                  </a>
                )}
              </Menu.Item>

            </div>
            <div className="py-1">
              <form method="POST" action="#">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'flex w-full text-left px-4 py-2 text-sm'
                      )}
                      onClick={logoutUser}
                    >
                      <LogoutIcon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                      Sign out
                    </button>
                  )}
                </Menu.Item>
              </form>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>



    </>
  )
}
