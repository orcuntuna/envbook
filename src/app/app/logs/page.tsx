'use client'

import { CheckBadgeIcon } from '@heroicons/react/20/solid'
import { TrashIcon, PencilSquareIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import { useModal } from '@/hooks/useModal'
import EditUserModal from '@/components/modals/EditUserModal'
import ConfirmModal from '@/components/modals/ConfirmModal'
import Select, { SelectItem } from '@/components/Select'
import { useState } from 'react'

const projects = [
  { value: 'project-1', label: 'My Project Web' },
  { value: 'project-2', label: 'Other Project Mobile' },
]

const users = [
  { value: 'user-1', label: 'Orçun Tuna' },
  { value: 'user-2', label: 'John Wick' },
  { value: 'user-2', label: 'Selena Gomez' },
]

const user = {
  name: 'John Wick',
  permissions: {
    isAdmin: false,
    projects: [
      {
        id: 'p1',
        name: 'My Project Web',
        environments: [
          { id: 'e1', name: 'production', allowed: false },
          { id: 'e2', name: 'staging', allowed: true },
          { id: 'e3', name: 'tesing', allowed: true },
        ],
      },
      {
        id: 'p2',
        name: 'Other Project Mobile',
        environments: [
          { id: 'e4', name: 'distribution', allowed: true },
          { id: 'e5', name: 'internal testing', allowed: true },
        ],
      },
    ],
  },
}

const onDateFocus = (e: any) => (e.target.type = 'date')
const onDateBlur = (e: any) => (e.target.type = 'text')

export default function ApiKeysPage() {
  const { t } = useTranslation()
  const { isOpen: editUserModalIsOpen, setIsOpen: setEditUserModalIsOpen } = useModal()
  const { isOpen: deleteUserModalIsOpen, setIsOpen: setDeleteUserModalIsOpen } = useModal()

  const [selectedProject, setSelectedProject] = useState<SelectItem | null>(null)
  const [selectedUser, setSelectedUser] = useState<SelectItem | null>(null)

  return (
    <div>
      <div>
        <div className="flex items-center mb-5">
          <div className="text-2xl font-medium text-gray-900">{t('common.logs')}</div>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-56">
              <Select
                items={projects}
                selectedItem={selectedProject}
                placeholder={t('common.choose_project')}
                onChangeSelectedItem={(project) => setSelectedProject(project)}
              />
            </div>
            <div className="w-56">
              <Select
                items={users}
                selectedItem={selectedUser}
                placeholder={t('common.choose_user')}
                onChangeSelectedItem={(user) => setSelectedUser(user)}
              />
            </div>
          </div>
          <div className="flex items-center">
            <div className="w-40">
              <input
                onFocus={onDateFocus}
                onBlur={onDateBlur}
                type="text"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-600 focus:ring-gray-600 sm:text-sm placeholder:text-gray-400"
                placeholder={t('common.start_date').toString()}
              />
            </div>
            <div className="mx-2 text-gray-500">-</div>
            <div className="w-40">
              <input
                onFocus={onDateFocus}
                onBlur={onDateBlur}
                type="text"
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-600 focus:ring-gray-600 sm:text-sm placeholder:text-gray-400"
                placeholder={t('common.end_date').toString()}
              />
            </div>
            <button
              type="button"
              className="ml-2 inline-flex items-center rounded-md border border-blue-600 bg-blue-600 px-3 py-2 text-sm font-normal leading-4 text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              {t('common.apply')}
            </button>
          </div>
        </div>
        <div className="mt-4 flow-root">
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
                        {t('common.projects')}
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                        {t('common.last_login_date')}
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"></th>
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
                        <div className="inline-flex items-center space-x-1 font-medium text-gray-700">
                          <div className="text-xs bg-gray-100 py-1 px-2 text-gray-800 rounded-full">
                            {t('common.all_projects')}
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        12.02.2023 6:40 PM
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="w-full inline-flex items-center justify-end space-x-1">
                          <button
                            onClick={() => setEditUserModalIsOpen(true)}
                            className="w-8 h-8 bg-gray-100 rounded-md hover:bg-gray-200 flex items-center justify-center text-gray-500">
                            <PencilSquareIcon className="w-5 h-5" />
                          </button>
                          <button
                            onClick={() => setDeleteUserModalIsOpen(true)}
                            className="w-8 h-8 bg-red-100 rounded-md hover:bg-red-200 flex items-center justify-center text-red-500">
                            <TrashIcon className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        Lionel Messi
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        lionel@company.com
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="inline-flex items-center">Member</div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="inline-flex items-center space-x-1 font-medium text-gray-700">
                          <div className="text-xs bg-gray-100 py-1 px-2 text-gray-800 rounded-full">
                            2 projects
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        12.02.2023 6:40 PM
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        <div className="w-full inline-flex items-center justify-end space-x-1">
                          <button
                            onClick={() => setEditUserModalIsOpen(true)}
                            className="w-8 h-8 bg-gray-100 rounded-md hover:bg-gray-200 flex items-center justify-center text-gray-500">
                            <PencilSquareIcon className="w-5 h-5" />
                          </button>
                          <button className="w-8 h-8 bg-red-100 rounded-md hover:bg-red-200 flex items-center justify-center text-red-500">
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
      <EditUserModal
        isOpen={editUserModalIsOpen}
        onCloseModal={() => setEditUserModalIsOpen(false)}
        onDoneModal={() => setEditUserModalIsOpen(false)}
        user={user}
      />
      <ConfirmModal
        isOpen={deleteUserModalIsOpen}
        onCloseModal={() => setDeleteUserModalIsOpen(false)}
        onDoneModal={() => setDeleteUserModalIsOpen(false)}
        type={'DANGER'}
        title={t('common.delete_user')}
        content={t('common.delete_user_message')}
        confirmButtonText={t('common.delete').toString()}
      />
    </div>
  )
}
