import { cn } from "@/utils/cn"
import { Menu, Transition } from "@headlessui/react"
import { Fragment } from "react"
import { AnyObject } from "yup"

interface Props {
  triggerEl: JSX.Element
  disabled?: boolean
  yPosition?: "left" | "right"
  items: {
    icon?: JSX.Element | string
    label: JSX.Element | string
    onClick?: (val?: AnyObject) => void
  }[]
  itemClassName?: string
  className?: string
}

export default function MenuLayout(props: Props) {
  return (
    <div className="relative">
      <Menu as="div" className=" inline-block text-left">
        <Menu.Button
          disabled={props.disabled}
          className="inline-flex w-full justify-center text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-prmorange rounded-md"
        >
          {props.triggerEl}
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={cn(
              "absolute z-20 hover:bg-slate-50 min-w-[7rem] divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none w-max",
              props.yPosition == "left"
                ? "left-0 origin-top-left"
                : "right-0 origin-top-right",
              props.className
            )}
          >
            <div className="px-1 py-1 ">
              {props.items.map((each, i) => (
                <Menu.Item key={i}>
                  {({ active }) => (
                    <button
                      onClick={each.onClick}
                      className={cn(
                        "text-gray-700 hover:text-black transition group gap-2 flex w-full items-center rounded-md px-2 py-2 text-sm",
                        active ? "bg-gray-200" : "text-gray-900",
                        props.itemClassName
                      )}
                    >
                      {each.icon}
                      {each.label}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}
