'use client'

import ProjectCard from '@/components/ProjectCard'
import { PlusIcon } from '@heroicons/react/24/solid'
import { useTranslation } from 'react-i18next'
import { useModal } from '@/hooks/useModal'
import AddProjectModal from '@/components/modals/AddProjectModal'

const projects = [
  {
    id: 1,
    name: 'My Project Web',
    environments: [
      {
        id: 1,
        slug: 'production',
        filledVariableCount: 8,
        totalVariableCount: 8,
        lastUpdate: new Date('2023-02-07'),
        memberCount: 3,
      },
      {
        id: 2,
        slug: 'staging',
        filledVariableCount: 6,
        totalVariableCount: 8,
        lastUpdate: new Date('2023-02-15'),
        memberCount: 7,
      },
      {
        id: 3,
        slug: 'local',
        filledVariableCount: 0,
        totalVariableCount: 8,
        lastUpdate: new Date('2023-02-09'),
        memberCount: 15,
      },
    ],
    lastUpdate: {
      environmentSlug: 'staging',
      updateDate: new Date('2023-02-15'),
    },
  },
  {
    id: 1,
    name: 'Other Project Mobile',
    environments: [
      {
        id: 1,
        slug: 'distribution',
        filledVariableCount: 8,
        totalVariableCount: 8,
        lastUpdate: new Date('2023-02-10'),
        memberCount: 3,
      },
      {
        id: 2,
        slug: 'internal',
        filledVariableCount: 6,
        totalVariableCount: 8,
        lastUpdate: new Date('2023-02-08'),
        memberCount: 7,
      },
      {
        id: 3,
        slug: 'development',
        filledVariableCount: 0,
        totalVariableCount: 8,
        lastUpdate: new Date('2023-01-20'),
        memberCount: 15,
      },
    ],
    lastUpdate: {
      environmentSlug: 'distribution',
      updateDate: new Date('2023-02-08'),
    },
  },
]

export default function DashboardPage() {
  const { t } = useTranslation()
  const { isOpen: addProjectModalIsOpen, setIsOpen: setAddProjectModalIsOpen } = useModal()
  return (
    <>
      <div className="flex items-center mb-5">
        <div className="text-2xl font-medium text-gray-900">
          {t('common.projects_and_environments')}
        </div>
        <div className="ml-auto">
          <button
            onClick={() => setAddProjectModalIsOpen(true)}
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-3 py-2 text-sm font-normal leading-4 text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <PlusIcon className="-ml-0.5 mr-2 h-4 w-4" />
            {t('common.add_project')}
          </button>
        </div>
      </div>
      <div className="overflow-hidden bg-white border border-gray-100 shadow-sm sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {projects.map((project) => (
            <ProjectCard key={`project-${project.id}`} project={project} />
          ))}
        </ul>
      </div>
      <AddProjectModal
        isOpen={addProjectModalIsOpen}
        onCloseModal={() => setAddProjectModalIsOpen(false)}
        onDoneModal={() => setAddProjectModalIsOpen(false)}
      />
    </>
  )
}
