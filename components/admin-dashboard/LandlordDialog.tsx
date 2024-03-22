import { ReactNode, useState } from "react"
import DialogLayout from "../DialogLayout"
import { Input } from "@/utils/types"
import FormField from "../FormField"
import PropertyDialog from "./PropertyDialog"

export const landlordInputs: Input[] = [
  {
    label: "Full Names",
    name: "fullname",
    type: "text",
    placeholder: "Full name",
  },
  {
    label: "Contact",
    name: "phone",
    type: "text",
    placeholder: "Contact Number",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "Email Address",
  },
  { label: "Address", name: "adress", type: "text", placeholder: "Address" },
  {
    label: "Start Date",
    name: "start_date",
    type: "date",
    placeholder: "Date",
  },
  {
    label: "Subscription Plan",
    name: "plan",
    type: "select",
    options: [
      { label: "Free Plan $0", value: "1" },
      { label: "Brinze Plan $25", value: "2" },
    ],
    placeholder: "Plan",
  },
]

export default function LandlordDialog({ toggle }: { toggle: ReactNode }) {
  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
    setIsOpen(false)
  }

  const [propertyDialog, setPropertyDialog] = useState(false)

  return (
    <>
      <DialogLayout setIsOpen={setIsOpen} isOpen={isOpen} toggle={toggle}>
        <form className="w-screen max-w-[80vw] md:max-w-2xl px-4">
          <div className="flex gap-2 md:gap-4 border-b pb-3 border-[#333436] items-center">
            <h3 className="text-fade">Filled By:</h3>
            <h3>Admin 1</h3>
            <h3>Felix Adegboyega</h3>
          </div>
          <div className="my-4 w-full grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-3">
            {landlordInputs.map((each, i) => (
              <FormField key={i + "field"} {...each} t />
            ))}
          </div>
          <div className="pt-4 px-4 border-t border-[#333436] flex items-center flex-wrap gap-4 justify-evenly">
            <button type="button" className="outlinebtn" onClick={closeModal}>
              Cancel
            </button>
            <button
              type="button"
              className="filledbtn"
              onClick={() => {
                closeModal()
                setPropertyDialog(true)
              }}
            >
              Add Property
            </button>
            {/* <div className="w-full max-w-56">
            </div> */}
          </div>
        </form>
      </DialogLayout>
      <PropertyDialog isOpen={propertyDialog} setIsOpen={setPropertyDialog} />
    </>
  )
}
