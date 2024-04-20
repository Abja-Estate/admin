import DialogLayout from "../DialogLayout"
import FormField from "../inputs/FormField"
import MemoFitness from "../svgs/Fitness"
import MemoFootball from "../svgs/Football"
import MemoPool from "../svgs/Pool"
import MemoWifi from "../svgs/Wifi"
import MemoGarden from "../svgs/Garden"
import MemoPower from "../svgs/Power"
import MemoLaundry from "../svgs/Laundry"
import Checkbox from "../inputs/checkbox"
import { useAppDispatch } from "@/redux/hooks"
import { addRequestInputs, propertyInputs } from "@/utils/schema"
import MemoUploadBox from "./UploadBox"
import StatusBadge from "./StatusBadge"
import MemoPriorityBadge from "./PriorityBadge"

export default function AddRequestDialog({
  setIsOpen,
  isOpen,
  ...props
}: {
  className?: string
  isOpen: boolean
  request?: any
  setIsOpen: Function
}) {
  const dispatch = useAppDispatch()
  // let [isOpen, setIsOpen] = useState(false)

  // function closeModal() {
  //   setIsOpen(false)
  // }

  const features: any = {
    fitness: <MemoFitness />,
    football: <MemoFootball />,
    pool: <MemoPool />,
    wifi: <MemoWifi />,
    garden: <MemoGarden />,
    power: <MemoPower />,
    laundry: <MemoLaundry />,
  }

  const _features = [
    { value: "football", label: "Football" },
    { value: "wifi", label: "Wi Fi" },
    { value: "pool", label: "Pool" },
    { value: "garden", label: "Garden" },
    { value: "power", label: "24 hrs Power" },
    { value: "fitness", label: "Fitness" },
    { value: "laundry", label: "Laundry" },
  ]

  const getProps = (name: string) => {
    return (
      addRequestInputs.find((each) => each.name == name) ?? addRequestInputs[0]
    )
  }
  return (
    <>
      <DialogLayout setIsOpen={setIsOpen} isOpen={isOpen} noToggle {...props}>
        <form className="w-screen max-w-2xl">
          <div className="flex gap-2 md:gap-4 border-b pb-3 border-textcolor100 items-center">
            <h3 className="text-fade">Request ID:</h3>
            <h3>99807879</h3>
          </div>
          <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-3">
            <FormField {...getProps("landlord")} t />
            <FormField {...getProps("landlord_contact")} t />
            <FormField {...getProps("tenant")} t />
            <FormField {...getProps("tenant_contact")} t />
            <FormField {...getProps("service_type")} t />
            <FormField
              {...getProps("priority")}
              t
              options={[
                {
                  label: <MemoPriorityBadge status="High Priority" />,
                  value: "High Priority",
                },
                {
                  label: <MemoPriorityBadge status="Medium Priority" />,
                  value: "Medium Priority",
                },
                {
                  label: <MemoPriorityBadge status="Low Priority" />,
                  value: "Low Priority",
                },
              ]}
            />
            <FormField {...getProps("start_date")} t />
            <FormField {...getProps("due_date")} t />
            <FormField {...getProps("address")} t className="col-span-full" />
            <FormField
              {...getProps("description")}
              t
              className="col-span-full"
            />
          </div>
          <div className="pt-4 border-t border-textcolor100 flex items-center flex-wrap gap-4 justify-end">
            <button
              type="button"
              onClick={() => {
                // dispatch(openRespDialog({
                //   title:""
                // }))
              }}
              className="filledbtn"
            >
              Assign Service Personnel
            </button>
          </div>
        </form>
      </DialogLayout>
    </>
  )
}
