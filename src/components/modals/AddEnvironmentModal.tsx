import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useTranslation } from 'react-i18next'
import Select from '@/components/Select'

type AddEnvironmentModalProps = {
  isOpen: boolean
  onCloseModal: () => void
  onDoneModal: () => void
}

const environmentsForClone = [
  { value: 'production', label: 'production' },
  { value: 'staging', label: 'staging' },
  { value: 'local', label: 'local' },
]

export default function AddEnvironmentModal({
  isOpen,
  onCloseModal,
  onDoneModal,
}: AddEnvironmentModalProps) {
  const { t } = useTranslation()

  const [selectedEnvForClone, setSelectedEnvForClone] = useState<any>(null)

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
                  {t('common.add_env_modal_title', { project_name: 'My Project' })}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{t('common.add_env_modal_desc')}</p>
                </div>

                <div className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor="add_env_modal-name"
                      className="block text-sm font-medium text-gray-700">
                      {t('common.env_name')}
                      <span className="ml-0.5 text-red-500">*</span>
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="add_env_modal-name"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-600 focus:ring-gray-600 sm:text-sm placeholder:text-gray-400"
                        placeholder={t('examples.production').toString()}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="add_env_modal-file"
                      className="block text-sm font-medium text-gray-700">
                      {t('common.file_name')}
                      <span className="ml-0.5 text-red-500">*</span>
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="add_env_modal-file"
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-600 focus:ring-gray-600 sm:text-sm placeholder:text-gray-400"
                        placeholder={t('examples.dotenv').toString()}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      {t('common.clone_variables')}
                      <span className="ml-1 text-gray-400 text-xs font-normal">
                        ({t('common.optional')})
                      </span>
                    </label>
                    <Select
                      items={environmentsForClone}
                      selectedItem={selectedEnvForClone}
                      placeholder={t('common.choose_environment_to_clone')}
                      onChangeSelectedItem={(item) => setSelectedEnvForClone(item)}
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center space-x-2">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onCloseModal}>
                    {t('common.add_environment')}
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
