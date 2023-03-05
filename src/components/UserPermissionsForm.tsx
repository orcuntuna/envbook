import { useTranslation } from 'react-i18next'
import Select, { SelectItem } from '@/components/Select'
import { ChangeEvent, useState } from 'react'
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { GlobeAltIcon } from '@heroicons/react/24/outline'

type UserPermissionsFormProps = {
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

export default function UserPermissionsForm({ permissions }: UserPermissionsFormProps) {
  const { t } = useTranslation()

  const isAdminSelectItems: SelectItem[] = [
    { value: '0', label: t('common.member') },
    { value: '1', label: t('common.admin') },
  ]

  const [isAdminItem, setIsAdminItem] = useState<SelectItem | null>(
    isAdminSelectItems[permissions.isAdmin ? 1 : 0],
  )

  const [selectedEnvironmentsIds, setSelectedEnvironmentsIds] = useState<string[]>(
    permissions.projects.reduce((acc: string[], project) => {
      project.environments.forEach((environment) => {
        if (environment.allowed) {
          acc.push(environment.id)
        }
      })
      return acc
    }, []),
  )

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

  return (
    <>
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">
          {t('common.role')}
          <span className="ml-0.5 text-red-500">*</span>
        </label>
        <div className="mt-1">
          <Select
            items={isAdminSelectItems}
            selectedItem={isAdminItem}
            placeholder={t('common.choose_role')}
            onChangeSelectedItem={setIsAdminItem}
            emptyItemDisabled={true}
          />
        </div>
      </div>
      {isAdminItem && Number(isAdminItem.value) === 0 && (
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            {t('common.permissions')}
            <span className="ml-0.5 text-red-500">*</span>
          </label>
          <div className="mt-1">
            <ul role="list" className="divide-y divide-gray-200 rounded-md border border-gray-200">
              {permissions.projects.map((project) => (
                <li className="py-3 pl-3 pr-4 text-sm" key={`project-${project.id}`}>
                  <div className="flex w-full flex-1 items-center">
                    <GlobeAltIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 w-0 flex-1">{project.name}</span>
                  </div>
                  <div className="mt-3 space-x-4">
                    {project.environments.map((environment) => (
                      <div className="inline-flex items-center" key={`env-${environment.id}`}>
                        <div className="text-sm leading-6">
                          <input
                            id={`env-${environment.id}`}
                            type="checkbox"
                            checked={selectedEnvironmentsIds.includes(environment.id)}
                            onChange={(e) => {
                              onChangeSelectEnvironment(e, environment.id)
                            }}
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600"
                          />
                          <label
                            htmlFor={`env-${environment.id}`}
                            className="pl-2 font-normal text-gray-700">
                            {environment.name}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
