'use client'

import React, { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon, XMarkIcon } from '@heroicons/react/20/solid'

export type SelectItem = { label: string; value: string | null }

type SelectProps = {
  items: SelectItem[]
  selectedItem: SelectItem | null
  placeholder: string
  onChangeSelectedItem: (item: SelectItem | null) => void
  emptyItemDisabled?: boolean
}

export default function Select({
  items,
  selectedItem,
  placeholder,
  onChangeSelectedItem,
  emptyItemDisabled,
}: SelectProps) {
  return (
    <div className="">
      <Listbox value={selectedItem} onChange={onChangeSelectedItem}>
        <div className="relative mt-1">
          <Listbox.Button className="block w-full rounded-md border py-2 px-3 text-left border-gray-300 shadow-sm focus:border-gray-600 focus:ring-gray-600 sm:text-sm placeholder:text-gray-400">
            {selectedItem ? (
              <>
                <span className="block truncate">{selectedItem?.label}</span>
                {!emptyItemDisabled && (
                  <button
                    className="absolute inset-y-0 right-6 flex items-center px-1.5"
                    onClick={(e) => {
                      e.stopPropagation()
                      onChangeSelectedItem(null)
                    }}>
                    <XMarkIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </button>
                )}
              </>
            ) : (
              <span className="block truncate text-gray-400">{placeholder}</span>
            )}

            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options className="absolute z-20 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {items.map((item, itemIndex) => (
                <Listbox.Option
                  key={itemIndex}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? 'bg-blue-100 text-gray-900' : 'text-gray-900'
                    }`
                  }
                  value={item}>
                  {({ selected }) => (
                    <>
                      <span
                        className={`flex items-center truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}>
                        {item.label}
                        {selected && (
                          <span className="text-blue-600 ml-2">
                            <CheckIcon className="h-4 w-4" aria-hidden="true" />
                          </span>
                        )}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}
