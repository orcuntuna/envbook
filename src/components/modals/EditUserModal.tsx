import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useTranslation } from 'react-i18next'
import UserPermissionsForm from '@/components/UserPermissionsForm'

type EditUserModalProps = {
  isOpen: boolean
  onCloseModal: () => void
  onDoneModal: () => void
  user: {
    name: string
    permissions: {
      isAdmin: boolean
      projects: Array<{
        id: string
        name: string
        environments: Array<{
          id: string
          name: string
          allowed: boolean
        }>
      }>
    }
  }
}

export default function EditUserModal({
  isOpen,
  onCloseModal,
  onDoneModal,
  user,
}: EditUserModalProps) {
  const { t } = useTranslation()
  const [userName, setUserName] = useState<string>(user.name)

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onCloseModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full max-w-lg transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                  {t('common.edit_user_modal_title')}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{t('common.edit_user_modal_desc')}</p>
                </div>

                <div className="mt-6">
                  <label
                    htmlFor="edit_user_modal-name"
                    className="block text-sm font-medium text-gray-700">
                    {t('common.user_name')}
                    <span className="ml-0.5 text-red-500">*</span>
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="edit_user_modal-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-600 focus:ring-gray-600 sm:text-sm placeholder:text-gray-400"
                      placeholder={t('common.user_name').toString()}
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mt-6">
                  <UserPermissionsForm permissions={user.permissions} />
                </div>

                <div className="mt-6 flex items-center space-x-2">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onCloseModal}>
                    {t('common.save')}
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                    onClick={onCloseModal}>
                    {t('common.cancel')}
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
