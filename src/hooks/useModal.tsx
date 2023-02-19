import { useState } from 'react'

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const closeModal = () => {
    setIsOpen(false)
  }

  const openModal = () => {
    setIsOpen(true)
  }

  return {
    isOpen,
    setIsOpen,
    closeModal,
    openModal,
  }
}
