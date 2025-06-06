import { cn } from "@/utils/cn"
import { Dialog, Transition } from "@headlessui/react"
import { Fragment, ReactNode, useState } from "react"

export default function DialogLayout({
  children,
  toggle,
  setIsOpen,
  isOpen,
  btnClass,
  noToggle,
  noPadding,
  ...props
}: {
  toggle?: ReactNode
  noToggle?: boolean
  children: JSX.Element
  setIsOpen: Function
  isOpen: boolean
  btnClass?: string
  className?: string
  noPadding?: boolean
}) {
  return (
    <>
      {!noToggle && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className={cn(btnClass)}
        >
          {toggle}
        </button>
      )}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-40"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div
              className={cn(
                `flex min-h-full items-center justify-center text-center`,
                !noPadding && "p-4"
              )}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={cn(
                    "transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all",
                    props?.className,
                    !noPadding && "p-6"
                  )}
                >
                  {children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
