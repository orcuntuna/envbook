'use client'

import { useTranslation } from 'react-i18next'
import { useModal } from '@/hooks/useModal'
import AddEnvironmentModal from '@/components/modals/AddEnvironmentModal'
import { CheckIcon } from '@heroicons/react/20/solid'

export default function EnvironmentPage() {
  const { t } = useTranslation()
  const { isOpen: addEnvironmentModalIsOpen, setIsOpen: setAddEnvironmentModalIsOpen } = useModal()

  return (
    <>
      <div className="w-full flex flex-row space-x-10">
        <div className="w-3/12">
          <fieldset>
            <div className="-space-y-px rounded-md bg-white">
              <div className="rounded-tl-md rounded-tr-md relative border pl-4 pr-3 py-2 flex cursor-pointer focus:outline-none hover:bg-gray-50 flex items-center">
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

              <div className="relative border pl-4 pr-3 py-2 flex cursor-pointer focus:outline-none hover:bg-gray-50 flex items-center">
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

              <div className="rounded-bl-md rounded-br-md relative border pl-4 pr-3 py-2 flex cursor-pointer focus:outline-none hover:bg-gray-50 flex items-center">
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
          </fieldset>
          <div className="mt-3">
            <button
              onClick={() => setAddEnvironmentModalIsOpen(true)}
              type="button"
              className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
              {t('common.add_environment')}
            </button>
          </div>
        </div>
        <div className="w-10/12 bg-purple-300 rounded-md p-4">
          collapses (filled and missed variables)
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
