"use client"
import RadioInput from "@/components/inputs/radioInput"
import { DeleteIcon } from "@/components/svgs"
import SwitchToggle from "@/components/inputs/switchToggle"
import clsx from "clsx"
import Image from "next/image"
import { Suspense, useEffect, useState } from "react"
import AdminDialog from "@/components/admin-dashboard/AdminDialog"
import { useDeleteAdminMutation, useGetAdminsQuery } from "@/redux/endpoints"
import { AreYouSureProps, UserData } from "@/utils/types"
import { AnyObject } from "yup"
import toast from "react-hot-toast"
import AreYouSure from "@/components/AreYouSure"
import CustomImage from "@/components/CustomImage"
import {
  canAdd,
  canDelete,
  canEdit,
  canView,
  formatDateTime,
} from "@/utils/helpers"
import { useAppSelector } from "@/redux/hooks"
import { useRouter } from "next/navigation"

export default function UserActivity() {
  const { profile: user } = useAppSelector((state) => state.admin)
  const router = useRouter()
  useEffect(() => {
    if (!canView("admins", user?.role)) {
      router.push("/dashboard/settings/")
    }
  }, [user, router])

  return (
    // <Suspense fallback="Loading...">
    <div className="p-4 sm:p-10 rounded-[10px] border-[1px] border-[#7F947B] bg-white w-full max-w-[940px] flex flex-col gap-[40px]">
      {/* <header className="flex items-center justify-between pb-[16px] border-b-[1px] border-b-[#2A4C23]">
        <div>
          <h1 className="text-[333436] text-[24px] font-semibold mb-[8px]">
            Users Activity
          </h1>
          <p className="text-[#949494] font-semibold">
            Get notified on what&rsquo;s happening at the moment. You can turn
            off at any time.
          </p>
        </div>
        <div className="my-auto flex gap-[16px] items-center">
          <button className="text-[#949494] bg-transparent border-[1px] border-[#949494] text-[14px] w-[106px] h-[39px] rounded-[8px]">
            Cancel
          </button>
          <button className="text-white bg-primary text-[14px] w-[106px] h-[39px] rounded-[10px]">
            Save
          </button>
        </div>
      </header> */}
      {user?.role == "3" && <Admin />}
      {/* <Landlords />
      <ServiceProviders />
      <PendingAdminInvites /> */}
    </div>
    // </Suspense>
  )
}

const Admin = () => {
  const [open, setOpen] = useState(false)
  const [done, setDone] = useState(false)
  const [cDIO, setCDIO] = useState<AreYouSureProps>({ status: false })
  const [deleteAnAdmin] = useDeleteAdminMutation()
  const { data: admins, isLoading } = useGetAdminsQuery("")
  const [currentAdmin, setCurrentAdmin] = useState<UserData | null>(null)
  const { profile: user } = useAppSelector((state) => state.admin)

  const deleteAdminCaution = (data: any) => {
    if (!canDelete("admins", user?.role)) {
      toast.error("You don't have permission")
      return
    }
    setCDIO({
      status: true,
      data,
      type: "deleteUser",
      action: deleteAdmin,
      desc: `Are you sure you want to delete this admin?`,
    })
  }

  const successResp = () => {
    setDone(false)
    setCDIO({
      status: true,
      type: "successResp",
      action: () => {},
      desc: `Admin saved successfully`,
    })
  }

  useEffect(() => {
    if (done) {
      successResp()
    }
  }, [done])

  useEffect(() => {
    if (!open) {
      setCurrentAdmin(null)
    }
  }, [open])

  const deleteAdmin = async (_admin: any) => {
    const response: AnyObject = await deleteAnAdmin({
      adminID: _admin._id,
      superAdminID: user?._id,
    })
    if (response.data) {
      toast.success("Admin Deleted")
    }
  }

  return (
    <div>
      <header className="flex flex-wrap gap-5 items-center mb-[24px] px-2 sm:px-4">
        <div className="flex-1">
          <h1 className="text-[18px] font-semibold">Admins</h1>
          <p className="text-[#00000066] font-semibold min-w-[10rem]">
            Get access to organize users, grant access and remove users.
          </p>
        </div>
        <div>
          {canAdd("admins", user?.role) && (
            <button
              onClick={() => {
                setOpen(true)
              }}
              className="text-primary bg-transparent border-[1px] border-primary w-[160px] h-[41px] rounded-[8px] font-semibold"
            >
              Add Admin
            </button>
          )}
        </div>
      </header>
      <div className="flex overflow-auto w-full flex-col py-4 px-2">
        {isLoading && (
          <div className="flex items-center justify-center min-h-[20rem] p-4 ">
            Fetching...
          </div>
        )}
        <table className="w-full">
          {admins
            ?.filter((each: UserData) => each.role != "3")
            .map((each, i) => (
              <tr
                key={"admin" + i}
                className="border-b-[1rem] border-transparent"
              >
                <td className="px-2 min-w-[10rem]">
                  <figure className="flex gap-[6px] items-center">
                    <CustomImage
                      className="rounded-full object-cover"
                      src={each?.selfie ?? ""}
                      fallbackSrc="/images/circle.svg"
                      alt="User Admin"
                      width={48}
                      height={48}
                    />
                    <figcaption className="text-textcolor100 text-[14px]">
                      {each.name} {each.surname}
                    </figcaption>
                  </figure>
                </td>
                <td className="text-textcolor100 px-2 whitespace-nowrap text-[14px] capitalize">
                  Admin {each.role}
                </td>
                <td className="text-textcolor100 px-2 whitespace-nowrap text-[14px]">
                  {each.created && new Date(each.created).toDateString()}
                </td>
                <td className="text-textcolor100 px-2 whitespace-nowrap text-[14px]">
                  {each.created && formatDateTime(each.created, true)}
                </td>
                <td className="text-textcolor100 px-2 whitespace-nowrap text-[14px]">
                  <button
                    className="p-2"
                    onClick={() => {
                      if (!canEdit("admins", user?.role)) {
                        toast.error("You don't have permission")
                        return
                      }
                      setCurrentAdmin(each)
                      setOpen(true)
                    }}
                  >
                    ...
                  </button>
                </td>
                <td className="text-textcolor100 px-2 whitespace-nowrap text-[14px]">
                  <button onClick={() => deleteAdminCaution(each)}>
                    <DeleteIcon />
                  </button>
                </td>
              </tr>
            ))}
        </table>

        {/* <p className="text-textcolor100 text-[14px]">Admin 1</p>
          <p className="text-textcolor100 text-[14px]">07 Aug 2022</p>
          <p className="text-textcolor100 text-[14px]">2 days ago</p>
          <p className="text-textcolor100 text-[14px]">...</p> */}
      </div>
      {/* <div className="flex justify-end pb-[16px]">
        <button className="text-white bg-primary text-[14px] w-[106px] h-[39px] rounded-[10px]">
          See More
        </button>
      </div> */}

      <AreYouSure aYSD={cDIO} setAYSD={setCDIO} />
      <AdminDialog
        open={open}
        setOpen={setOpen}
        setDone={setDone}
        admin={currentAdmin}
      />
    </div>
  )
}

const Landlords = () => {
  return (
    <div className="border-t-[1px] border-t-primary pt-[12px]">
      <header className="flex gap-5 items-center mb-[24px] px-[16px]">
        <div className="flex-1">
          <h1 className="text-[18px] font-semibold">LandLords</h1>
          <p className="text-[#00000066] font-semibold">
            Get access to organize users, grant access and remove users.
          </p>
        </div>
        <div>
          <button className="text-primary bg-transparent border-[1px] border-primary w-[160px] h-[41px] rounded-[8px] font-semibold">
            Invite
          </button>
        </div>
      </header>
      <div className="flex flex-col p-[16px]">
        <div className="px-[20px] py-[10px] flex justify-between items-center">
          <figure className="flex gap-[6px] items-center">
            <Image
              src="/images/user-activity-admin-1.svg"
              alt="User Admin"
              width={48}
              height={48}
              draggable={false}
            />
            <figcaption className="text-textcolor100 text-[14px]">
              Erica Daniels
            </figcaption>
          </figure>
          <p className="text-textcolor100 text-[14px]">Admin 1</p>
          <p className="text-textcolor100 text-[14px]">07 Aug 2022</p>
          <p className="text-textcolor100 text-[14px]">2 days ago</p>
          <p className="text-textcolor100 text-[14px]">...</p>
          <div>
            <DeleteIcon />
          </div>
        </div>
        <div className="px-[20px] py-[10px] flex justify-between items-center">
          <figure className="flex gap-[6px] items-center">
            <Image
              src="/images/user-activity-admin-2.svg"
              alt="User Admin"
              width={48}
              height={48}
            />
            <figcaption className="text-textcolor100 text-[14px]">
              Erica Daniels
            </figcaption>
          </figure>
          <p className="text-textcolor100 text-[14px]">Admin 2</p>
          <p className="text-textcolor100 text-[14px]">07 Aug 2022</p>
          <p className="text-textcolor100 text-[14px]">2 days ago</p>
          <p className="text-textcolor100 text-[14px]">...</p>
          <div>
            <DeleteIcon />
          </div>
        </div>
        <div className="px-[20px] py-[10px] flex justify-between items-center">
          <figure className="flex gap-[6px] items-center">
            <Image
              src="/images/user-activity-admin-3.svg"
              alt="User Admin"
              width={48}
              height={48}
              draggable={false}
            />
            <figcaption className="text-textcolor100 text-[14px]">
              Erica Daniels
            </figcaption>
          </figure>
          <p className="text-textcolor100 text-[14px]">Admin 3</p>
          <p className="text-textcolor100 text-[14px]">07 Aug 2022</p>
          <p className="text-textcolor100 text-[14px]">2 days ago</p>
          <p className="text-textcolor100 text-[14px]">...</p>
          <div>
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

const ServiceProviders = () => {
  return (
    <div className="border-t-[1px] border-t-primary pt-[12px]">
      <header className="flex gap-5 items-center mb-[24px] px-[16px]">
        <div className="flex-1">
          <h1 className="text-[18px] font-semibold">Service Providers</h1>
          <p className="text-[#00000066] font-semibold">
            Get access to organize users, grant access and remove users.
          </p>
        </div>
        <div>
          <button className="text-primary bg-transparent border-[1px] border-primary w-[160px] h-[41px] rounded-[8px] font-semibold">
            Invite
          </button>
        </div>
      </header>
      <div className="flex flex-col p-[16px]">
        <div className="px-[20px] py-[10px] flex justify-between items-center">
          <figure className="flex gap-[6px] items-center">
            <Image
              src="/images/user-activity-admin-1.svg"
              alt="User Admin"
              width={48}
              height={48}
            />
            <figcaption className="text-textcolor100 text-[14px]">
              Erica Daniels
            </figcaption>
          </figure>
          <p className="text-textcolor100 text-[14px]">Admin 1</p>
          <p className="text-textcolor100 text-[14px]">07 Aug 2022</p>
          <p className="text-textcolor100 text-[14px]">2 days ago</p>
          <p className="text-textcolor100 text-[14px]">...</p>
          <div>
            <DeleteIcon />
          </div>
        </div>
        <div className="px-[20px] py-[10px] flex justify-between items-center">
          <figure className="flex gap-[6px] items-center">
            <Image
              src="/images/user-activity-admin-2.svg"
              alt="User Admin"
              width={48}
              height={48}
              draggable={false}
            />
            <figcaption className="text-textcolor100 text-[14px]">
              Erica Daniels
            </figcaption>
          </figure>
          <p className="text-textcolor100 text-[14px]">Admin 2</p>
          <p className="text-textcolor100 text-[14px]">07 Aug 2022</p>
          <p className="text-textcolor100 text-[14px]">2 days ago</p>
          <p className="text-textcolor100 text-[14px]">...</p>
          <div>
            <DeleteIcon />
          </div>
        </div>
        <div className="px-[20px] py-[10px] flex justify-between items-center">
          <figure className="flex gap-[6px] items-center">
            <Image
              src="/images/user-activity-admin-3.svg"
              alt="User Admin"
              width={48}
              height={48}
              draggable={false}
            />
            <figcaption className="text-textcolor100 text-[14px]">
              Erica Daniels
            </figcaption>
          </figure>
          <p className="text-textcolor100 text-[14px]">Admin 3</p>
          <p className="text-textcolor100 text-[14px]">07 Aug 2022</p>
          <p className="text-textcolor100 text-[14px]">2 days ago</p>
          <p className="text-textcolor100 text-[14px]">...</p>
          <div>
            <DeleteIcon />
          </div>
        </div>
      </div>
    </div>
  )
}

const PendingAdminInvites = () => {
  return (
    <div>
      <header className="mb-[24px] px-[16px]">
        <h1 className="text-[18px] font-semibold">Pending Admin Invites</h1>
        <p className="text-[#00000066] font-semibold">
          Users yet to make confirmation from their mail-box.
        </p>
      </header>
      <div className="flex flex-col p-[16px]">
        <div className="px-[16px] pt-[24px] pb-[12px] grid grid-cols-3 items-center">
          <div className="flex gap-[24px]">
            <div className="w-[48px] h-[48px] rounded-[100%] bg-[#0CFFE2] grid place-items-center font-semibold">
              KO
            </div>
            <div>
              <h1 className="text-[18px] font-semibold">Kierian Okeke</h1>
              <p className="text-[12px] text-textcolor100">
                kieokeke@gmail.com
              </p>
            </div>
          </div>
          <div className="bg-[#FFBB0C4D] w-[120px] h-[29px] rounded-[8px] px-[14px] py-[4px] flex gap-[16px] items-center">
            <span className="h-[4px] w-[4px] bg-[#FFBB0C] rounded-[100%]"></span>
            <p className="text-[12px] text-[#FFBB0C]">Pending</p>
          </div>
          <div className="flex justify-end">
            <div className="my-auto flex gap-[16px] items-center">
              <button className="text-[#949494] bg-transparent border-[1px] border-[#949494] text-[14px] w-[106px] h-[39px] rounded-[8px]">
                Cancel
              </button>
              <button className="text-white bg-primary text-[14px] w-[106px] h-[39px] rounded-[10px]">
                Recend Invite
              </button>
            </div>
          </div>
        </div>
        <div className="px-[16px] pt-[24px] pb-[12px] grid grid-cols-3 items-center border-t-[1px] border-[#949494]">
          <div className="flex gap-[24px]">
            <div className="w-[48px] h-[48px] rounded-[100%] bg-[#FF0CD8] grid place-items-center font-semibold">
              AR
            </div>
            <div>
              <h1 className="text-[18px] font-semibold">Adam Ramsey</h1>
              <p className="text-[12px] text-textcolor100">
                adamramsey@gmail.com
              </p>
            </div>
          </div>
          <div className="bg-[#FFBB0C4D] w-[120px] h-[29px] rounded-[8px] px-[14px] py-[4px] flex gap-[16px] items-center">
            <span className="h-[4px] w-[4px] bg-[#FFBB0C] rounded-[100%]"></span>
            <p className="text-[12px] text-[#FFBB0C]">Pending</p>
          </div>
          <div className="flex justify-end">
            <div className="my-auto flex gap-[16px] items-center">
              <button className="text-[#949494] bg-transparent border-[1px] border-[#949494] text-[14px] w-[106px] h-[39px] rounded-[8px]">
                Cancel
              </button>
              <button className="text-white bg-primary text-[14px] w-[106px] h-[39px] rounded-[10px]">
                Recend Invite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
