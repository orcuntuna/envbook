import { ChangeEvent, ChangeEventHandler, Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useTranslation } from 'react-i18next'
import Select, { SelectItem } from '@/components/Select'
import { env } from '@headlessui/react/dist/utils/env'

type AddCustomApiKeyModalProps = {
  isOpen: boolean
  onCloseModal: () => void
  onDoneModal: () => void
}

const projects = [
  { value: 'project-1', label: 'My Project Web' },
  { value: 'project-2', label: 'Other Project Mobile' },
]

const environments = [
  { value: 'production', label: 'production' },
  { value: 'staging', label: 'staging' },
  { value: 'local', label: 'local' },
]

enum Scopes {
  READ = 'read',
  WRITE = 'write',
}

export default function AddCustomApiKeyModal({
  isOpen,
  onCloseModal,
  onDoneModal,
}: AddCustomApiKeyModalProps) {
  const { t } = useTranslation()

  const [selectedProject, setSelectedProject] = useState<SelectItem | null>(null)
  const [selectedEnvironmentsIds, setSelectedEnvironmentsIds] = useState<string[]>([])
  const [selectedScopes, setSelectedScopes] = useState<Scopes[]>([])

  const onChangeSelectedProject = (item: SelectItem | null) => {
    setSelectedProject(item)
    setSelectedEnvironmentsIds([])
    setSelectedScopes([])
  }

  const onChangeSelectEnvironment = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    setSelectedEnvironmentsIds((prevState) => {
      if (!e.target.checked && prevState.includes(id)) {
        return prevState.filter((item) => item !== String(id))
      } else if (e.target.checked && !prevState.includes(id)) {
        return [...prevState, id]
      }
      return prevState
    })
  }

  const onChangeSelectedScope = (e: ChangeEvent<HTMLInputElement>, scope: Scopes) => {
    setSelectedScopes((prevState) => {
      if (!e.target.checked && prevState.includes(scope)) {
        return prevState.filter((item) => item !== String(scope))
      } else if (e.target.checked && !prevState.includes(scope)) {
        return [...prevState, scope]
      }
      return prevState
    })
  }

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
                  {t('common.add_custom_api_key_modal_title')}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {t('common.add_custom_api_key_modal_desc')}
                  </p>
                </div>

                <div className="mt-6 space-y-5">
                  <div>
                    <label
                      htmlFor="add_project_modal-name"
                      className="block text-sm font-medium text-gray-700">
                      {t('common.project')}
                      <span className="ml-0.5 text-red-500">*</span>
                    </label>
                    <div className="mt-1">
                      <Select
                        items={projects}
                        selectedItem={selectedProject}
                        placeholder={t('common.choose_project')}
                        onChangeSelectedItem={onChangeSelectedProject}
                      />
                    </div>
                  </div>

                  {selectedProject !== null && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t('common.environments')}
                        <span className="ml-0.5 text-red-500">*</span>
                      </label>
                      <div className="space-y-0.5">
                        {environments.map((environment) => (
                          <div
                            className="relative flex items-start"
                            key={`env-${environment.value}`}>
                            <div className="flex h-6 items-center">
                              <input
                                id={`env-${environment.value}`}
                                type="checkbox"
                                checked={selectedEnvironmentsIds.includes(environment.value)}
                                onChange={(e) => {
                                  onChangeSelectEnvironment(e, environment.value)
                                }}
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                              />
                            </div>
                            <div className="text-sm leading-6">
                              <label
                                htmlFor={`env-${environment.value}`}
                                className="pl-3 font-medium text-gray-900">
                                {environment.label}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProject !== null && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t('common.scopes')}
                        <span className="ml-0.5 text-red-500">*</span>
                      </label>
                      <div className="space-y-0.5">
                        {[Scopes.READ, Scopes.WRITE].map((scope, index) => (
                          <div className="relative flex items-start" key={`scope-${index}`}>
                            <div className="flex h-6 items-center">
                              <input
                                id={`scope-${index}`}
                                type="checkbox"
                                checked={selectedScopes.includes(scope)}
                                onChange={(e) => {
                                  onChangeSelectedScope(e, scope)
                                }}
                                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                              />
                            </div>
                            <div className="text-sm leading-6">
                              <label
                                htmlFor={`scope-${index}`}
                                className="pl-3 font-medium text-gray-900">
                                {scope}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

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
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
