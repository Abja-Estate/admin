import { useDeleteTenantMutation } from "@/redux/endpoints"
import AreYouSure from "../AreYouSure"
import DialogLayout from "../DialogLayout"
import { AreYouSureProps } from "@/utils/types"
import { ReactNode, useState } from "react"
import { AnyObject } from "yup"
import toast from "react-hot-toast"
import StatusBadge from "./StatusBadge"
import Image from "next/image"
import { Tab } from "@headlessui/react"
import { cn } from "@/utils/cn"
import MemoElectrician from "../svgs/Electrician"
import CustomImage from "../CustomImage"
import placeholder from "/public/images/landlord-emoji.svg"
import MemoPlumber from "../svgs/Plumber"
import MemoStructure from "../svgs/Structure"
import MemoRedLocationIcon from "../svgs/RedLocationIcon"
import Features from "../Features"
import MemoFitness from "../svgs/Fitness"
import MemoFootball from "../svgs/Football"
import MemoPool from "../svgs/Pool"
import MemoWifi from "../svgs/Wifi"
import MemoGarden from "../svgs/Garden"
import MemoPower from "../svgs/Power"
import MemoLaundry from "../svgs/Laundry"
import Checkbox from "../checkbox"

const TenantDetailsDialog = ({
  open,
  setOpen,
  tenant,
}: {
  tenant: any
  open: boolean
  setOpen: Function
}) => {
  const services: {
    [k: string]: { component: ReactNode; color: string; iconColor: string }
  } = {
    plumber: {
      component: <MemoPlumber className="w-5 h-5" />,
      color: "#EADAFF",
      iconColor: "#9747FF",
    },
    electrician: {
      component: <MemoElectrician className="w-5 h-5" />,
      color: "#FCEADA",
      iconColor: "#EF9645",
    },
  }
  const [cDIO, setCDIO] = useState<AreYouSureProps>({ status: false })
  const [deleteATenant] = useDeleteTenantMutation()
  const deleteTenantCaution = () => {
    setCDIO({
      status: true,
      data: {},
      type: "deleteUser",
      action: deleteTenant,
      desc: `Are you sure you want to delete this user?`,
    })
  }

  const deleteTenant = async (_tenant: any) => {
    const response: AnyObject = await deleteATenant(_tenant._id)
    if (response.data) {
      // dispatch(
      //   openRespDialog({
      //     self: false,
      //     type: "success",
      //     desc: response.data.message,
      //     title: "Deleted!",
      //   })
      // )
      toast.success("Tenant Deleted")
    } else if (response.error) {
      toast.error("An error occured")
      // dispatch(
      //   openRespDialog({
      //     self: false,
      //     type: "error",
      //     desc: response.error.message,
      //     title: "Oops!",
      //   })
      // )
    }
  }

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
    { value: "fitness", label: "Fitness" },
    { value: "laundry", label: "Laundry" },
    { value: "power", label: "24 hrs Power" },
  ]

  return (
    <DialogLayout
      className="bg-bgprimaryfade rounded-xl p-4"
      isOpen={open}
      setIsOpen={setOpen}
    >
      <>
        <div className="grid gap-3 w-[80vw] md:grid-cols-2 max-w-[57rem]">
          <div className="bg-white p-4 max-h-[55vh] overflow-auto rounded-xl">
            <div className="flex gap-[20px] border-b pb-4 mb-4 border-primaryFade">
              <Image
                src="/images/tenant-profile-img.svg"
                alt="Tenant Profile"
                width={100}
                height={100}
              />
              <div className="py-[8px] w-full">
                <h1 className="text-textcolor100 font-semibold mb-[10px]">
                  Akello Buma
                </h1>
                <div className="flex flex-wrap justify-between text-sm items-center gap-x-[19px] text-[#949494] mb-[4.5px]">
                  <p>jane.doe@gmail.com</p>
                  <div className="bg-textcolor100 w-[1px] h-[19px]"></div>
                  <p>(+256) 567890123</p>
                </div>
                <div className="gap-[16px] flex flex-wrap justify-between items-center">
                  <StatusBadge
                    className="min-w-fit"
                    status="completed"
                    text="Paid"
                  />
                  <button
                    onClick={deleteTenantCaution}
                    className="flex items-center justify-center border border-primaryFade rounded-lg w-fit px-3 py-2 hover:bg-slate-100 transition duration-300 focus-visible:ring-2 ring-primaryFade text-fade outline-none whitespace-nowrap gap-2 text-xs h-6"
                  >
                    <svg
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.11111 1.55539V0.666504H6.33333V1.55539M8.55556 3.55539V10.4443C8.55556 10.68 8.4619 10.9061 8.29521 11.0728C8.12851 11.2395 7.90241 11.3332 7.66667 11.3332H2.77778C2.54203 11.3332 2.31594 11.2395 2.14924 11.0728C1.98254 10.9061 1.88889 10.68 1.88889 10.4443V3.55539M6.33333 4.27762V10.2221M4.11111 4.27762V10.2221M1 1.55539H9.44444V2.44428H1V1.55539Z"
                        stroke="#2A4C23"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Delete Tenant
                  </button>
                </div>
              </div>
            </div>
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-full bg-white80 p-1.5">
                {["Service Requests", "Reviews and Ratings"].map(
                  (category, i) => (
                    <Tab
                      key={i + "head"}
                      className={({ selected }) =>
                        cn(
                          "w-full rounded-full py-2 text-xs",
                          "ring-white/60 ring-offset-2 ring-offset-primaryFade focus:outline-none focus-visible:ring-2",
                          selected
                            ? "bg-primary2 text-white"
                            : "text-fade hover:text-primary2 "
                        )
                      }
                    >
                      {category}
                    </Tab>
                  )
                )}
              </Tab.List>
              <Tab.Panels className="mt-2">
                <Tab.Panel className={cn("")}>
                  <ul className="flex flex-col gap-3">
                    {[
                      {
                        service: "Electrician",
                        status: "arriving",
                        message:
                          "I need an electrician to install a new light fixture in my living room. The light fixture is a chandelier and it will need to be wired into the existing electrical system.",
                        name: "Bryan Umar",
                        time: "Arriving in 2 hours",
                      },
                      {
                        service: "Electrician",
                        status: "completed",
                        message:
                          "I need an electrician to install a new light fixture in my living room. The light fixture is a chandelier and it will need to be wired into the existing electrical system.",
                        name: "Bryan Umar",
                        time: "2 hours ago",
                      },
                      {
                        service: "Electrician",
                        status: "completed",
                        message:
                          "I need an electrician to install a new light fixture in my living room. The light fixture is a chandelier and it will need to be wired into the existing electrical system.",
                        name: "Bryan Umar",
                        time: "2 hours ago",
                      },
                    ].map((each, i) => (
                      <li
                        key={i + "service"}
                        className="flex flex-col text-sm bg-white80 p-3 rounded-xl"
                      >
                        <div className="flex gap-2">
                          <span className="text-primary2">
                            <MemoElectrician className="w-6" />
                          </span>
                          <div>
                            <div className="flex justify-between">
                              <span className="font-medium text-[#333436]">
                                {each.service}
                              </span>
                              <StatusBadge
                                status={each.status}
                                className="min-w-28"
                              />
                            </div>
                            <p className="line-clamp-1 text-fade text-[.65rem] leading-6">
                              {each.message}
                            </p>
                          </div>
                        </div>

                        <div className="flex justify-between text-xs gap-3">
                          <div className="flex items-center gap-3">
                            <CustomImage
                              src={""}
                              fallbackSrc={placeholder}
                              alt="Landlord Emoji"
                              className="rounded-full object-cover"
                              width={24}
                              height={24}
                            />
                            <p className="text-[#4f4f4f]">{each.name}</p>
                          </div>
                          <span className="text-[#2A4C23]">{each.time}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="flex flex-col gap-3">
                    {[
                      {
                        name: "Bryan Umar",
                        service: "Electrician",
                        message:
                          "I was very impressed with Bryan’s work. He was prompt, professional, and did a great job fixing the electrical problem in my tenant's apartment. I would highly recommend him to anyone who needs an electrician.",
                      },
                      {
                        name: "Bryan Umar",
                        service: "Plumber",
                        message:
                          "I was very impressed with Bryan’s work. He was prompt, professional, and did a great job fixing the electrical problem in my tenant's apartment. I would highly recommend him to anyone who needs an electrician.",
                      },
                    ].map((each, i) => (
                      <div
                        style={{
                          backgroundColor:
                            services[each.service.toLowerCase()]?.color,
                        }}
                        key={i + "servicelist"}
                        className="rounded-xl py-3 px-2 flex gap-2"
                      >
                        <CustomImage
                          src={placeholder}
                          fallbackSrc={placeholder}
                          height={70}
                          className="h-16 w-16 min-w-20 rounded-full"
                          width={70}
                        />
                        <div className="w-full text-[#333436]">
                          <div className="flex items-center gap-2 justify-between">
                            <h3>{each.name}</h3>
                            <span className="text-sm flex items-center gap-2 whitespace-nowrap">
                              <svg
                                width="13"
                                height="12"
                                viewBox="0 0 13 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6.0287 0.437199C6.09336 0.305981 6.19346 0.195484 6.31768 0.118218C6.44189 0.0409511 6.58526 0 6.73154 0C6.87783 0 7.02119 0.0409511 7.14541 0.118218C7.26962 0.195484 7.36973 0.305981 7.43439 0.437199L8.94665 3.50089L12.3292 3.99296C12.474 4.01398 12.6099 4.07508 12.7217 4.16934C12.8335 4.26361 12.9167 4.38729 12.9619 4.52638C13.0071 4.66547 13.0124 4.81442 12.9773 4.95639C12.9422 5.09836 12.8681 5.22767 12.7633 5.32971L10.3155 7.71484L10.8938 11.0841C10.9185 11.2282 10.9024 11.3763 10.8472 11.5118C10.7921 11.6472 10.7003 11.7645 10.582 11.8504C10.4637 11.9363 10.3237 11.9874 10.1779 11.998C10.0321 12.0085 9.88624 11.978 9.75684 11.91L6.73233 10.3194L3.70624 11.91C3.5768 11.9779 3.43095 12.0082 3.28518 11.9975C3.1394 11.9869 2.99952 11.9357 2.88133 11.8497C2.76314 11.7637 2.67136 11.6463 2.61636 11.5109C2.56136 11.3755 2.54533 11.2274 2.57009 11.0833L3.14757 7.71484L0.699751 5.32971C0.594987 5.22767 0.520869 5.09836 0.48578 4.95639C0.450691 4.81442 0.456033 4.66547 0.5012 4.52638C0.546368 4.38729 0.629559 4.26361 0.741362 4.16934C0.853165 4.07508 0.989117 4.01398 1.13384 3.99296L4.51644 3.50168L6.0287 0.436415V0.437199Z"
                                  fill="#FBBC05"
                                />
                              </svg>
                              <span>4 / 5</span>
                            </span>
                          </div>
                          <div className="flex mb-1 items-center gap-2">
                            <span
                              style={{
                                color:
                                  services[each.service.toLowerCase()]
                                    ?.iconColor,
                              }}
                            >
                              {services[each.service.toLowerCase()]?.component}
                            </span>
                            <span className="text-xs">{each.service}</span>
                          </div>
                          <div className="line-clamp-1 text-[.6rem]">
                            {each.message}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          <div className="bg-white max-h-[55vh] overflowed text-sm flex flex-col gap-5 p-4 rounded-xl text-[#333436]">
            <div className="flex gap-4">
              <div className="basis-1/3">
                <span className="text-xs text-fade">Property Name:</span>
                <h3 className="font-medium">The Spring Lodge</h3>
              </div>
              <div className="basis-2/3">
                <span className="text-xs text-fade">Unit ID:</span>
                <h3 className="font-medium">ABJ56rjX</h3>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="basis-1/3">
                <span className="text-xs text-fade">Structure:</span>
                <h3 className="flex gap-1 items-center">
                  <MemoStructure /> Condominium
                </h3>
              </div>
              <div className="basis-2/3">
                <span className="text-xs text-fade">Type:</span>
                <h3 className="font-medium">Residential</h3>
              </div>
            </div>
            <div className="">
              <span className="text-xs text-fade">Features:</span>
              <div className="flex mt-1 gap-5 flex-wrap">
                {[
                  { feat: "bedroom", value: 2, label: "Bedroom" },
                  { feat: "toilet", value: 2, label: "Toilet" },
                  { feat: "bath", value: 2, label: "Bath" },
                  { feat: "store", value: 2, label: "Store" },
                  { feat: "meter", value: "No.1394567", label: "Light Meter" },
                  { feat: "meter", value: "No.1394567", label: "Water Meter" },
                ].map((each, i) => (
                  <div key={i + "feat"} className=" flex flex-col gap-1">
                    <span className="flex items-centerm gap-2">
                      <Features feature={each.feat} />
                      <span className="text-fade text-xs"> {each.value}</span>
                    </span>
                    <span className="text-xs mt-auto block">{each.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <span className="text-xs text-fade">Structure:</span>
              <h3 className="flex gap-1 items-center">
                <MemoRedLocationIcon /> 24, Commercial Avenue, Kampala
              </h3>
            </div>
            <div className="flex justify-between gap-4">
              <div className="">
                <span className="text-xs text-fade">Move-In Date:</span>
                <h3 className="font-medium">27/08/2023</h3>
              </div>
              <div className="">
                <span className="text-xs text-fade">Due Date:</span>
                <h3 className="font-medium">27/08/2023</h3>
              </div>
              <div className="">
                <span className="text-xs text-fade">Period:</span>
                <h3 className="font-medium">12 months</h3>
              </div>
            </div>
            <div className="">
              <span className="text-xs text-fade">Description:</span>
              <h3 className="font-medium">
                Bright, spacious 2-bedroom apartment in a quiet neighborhood.
                Close to shops, restaurants, and public transportation.
              </h3>
            </div>

            <div className="">
              <span className="text-xs text-fade">
                Properties and Unit features:
              </span>
              <div className="grid grid-cols-3 gap-x-1  flex-wrap">
                {_features.map((each) => (
                  <div key={each.value} className="flex items-center gap-2">
                    <Checkbox
                      className="h-[1.15rem] w-[1.15rem] min-w-[1.15rem"
                      onClick={() => {}}
                      checked={false}
                    />
                    <span className="pt-2">{features[each.value]}</span>
                    <span className="text-xs whitespace-nowrap">
                      {each.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="">
              <span className="text-xs text-fade">Cost:</span>
              <div className="flex flex-col gap-3 mt-2">
                <div className="flex justify-between items-center">
                  <h3>
                    Monthly Cost <span className="text-red-600">*</span>
                  </h3>
                  <span className="bg-bgprimaryfade border px-3 text-[.7rem] border-primaryFade text-primary2">
                    #3,000 /mth
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <h3>
                    Extra Charges <span className="text-red-600">*</span>
                  </h3>
                  <span className="bg-bgprimaryfade border px-3 text-[.7rem] border-primaryFade text-primary2">
                    #3,000 /mth
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <h3>
                    Tax <span className="text-red-600">*</span>
                  </h3>
                  <span className="bg-bgprimaryfade border px-3 text-[.7rem] border-primaryFade text-primary2">
                    #3,000 /mth
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <AreYouSure aYSD={cDIO} setAYSD={setCDIO} />
      </>
    </DialogLayout>
  )
}

export default TenantDetailsDialog
