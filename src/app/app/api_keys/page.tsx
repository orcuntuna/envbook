'use client'

import { CheckBadgeIcon } from '@heroicons/react/20/solid'
import { ClipboardIcon, ArrowPathIcon } from '@heroicons/react/24/outline'

export default function ApiKeysPage() {
  return (
    <div>
      <div className="mt-8 flow-root">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                      User Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      User Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Role
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      Last used at
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                      API Key
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
                          className="block w-full pr-20 rounded-md border-gray-300 shadow-sm focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 sm:text-sm"
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
  )
}
