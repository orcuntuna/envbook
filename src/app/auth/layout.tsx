import { ReactNode } from 'react'
import { EnvVariables } from '@/config/EnvVariables'
import { System } from '@/config/System'
import { LockClosedIcon } from '@heroicons/react/24/outline'

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full bg-gray-50">
      <body className="h-full">
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-md space-y-8">
            <div>
              <LockClosedIcon className="w-10 h-10 text-gray-900 mx-auto" />
              <h2 className="mt-5 text-center text-3xl font-bold tracking-tight text-gray-900">
                {EnvVariables.public.companyName}
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                <a
                  href={System.projectGithubUrl}
                  className="font-medium text-gray-600 hover:text-gray-500"
                  target="_blank"
                  rel="noreferrer">
                  Environment management tool
                </a>
              </p>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
