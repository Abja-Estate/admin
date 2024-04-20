import { cn } from "@/utils/cn"
import { Fragment, ReactNode, useState } from "react"
import { EyeIcon, EyeSlashIcon } from "../svgs"
import { Listbox, Transition } from "@headlessui/react"

interface Desc {
  disabled?: boolean
  type?: "select" | string
  label?: string
  options?: any[]
  placeholder?: string
  absoluteEl?: JSX.Element
  name: string
  min?: string | number
  formik?: any
  t?: boolean
  inputProps?: React.HTMLAttributes<HTMLElement>
  autocomplete?: boolean
  custom?: JSX.Element
  value?: string | number
  icon?: JSX.Element
  suffix?: JSX.Element
  className?: string
}

const FormField = ({ autocomplete = true, inputProps, ...props }: Desc) => {
  const [type, setType] = useState(props.type)
  const [selected, setSelected] = useState<string | number | null>(null)

  return (
    <fieldset
      className={cn(
        !props.t ? "flex flex-col" : "flex flex-col",
        props.type == "textarea" ? "h-fit" : !props.t ? "h-16" : "h-20",
        props.className
      )}
    >
      <label
        className={cn(
          !props.t ? "inline-block text-primary font-medium mb-3" : "text-fade"
        )}
      >
        {props.label}
      </label>
      <div
        className={cn(
          !props.t
            ? "flex justify-between items-center w-full border-b-[1px] border-b-primary px-[16px] outline-none font-medium gap-3"
            : "flex border-fade mt-2 border min-h-10 rounded-lg items-center gap-2",
          props.type == "textarea" ? "" : !props.t ? "h-[42px]" : "h-10"
        )}
      >
        {props.type == "select" ? (
          <>
            <Listbox
              disabled={props.disabled}
              value={props.formik?.values[props.name]}
              name={props.name}
              onChange={(e) => {
                setSelected(e)
                e = { target: { value: e, name: props.name } }
                props.formik?.handleChange(e)
                if (inputProps?.onChange) {
                  inputProps?.onChange(e)
                }
              }}
            >
              <div className={`relative w-full ${props.t ? "pl-208" : ""}`}>
                <Listbox.Button
                  className={`outline-none relative h-full w-full py-2 ${
                    props.t ? "pl-3" : "pl-3"
                  } pr-10 text-left`}
                >
                  {!selected &&
                    !props?.options?.find(
                      (each) => each.value == props?.formik?.values[props.name]
                    ) && (
                      <>
                        <span className="flex text-gray-400 items-center gap-2 truncate">
                          Select
                        </span>
                      </>
                    )}
                  {(props?.options?.find(
                    (each) => each.value == props?.formik?.values[props.name]
                  ) ||
                    selected) && (
                    <span
                      className={`flex capitalize items-center gap-2 truncate ${""}`}
                    >
                      {
                        props?.options?.find(
                          (each) =>
                            each.value ==
                            (props?.formik?.values[props.name] || selected)
                        )?.label
                      }
                    </span>
                  )}
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"></span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  // enter="transition ease-out duration-200"
                  // enterFrom="opacity-0"
                  // enterTo="opacity-100"
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-40 my-1 max-h-64 w-full overflowed rounded-md py-1 shadow-lg bg-white border focus:outline-none text-sm">
                    {props?.options &&
                      props?.options?.map((val, idx) => (
                        <Listbox.Option
                          key={idx}
                          value={val.value}
                          // title={val.label}
                          className={({ active }) =>
                            `relative transition-all hover:bg-gray-100 bg-white cursor-pointer select-none ${
                              active ? "text-black" : "text-gray-800"
                            }`
                          }
                        >
                          {({ selected }) => (
                            <span className="flex items-center gap-2 truncate capitalize">
                              <span
                                className={`block truncate py-2 px-4 w-full ${
                                  selected
                                    ? "font-medium bg-gray-200"
                                    : "font-normal"
                                }`}
                              >
                                {val.label}
                              </span>
                            </span>
                          )}
                        </Listbox.Option>
                      ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </>
        ) : props.type == "textarea" ? (
          <textarea
            {...inputProps}
            disabled={props.disabled}
            autoComplete={autocomplete ? "on" : "off"}
            {...(props.min ? { min: props.min } : {})}
            value={props.value ?? props?.formik?.values[props.name]}
            onBlur={() => {
              if (props.formik) {
                props.formik.handleBlur
              }
            }}
            onChange={
              props.formik ? props.formik.handleChange : inputProps?.onChange
            }
            name={props.name}
            placeholder={props.placeholder ?? ""}
            rows={3}
            className={cn(
              !props.t
                ? "w-full outline-none py-1"
                : "w-full h-full outline-none rounded-lg px-3",
              !props.value && !props?.formik?.values[props.name] && "text-fade"
            )}
          ></textarea>
        ) : (
          <input
            {...inputProps}
            disabled={props.disabled}
            autoComplete={autocomplete ? "on" : "off"}
            {...(props.min ? { min: props.min } : {})}
            value={props.value ?? props?.formik?.values[props.name]}
            onBlur={() => {
              if (props.formik) {
                props.formik.handleBlur
              }
            }}
            onChange={
              props.formik ? props.formik.handleChange : inputProps?.onChange
            }
            name={props.name}
            placeholder={props.placeholder ?? ""}
            type={(["phone", "otp"].includes(props.type ?? " ")
              ? "text"
              : type
            )?.toString()}
            className={cn(
              !props.t
                ? "w-full outline-none py-1"
                : "w-full h-full outline-none rounded-lg px-3",
              ((!props.value && !props?.formik?.values[props.name]) ||
                props.disabled) &&
                "text-fade"
            )}
          />
        )}

        {props.suffix}
        {props.type == "password" &&
          (type == "password" ? (
            <button
              className="my-1"
              type="button"
              onClick={() => setType("text")}
            >
              <EyeSlashIcon />
            </button>
          ) : (
            <button
              className="my-1"
              type="button"
              onClick={() => setType("password")}
            >
              <EyeIcon />
            </button>
          ))}
      </div>
      {!props.t ? (
        <>
          {props.formik &&
            props.formik.touched[props.name] &&
            props?.formik.errors[props.name] && (
              <div className="px-4 pt-0.5 text-[#D90001] text-xs">
                {props?.formik.errors[props.name] as ReactNode}{" "}
              </div>
            )}
        </>
      ) : (
        <>
          {props.formik &&
            props.formik.touched[props.name] &&
            props?.formik.errors[props.name] && (
              <small className="text-red-600 text-sm block">
                {props?.formik.errors[props.name] as ReactNode}
              </small>
            )}
        </>
      )}
    </fieldset>
  )
}

export default FormField
