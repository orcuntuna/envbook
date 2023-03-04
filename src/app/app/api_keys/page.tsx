'use client'

import { CheckBadgeIcon } from '@heroicons/react/20/solid'
import { ClipboardIcon, ArrowPathIcon, TrashIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/24/solid'
import { useTranslation } from 'react-i18next'
import { useModal } from '@/hooks/useModal'
import AddCustomApiKeyModal from '@/components/modals/AddCustomApiKeyModal'

export default function ApiKeysPage() {
  const { t } = useTranslation()
  const { isOpen: addCustomApiKeyModalIsOpen, setIsOpen: setAddCustomApiKeyModalIsOpen } =
    useModal()

  return (
    <div className="space-y-10">
      <div>
        <div className="flex items-center mb-5">
          <div className="text-2xl font-medium text-gray-900">{t('common.custom_api_keys')}</div>
          <div className="ml-auto">
            <button
              onClick={() => setAddCustomApiKeyModalIsOpen(true)}
              type="button"
              className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-3 py-2 text-sm font-normal leading-4 text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <PlusIcon className="-ml-0.5 mr-2 h-4 w-4" />
              {t('common.add_custom_api_key')}
            </button>
          </div>
        </div>
        <div className="mt-2 flow-root">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        {t('common.project')}
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        {t('common.environments')}
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        {t('common.scopes')}
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        {t('common.last_used_at')}
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        {t('common.api_key')}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        My Project Web
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        production, staging
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="inline-flex items-center space-x-1 font-medium text-gray-700">
                          <div className="text-xs bg-gray-100 py-1 px-2 text-gray-800 rounded-full">
                            read
                          </div>
                          <div className="text-xs bg-gray-100 py-1 px-2 text-gray-800 rounded-full">
                            write
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        12.02.2023 6:40 PM
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="relative w-full">
                          <input
                            type="text"
                            className="block w-full pr-[116px] rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 sm:text-sm"
                            placeholder="you@example.com"
                            defaultValue={'98f54143ab4e86b28c3afee0f50f2f51cfb2ed38'}
                            readOnly={true}
                          />
                          <button className="absolute right-[72px] top-[3px] w-8 h-8 bg-gray-100 rounded-md hover:bg-gray-200 flex items-center justify-center text-gray-500">
                            <ClipboardIcon className="w-5 h-5" />
                          </button>
                          <button className="absolute right-[38px] top-[3px] w-8 h-8 bg-gray-100 rounded-md hover:bg-gray-200 flex items-center justify-center text-gray-500">
                            <ArrowPathIcon className="w-5 h-5" />
                          </button>
                          <button className="absolute right-1 top-[3px] w-8 h-8 bg-red-100 rounded-md hover:bg-red-200 flex items-center justify-center text-red-500">
                            <TrashIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center mb-5">
          <div className="text-2xl font-medium text-gray-900">{t('common.memberss_api_keys')}</div>
        </div>
        <div className="mt-2 flow-root">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                        {t('common.user_name')}
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        {t('common.user_email')}
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        {t('common.role')}
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        {t('common.last_used_at')}
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        {t('common.api_key')}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        John Wick
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        my.email@company.com
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="inline-flex items-center">
                          Admin
                          <CheckBadgeIcon className="w-4 h-4 text-blue-500 ml-1" />
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        12.02.2023 6:40 PM
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="relative w-full">
                          <input
                            type="text"
                            className="block w-full pr-[80px] rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 sm:text-sm"
                            placeholder="you@example.com"
                            defaultValue={'aaf4c61ddcc5e8a2dabede0f3b482cd9aea9434d'}
                            readOnly={true}
                          />
                          <button className="absolute right-[38px] top-[3px] w-8 h-8 bg-gray-100 rounded-md hover:bg-gray-200 flex items-center justify-center text-gray-500">
                            <ClipboardIcon className="w-5 h-5" />
                          </button>
                          <button className="absolute right-1 top-[3px] w-8 h-8 bg-gray-100 rounded-md hover:bg-gray-200 flex items-center justify-center text-gray-500">
                            <ArrowPathIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddCustomApiKeyModal
        isOpen={addCustomApiKeyModalIsOpen}
        onCloseModal={() => setAddCustomApiKeyModalIsOpen(false)}
        onDoneModal={() => setAddCustomApiKeyModalIsOpen(false)}
      />
    </div>
  )
}
