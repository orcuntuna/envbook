import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useTranslation } from 'react-i18next'

type ConfirmModalType = 'SUCCESS' | 'INFO' | 'DANGER'

type ConfirmModalProps = {
  isOpen: boolean
  onCloseModal: () => void
  onDoneModal: () => void
  type: ConfirmModalType
  title: string
  content: string
  confirmButtonText?: string
}

export default function ConfirmModal({
  isOpen,
  onCloseModal,
  onDoneModal,
  type,
  title,
  content,
  confirmButtonText,
}: ConfirmModalProps) {
  let color = 'gray'

  if (type === 'SUCCESS') {
    color = 'green'
  } else if (type === 'INFO') {
    color = 'blue'
  } else if (type === 'DANGER') {
    color = 'red'
  }

  const { t } = useTranslation()

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
                  {title}
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">{content}</p>
                </div>

                <div className="mt-6 flex items-center space-x-2">
                  <button
                    type="button"
                    className={`inline-flex justify-center rounded-md border border-transparent bg-${color}-600 px-4 py-2 text-sm font-medium text-white hover:bg-${color}-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-${color}-500 focus-visible:ring-offset-2`}
                    onClick={onDoneModal}>
                    {confirmButtonText ? confirmButtonText : t('common.confirm')}
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
