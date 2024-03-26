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
import { propertyInputs } from "@/utils/schema"
import MemoUploadBox from "./UploadBox"

export default function PropertyDialog({
  setIsOpen,
  isOpen,
  ...props
}: {
  className?: string
  isOpen: boolean
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

  return (
    <>
      <DialogLayout setIsOpen={setIsOpen} isOpen={isOpen} noToggle {...props}>
        <form className="w-screen max-w-2xl">
          <div className="flex gap-2 md:gap-4 border-b pb-3 border-textcolor100 items-center">
            <h3 className="text-fade">Filled By:</h3>
            <h3>Admin 1</h3>
            <h3>Micheal Ibaro</h3>
          </div>
          <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-3">
            {propertyInputs.map((each, i) => (
              <FormField key={i + "field"} {...each} t />
            ))}
            <div className="col-span-full flex flex-wrap gap-x-5 gap-y-2 items-center">
              {_features.map((each) => (
                <div key={each.value} className="flex items-center gap-2">
                  <Checkbox
                    className="h-[1.15rem] w-[1.15rem] min-w-[1.15rem"
                    onClick={() => {}}
                    checked={false}
                  />
                  <span className="pt-2">{features[each.value]}</span>
                  <span className="text-xs">{each.label}</span>
                </div>
              ))}
            </div>

            <div className="col-span-full py-4">
              <MemoUploadBox />
            </div>
          </div>
          <div className="pt-4 px-4 border-t border-textcolor100 flex items-center flex-wrap gap-4 justify-evenly">
            <button type="button" className="outlinebtn">
              Add Unit
            </button>
            <button
              type="button"
              onClick={() => {
                // dispatch(openRespDialog({
                //   title:""
                // }))
              }}
              className="filledbtn"
            >
              Submit
            </button>
          </div>
        </form>
      </DialogLayout>
    </>
  )
}
