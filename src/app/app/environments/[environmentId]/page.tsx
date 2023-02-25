'use client'

import { useTranslation } from 'react-i18next'
import { useModal } from '@/hooks/useModal'
import AddEnvironmentModal from '@/components/modals/AddEnvironmentModal'
import { CheckIcon, ChevronUpIcon, ClipboardDocumentIcon } from '@heroicons/react/20/solid'
import {
  TrashIcon,
  PlusIcon,
  ArrowDownTrayIcon,
  ArrowUpTrayIcon,
} from '@heroicons/react/24/outline'
import { Disclosure } from '@headlessui/react'
import { useState } from 'react'

export default function EnvironmentPage() {
  const { t } = useTranslation()
  const { isOpen: addEnvironmentModalIsOpen, setIsOpen: setAddEnvironmentModalIsOpen } = useModal()

  const [filledVariables, setFilledVariables] = useState<Array<{ key: string; value: string }>>([
    { key: 'NEXT_PUBLIC_API_BASE_URL', value: 'https://api.example.com/v1' },
    { key: 'NEXT_PUBLIC_STRIPE_ID', value: 'fd4b43876adaa576' },
    { key: 'NEXT_PUBLIC_STRIPE_KEY', value: 'e2ff3cfd4b43876adaa5767ce93bf7d3' },
    { key: '', value: '' },
  ])

  const [missingVariables, setMissingVariables] = useState<Array<{ key: string; value: string }>>([
    { key: 'NEXT_PUBLIC_SENTRY_APP_ID', value: '' },
    { key: 'NEXT_PUBLIC_SENTRY_APP_KEY', value: '' },
  ])

  const addFilledVariable = () => {
    setFilledVariables((variables) => [...variables, { key: '', value: '' }])
  }

  const deleteFilledVariable = (index: number) => {
    setFilledVariables((variables) =>
      variables.filter((_, variableIndex) => variableIndex !== index),
    )
  }

  const moveMissingToFilled = (missingIndex: number) => {
    // store variable
    const variable = missingVariables[missingIndex]

    // delete from missing list
    setMissingVariables((variables) =>
      variables.filter((_, variableIndex) => variableIndex !== missingIndex),
    )

    // find a good position in filled list
    let newIndex = filledVariables.length > 0 ? filledVariables.length : 0
    for (let variableIndex in filledVariables) {
      const variable = filledVariables[variableIndex]
      if (variable.key === '') {
        newIndex = Number(variableIndex)
        break
      }
    }

    // move to filled list
    setFilledVariables((variables) => {
      const list = [...variables]
      list.splice(newIndex, 0, variable)
      return list
    })
  }

  return (
    <>
      <div className="w-full flex flex-row space-x-10">
        <div className="w-3/12">
          <div>
            <div className="rounded-md bg-white border overflow-hidden">
              <div className="bg-gray-50 relative border-b pl-4 pr-3 py-2 flex cursor-pointer focus:outline-none hover:bg-gray-50 flex items-center">
                <span className="flex flex-col">
                  <span id="privacy-setting-0-label" className="block text-sm font-medium">
                    production
                  </span>
                  <span id="privacy-setting-0-description" className="block text-sm text-gray-600">
                    .env
                  </span>
                </span>
                <div className="ml-auto">
                  <span className="inline-flex items-center rounded-full border border-gray-300 bg-white px-1.5 py-0.5 text-xs font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50">
                    <CheckIcon className="w-4 h-4 text-green-600" />
                  </span>
                </div>
              </div>

              <div className="relative pl-4 pr-3 py-2 flex border-b cursor-pointer focus:outline-none hover:bg-gray-50 flex items-center">
                <span className="flex flex-col">
                  <span id="privacy-setting-1-label" className="block text-sm font-medium">
                    staging
                  </span>
                  <span id="privacy-setting-1-description" className="block text-sm text-gray-600">
                    .env
                  </span>
                </span>
                <div className="ml-auto">
                  <span className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-xs font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50">
                    3 missing
                  </span>
                </div>
              </div>

              <div className="relative pl-4 pr-3 py-2 flex cursor-pointer focus:outline-none hover:bg-gray-50 flex items-center">
                <span className="flex flex-col">
                  <span id="privacy-setting-2-label" className="block text-sm font-medium">
                    local
                  </span>
                  <span id="privacy-setting-2-description" className="block text-sm text-gray-600">
                    .env.local
                  </span>
                </span>
                <div className="ml-auto">
                  <span className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-xs font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50">
                    8 missing
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-3">
            <button
              onClick={() => setAddEnvironmentModalIsOpen(true)}
              type="button"
              className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              {t('common.add_environment')}
            </button>
          </div>
        </div>
        <div className="w-10/12">
          <div className="flex items-center">
            <button
              type="button"
              className="mr-2 inline-flex items-center rounded-md border border-gray-300 bg-white px-3 h-9 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2">
              <ArrowUpTrayIcon className="-ml-0.5 mr-2 h-4 w-4" />
              {t('common.import_file')}
            </button>
            <button
              type="button"
              className="inline-flex items-center rounded-md border border-gray-300 bg-white px-3 h-9 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2">
              <ArrowDownTrayIcon className="-ml-0.5 mr-2 h-4 w-4" />
              <span className="mr-2">{t('common.download')}</span>
              <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                .env
              </span>
            </button>
            <button
              type="button"
              className="ml-auto inline-flex items-center rounded-md border border-gray-300 bg-white px-3 h-9 text-sm font-medium leading-4 text-blue-600 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2">
              <ClipboardDocumentIcon className="-ml-0.5 mr-2 h-4 w-4" />
              {t('common.save_updated_variables')}
            </button>
          </div>
          <div className="w-full mt-3">
            <Disclosure as="div" defaultOpen={true}>
              {({ open }) => (
                <div className="overflow-hidden bg-white border rounded-md">
                  <Disclosure.Button className="flex w-full justify-between bg-sky-50 px-4 py-2.5 text-left font-medium text-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-sky-500 focus-visible:ring-opacity-75">
                    <span>{t('common.filled_variables')}</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-gray-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-5 py-4 text-sm text-gray-500 border-t">
                    <div className="flex text-sm font-normal text-gray-500">
                      <div className="mr-3 pl-1" style={{ flex: 2 }}>
                        {t('common.key')}
                      </div>
                      <div className="mr-1.5 pl-1" style={{ flex: 3 }}>
                        {t('common.value')}
                      </div>
                      <div className="w-9"></div>
                    </div>
                    <div className="mt-2 space-y-3">
                      {filledVariables.map((variable, variableIndex) => (
                        <div className="flex text-gray-900" key={`filled-${variableIndex}`}>
                          <div className="mr-3" style={{ flex: 2 }}>
                            <input
                              type="text"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-600 focus:ring-gray-600 sm:text-sm placeholder:text-gray-400"
                              placeholder={t('common.key').toString()}
                              value={variable.key}
                            />
                          </div>
                          <div className="mr-1.5" style={{ flex: 3 }}>
                            <input
                              type="text"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-600 focus:ring-gray-600 sm:text-sm placeholder:text-gray-400"
                              placeholder={t('common.value').toString()}
                              value={variable.value}
                            />
                          </div>
                          <div className="w-9 flex self-strech">
                            <button
                              type="button"
                              onClick={() => deleteFilledVariable(variableIndex)}
                              className="w-full self-strech rounded-md hover:bg-gray-100 flex justify-center items-center">
                              <TrashIcon className="w-5 h-5 text-gray-500" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center">
                      <button
                        type="button"
                        onClick={addFilledVariable}
                        className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2">
                        <PlusIcon className="w-4 h-4 mr-1.5" />
                        {t('common.add_variable')}
                      </button>
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            <Disclosure as="div" className="mt-4" defaultOpen={true}>
              {({ open }) => (
                <div className="overflow-hidden bg-white border rounded-md">
                  <Disclosure.Button className="flex w-full justify-between bg-rose-50 px-4 py-2.5 text-left font-medium text-gray-600 focus:outline-none focus-visible:ring focus-visible:ring-rose-500 focus-visible:ring-opacity-75">
                    <span>{t('common.missing_variables')}</span>
                    <ChevronUpIcon
                      className={`${open ? 'rotate-180 transform' : ''} h-5 w-5 text-gray-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-5 py-4 text-sm text-gray-500 border-t">
                    <div className="flex text-sm font-normal text-gray-500">
                      <div className="mr-3 pl-1" style={{ flex: 2 }}>
                        {t('common.key')}
                      </div>
                      <div className="mr-1.5 pl-1" style={{ flex: 3 }}>
                        {t('common.value')}
                      </div>
                      <div className="w-9"></div>
                    </div>
                    <div className="mt-2 space-y-3">
                      {missingVariables.map((variable, variableIndex) => (
                        <div className="flex text-gray-900" key={`filled-${variableIndex}`}>
                          <div className="mr-3" style={{ flex: 2 }}>
                            <input
                              type="text"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-600 focus:ring-gray-600 sm:text-sm placeholder:text-gray-400"
                              placeholder={t('common.key').toString()}
                              defaultValue={variable.key}
                              readOnly={true}
                            />
                          </div>
                          <div className="mr-1.5" style={{ flex: 3 }}>
                            <input
                              type="text"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-600 focus:ring-gray-600 sm:text-sm placeholder:text-gray-400"
                              placeholder={t('common.value').toString()}
                              value={variable.value}
                            />
                          </div>
                          <div className="w-9 flex self-strech">
                            <button
                              type="button"
                              onClick={() => moveMissingToFilled(variableIndex)}
                              className="w-full self-strech rounded-md hover:bg-gray-100 flex justify-center items-center">
                              <CheckIcon className="w-5 h-5 text-gray-500" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
      <AddEnvironmentModal
        isOpen={addEnvironmentModalIsOpen}
        onCloseModal={() => setAddEnvironmentModalIsOpen(false)}
        onDoneModal={() => setAddEnvironmentModalIsOpen(false)}
      />
    </>
  )
}
