import ProjectCard from '@/components/ProjectCard'
import { PlusIcon } from '@heroicons/react/24/solid'

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
        lastUpdate: new Date(),
        memberCount: 3,
      },
      {
        id: 2,
        slug: 'staging',
        filledVariableCount: 6,
        totalVariableCount: 8,
        lastUpdate: new Date(),
        memberCount: 7,
      },
      {
        id: 3,
        slug: 'local',
        filledVariableCount: 0,
        totalVariableCount: 8,
        lastUpdate: new Date(),
        memberCount: 15,
      },
    ],
    lastUpdate: {
      environmentSlug: 'staging',
      updateDate: new Date(),
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
        lastUpdate: new Date(),
        memberCount: 3,
      },
      {
        id: 2,
        slug: 'internal',
        filledVariableCount: 6,
        totalVariableCount: 8,
        lastUpdate: new Date(),
        memberCount: 7,
      },
      {
        id: 3,
        slug: 'development',
        filledVariableCount: 0,
        totalVariableCount: 8,
        lastUpdate: new Date(),
        memberCount: 15,
      },
    ],
    lastUpdate: {
      environmentSlug: 'distribution',
      updateDate: new Date(),
    },
  },
]

export default function DashboardPage() {
  return (
    <>
      <div className="flex items-center mb-5">
        <div className="text-2xl font-medium text-gray-900">Projects and environments</div>
        <div className="ml-auto">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-3 py-2 text-sm font-normal leading-4 text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            <PlusIcon className="-ml-0.5 mr-2 h-4 w-4" />
            Add Project
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
    </>
  )
}
