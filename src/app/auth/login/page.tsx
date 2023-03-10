'use client'

import { useTranslation } from 'react-i18next'

export default function LoginPage() {
  const { t } = useTranslation()

  return (
    <form className="mt-8 space-y-6" action="#" method="POST">
      <input type="hidden" name="remember" defaultValue="true" />
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <label htmlFor="email-address" className="sr-only">
            {t('auth.email_address')}
          </label>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
            placeholder={t('auth.email_address').toString()}
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            {t('auth.password')}
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
            placeholder={t('auth.password').toString()}
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="remember-me"
            name="remember-me"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-gray-800 focus:ring-gray-500"
          />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-800">
            {t('auth.remember_me')}
          </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-gray-700 hover:text-gray-600">
            {t('auth.forgot_password')}
          </a>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-gray-800 py-2 px-4 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
          {t('auth.sign_in')}
        </button>
      </div>
    </form>
  )
}
