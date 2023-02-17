import { CalendarIcon } from '@heroicons/react/20/solid'

export default function ProjectCard({ project }: { project: any }) {
  return (
    <li>
      <div className="px-4 py-6 sm:px-6">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0">
          <div className="flex-1">
            <a href="#" className="truncate text-xl font-medium text-gray-800 hover:text-gray-900">
              {project.name}
            </a>
            <div className="mt-3.5 flex space-x-1.5">
              {project.environments.map((environment: any) => (
                <button
                  key={`environment-${environment.id}`}
                  type="button"
                  className="inline-flex items-center rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2">
                  {environment.slug}
                </button>
              ))}
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
  )
}
