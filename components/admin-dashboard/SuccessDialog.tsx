import { ReactNode, useState } from "react"
import DialogLayout from "../DialogLayout"
import { Input } from "@/utils/types"
import FormField from "../inputs/FormField"
import MemoFitness from "../svgs/Fitness"
import MemoFootball from "../svgs/Football"
import MemoPool from "../svgs/Pool"
import MemoWifi from "../svgs/Wifi"
import MemoGarden from "../svgs/Garden"
import MemoPower from "../svgs/Power"
import MemoLaundry from "../svgs/Laundry"
import Checkbox from "../inputs/checkbox"
import MemoSuccessHouse from "../svgs/SuccessHouse"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { closeRespDialog, openRespDialog } from "@/redux/adminSlice"

export default function SuccessDialog({ ...props }: { className?: string }) {
  // let [isOpen, setIsOpen] = useState(false)
  const {
    responseDialog: { open },
  } = useAppSelector((state) => state.admin)
  const dispatch = useAppDispatch()

  return (
    <>
      <DialogLayout
        setIsOpen={(e: boolean) => {
          dispatch(closeRespDialog())
        }}
        isOpen={open ?? false}
        noToggle
        {...props}
      >
        <form className="w-screen max-w-2xl">
          <div className="flex gap-2 md:gap-4 border-b pb-3 border-textcolor100 items-center">
            <h3 className="text-fade">Filled By:</h3>
            <h3>Admin 1</h3>
            <h3>Micheal Ibaro</h3>
          </div>
          <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-3">
            <MemoSuccessHouse />
          </div>
          <div className="pt-4 px-4 border-t border-textcolor100 flex items-center flex-wrap gap-4 justify-evenly">
            <button type="button" className="outlinebtn">
              Add Unit
            </button>
            <button className="filledbtn">Submit</button>
          </div>
        </form>
      </DialogLayout>
    </>
  )
}
