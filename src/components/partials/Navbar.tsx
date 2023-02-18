import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  LifebuoyIcon,
  CogIcon,
  ArrowRightOnRectangleIcon,
} from '@heroicons/react/24/outline'
import cn from 'classnames'
import { useTranslation } from 'react-i18next'
import { System } from '@/config/System'
import { EnvVariables } from '@/config/EnvVariables'

import defaultAvatar from '@/assets/images/default-avatar.jpeg'
import Image from 'next/image'

export default function Navbar() {
  const { t } = useTranslation()

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-800">
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <div className="text-xl text-white bg-gray-900 py-0.5 px-2 rounded-sm">
                    {EnvVariables.public.companyName}
                  </div>
                </div>
                <div className="hidden sm:ml-8 sm:flex sm:space-x-6">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-gray-700 px-1 pt-1 text-sm font-medium text-gray-900">
                    {t('common.projects')}
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                    {t('common.api_keys')}
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                    {t('common.members')}
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
                    {t('common.logs')}
                  </a>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <a
                  href={`${System.projectGithubUrl}/issues`}
                  target="_blank"
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2"
                  rel="noreferrer">
                  <LifebuoyIcon className="h-6 w-6" aria-hidden="true" />
                </a>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2">
                      <Image className="h-8 w-8 rounded-full" src={defaultAvatar} alt="user" />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95">
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none font-medium">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={cn(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700 flex items-center',
                            )}>
                            <CogIcon className="w-4 h-4 text-gray-500 mr-2" />
                            {t('common.settings')}
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={cn(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700 flex items-center',
                            )}>
                            <ArrowRightOnRectangleIcon className="w-4 h-4 text-gray-500 mr-2" />
                            {t('auth.sign_out')}
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-gray-800 bg-gray-100 py-2 pl-3 pr-4 text-base font-medium text-gray-900">
                {t('common.projects')}
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-normal text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">
                {t('common.api_keys')}
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-normal text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">
                {t('common.members')}
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-normal text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700">
                {t('common.logs')}
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
