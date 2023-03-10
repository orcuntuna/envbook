import { CalendarIcon, PlusIcon } from '@heroicons/react/20/solid'
import { useTranslation } from 'react-i18next'
import { useModal } from '@/hooks/useModal'
import AddEnvironmentModal from '@/components/modals/AddEnvironmentModal'

type ProjectCardProps = {
  project: any
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation()
  const { isOpen: addEnvironmentModalIsOpen, setIsOpen: setAddEnvironmentModalIsOpen } = useModal()
  return (
    <>
      <li>
        <div className="px-4 py-6 sm:px-6">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
            <div className="flex-1">
              <a
                href="#"
                className="truncate text-xl font-medium text-gray-800 hover:text-gray-900">
                {project.name}
              </a>
              <div className="mt-3.5 flex space-x-1.5 items-strech flex-wrap">
                {project.environments.map((environment: any) => (
                  <button
                    key={`environment-${environment.id}`}
                    type="button"
                    className="inline-flex items-center rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2">
                    {environment.slug}
                  </button>
                ))}
                <button
                  onClick={() => setAddEnvironmentModalIsOpen(true)}
                  type="button"
                  className="inline-flex items-center rounded-md border border-gray-300 bg-white px-2.5 text-sm font-medium leading-4 text-blue-500 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  <PlusIcon className="w-4 h-4 leading-4 text-blue-600 mr-1" />
                  <span>{t('common.add_environment')}</span>
                </button>
              </div>
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <div className="space-y-2">
                <div className="flex items-center font-medium text-gray-700">
                  <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0" />
                  <div className="mr-2">Last update</div>
                  <div className="text-xs bg-gray-100 py-1 px-2 text-gray-800 rounded-full">
                    {project.lastUpdate.environmentSlug}
                  </div>
                </div>
                <div className="text-xs md:text-right">
                  {new Date(project.lastUpdate.updateDate).toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <AddEnvironmentModal
        isOpen={addEnvironmentModalIsOpen}
        onCloseModal={() => setAddEnvironmentModalIsOpen(false)}
        onDoneModal={() => setAddEnvironmentModalIsOpen(false)}
      />
    </>
  )
}
