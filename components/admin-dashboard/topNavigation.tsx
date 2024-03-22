// @ts-nocheck

import Image from "next/image"
import {
  BriefCaseIcon,
  ExpandMoreIcon,
  MessageIcon,
  MicIcon,
  NotificationIcon,
  SearchIcon,
  StarYellowIcon,
} from "../svgs"
import { useEffect, useState } from "react"
import { Popover } from "@headlessui/react"
import Link from "next/link"
import Modal from "../modal"
import { cn } from "@/utils/cn"
import MemoNoRecord2 from "../NoRecord2"
import MemoAssign from "../svgs/Assign"
import MemoAlarm from "../svgs/Alarm"
import MemoCounter from "../svgs/Counter"
import MemoDelete from "../svgs/Delete"
import MemoProfileAdd from "../svgs/ProfileAdd"
import MemoProcess from "../svgs/Process"
import MemoUpdate from "../svgs/Update"
import MemoShare from "../svgs/Share"

export default function AdminDashboardTopNavigation({
  setMenuIsOpen,
}: {
  setMenuIsOpen: Function
}) {
  const [user, setUser] = useState<string>("") // Initialize user state with an empty string

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("active-user") // Declare a variable to store the retrieved user data

      if (userData) {
        try {
          const parsedUser = JSON.parse(userData) // Parse the retrieved user data
          setUser(parsedUser) // Update the user state with the parsed user data
        } catch (error) {
          console.error("Error parsing user data from localStorage:", error)
        }
      }
    }
  }, [])

  return (
    <>
      <nav className="z-[10] sticky top-0 flex items-center justify-between px-[20px] py-[7px] shadow-[0px_4px_4px_0px_#00000040] bg-white">
        <figure className="flex gap-4 items-center">
          <button
            className="lg:hidden"
            onClick={() => setMenuIsOpen((e) => !e)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path>
            </svg>
          </button>
          <Image
            src="/images/abj-logo.svg"
            alt="Abj logo"
            width={70}
            height={100}
            className="w-10 sm:w-14"
            draggable={false}
          />
        </figure>
        <div className="h-[40px] hidden ml-4 sm:ml-20 md:ml-40 mr-10 rounded-[10px] bg-[#EAEDE9] w-[500px] border-[1px] border-[#3A3A3A] px-[16px] sm:flex items-center gap-[16px]">
          <SearchIcon />
          <input
            className="w-full flex-1 bg-transparent placeholder-[#3A3A3A] outline-none"
            placeholder="Search"
          />
          <MicIcon />
        </div>
        <div className="flex items-center gap-[16px]">
          <button
            onClick={() => setIsOpen(true)}
            className="h-[38px] w-[38px] min-w-[38px] bg-[#2A4C2333] rounded-[100%] relative grid place-items-center"
          >
            <NotificationIcon />
            <span className="absolute h-[12px] w-[12px] grid place-items-center bg-[#D90001] text-white text-[7px] font-semibold rounded-[100%] top-[6px] right-[8px]">
              8
            </span>
          </button>
          <div className="h-[38px] w-[38px]  min-w-[38px] bg-[#2A4C2333] rounded-[100%] relative grid place-items-center">
            <MessageIcon />
            <span className="absolute h-[12px] w-[12px] grid place-items-center bg-[#D90001] text-white text-[7px] font-semibold rounded-[100%] top-[6px] right-[8px]">
              4
            </span>
          </div>
          <Popover className="ml-[8px] relative">
            <Popover.Button className="flex items-center gap-[16px] outline-none">
              <Image
                src="/images/admin-user-img-1.svg"
                alt="Admin user"
                width={60}
                className="w-fit sm:w-[unset]"
                height={60}
              />
              <div>
                <h1 className="text-[14px]">
                  {user?.name} {user?.surname}
                </h1>
                <p className="text-[14px] text-[#2A4C23] font-bold">Admin</p>
              </div>
              <ExpandMoreIcon />
            </Popover.Button>
            <Popover.Panel className="absolute right-0 text-[14px] z-10 w-[140px] rounded-[10px] shadow-[0px_4px_20px_0px_#00000033] bg-white">
              <Link href="/dashboard/profile">
                <button className="cursor-pointer border-t-[1px] w-full px-6 py-2 text-left">
                  My Account
                </button>
              </Link>
              <button
                onClick={openModal}
                className="cursor-pointer border-t-[1px] w-full px-6 py-2 text-left"
              >
                Activity
              </button>
              <button className="cursor-pointer border-t-[1px] w-full px-6 py-2 text-left">
                Log out
              </button>
            </Popover.Panel>
          </Popover>
        </div>
      </nav>
      <Activity isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}

type ActiviyTabs = "NOTIFICATION" | "ACTIVITY-LOG"
const Activity = ({ isOpen, closeModal }) => {
  const [activeTab, setActiveTab] = useState<ActiviyTabs>("NOTIFICATION")

  const toggleActiveTab = (tab: ActiviyTabs) => setActiveTab(tab)

  return (
    <Modal
      isOpen={isOpen}
      closeModal={closeModal}
      modalStyles="h-[100vh] max-h-[70vh] max-w-[452px] flex flex-col gap-10 py-[32px]"
    >
      <header className="bg-[#F6F8F6] p-2 flex gap-4 w-full rounded-[4px] mx-auto">
        <button
          onClick={() => toggleActiveTab("NOTIFICATION")}
          className={cn(
            "w-full h-[32px] rounded-[6px] bg-transparent text-[#949494] text-[14px] font-semibold",
            activeTab === "NOTIFICATION" && "bg-[#47893F] text-white"
          )}
        >
          Notification
        </button>
        <button
          onClick={() => toggleActiveTab("ACTIVITY-LOG")}
          className={cn(
            "w-full h-[32px] bg-transparent rounded-[6px] text-[#949494] text-[14px] font-semibold",
            activeTab === "ACTIVITY-LOG" && "bg-[#47893F] text-white"
          )}
        >
          Activity Log
        </button>
      </header>
      {activeTab === "NOTIFICATION" ? <Notification /> : <ActivityLog />}
    </Modal>
  )
}

const Notification = () => {
  const notifications = [...Array(0)]
  return (
    <>
      {!notifications.length && (
        <div className="gap-4 flex flex-col items-center justify-center h-full">
          <MemoNoRecord2 className="h-40" />
          <p>No New Notifications</p>
        </div>
      )}
      <div className="flex flex-col gap-4">
        {notifications.map((_, i) => (
          <div
            key={i}
            className="cursor-pointer border-l-[4px] border-l-[#D9D9D9] hover:border-l-[#47893F] min-h-[43px] pl-6"
          >
            <div>
              <div className="flex gap-2">
                <div className="bg-[#FFF1CE] h-[24px] w-[24px] grid place-items-center">
                  <StarYellowIcon />
                </div>
                <div className="flex items-center gap-2 flex-1 text-[14px]">
                  <div className="flex items-center gap-[5px]">
                    <Image
                      src="/images/tenant-emoji.svg"
                      alt="Tenant Emoji"
                      width={24}
                      height={24}
                      draggable={false}
                    />
                    <p className="text-[#4f4f4f]">Akello Buma</p>
                  </div>
                  <p className="text-[#4f4f4f]">rated </p>
                  <div className="flex items-center gap-[5px]">
                    <Image
                      src="/images/tenant-emoji.svg"
                      alt="Tenant Emoji"
                      width={24}
                      height={24}
                      draggable={false}
                    />
                    <p className="text-[#4f4f4f]">Okello Buma</p>
                  </div>
                </div>
              </div>
              <p className="text-[#949494] text-[8px] py-[3px] border-b-[1px] border-b-[#d9d9d9]">
                10:13 AM &nbsp; 7 NOV 2023
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

const ActivityLog = () => {
  const actionIcons = [
    { actions: ["assign"], icon: <MemoAssign /> },
    { actions: ["time"], icon: <MemoAlarm /> },
    { actions: ["counter"], icon: <MemoCounter /> },
    { actions: ["delete"], icon: <MemoDelete /> },
    { actions: ["profileAdd"], icon: <MemoProfileAdd /> },
    { actions: ["process"], icon: <MemoProcess /> },
    { actions: ["edit", "update"], icon: <MemoUpdate /> },
    { actions: ["share"], icon: <MemoShare /> },
  ]
  const activities = [...Array(8)].map((each) => ({
    action:
      actionIcons[Math.floor(Math.random() * (actionIcons.length - 0 + 1)) + 0]
        ?.actions[0],
  }))
  return (
    <>
      {!activities.length && (
        <div className="gap-4 flex flex-col items-center justify-center h-full">
          <MemoNoRecord2 className="h-40" />
          <p>No New Activity Log</p>
        </div>
      )}
      <div className="flex flex-col gap-4">
        {activities.map((_, i) => (
          <div
            key={i}
            className="cursor-pointer relative border-l-[4px] group border-l-[#D9D9D9] hover:border-l-[#47893F] min-h-[43px] pl-6"
          >
            <div className="absolute bg-white flex flex-col transition duration-500 opacity-0 group-hover:opacity-100 justify-center items-center h-[4.35rem] w-[4.35rem] right-0 -top-3 bottom-0 my-auto min-w-[4.35rem] log-hover-info rounded-full">
              <Image
                src="/images/tenant-emoji.svg"
                alt="Tenant Emoji"
                width={24}
                height={24}
                draggable={false}
              />
              <p className="text-[.4rem] text-[#949494]">Admin II</p>
              <p className="text-[.5rem] text-[#333436]">Steph Nze</p>
            </div>
            <div>
              <div className="flex gap-2">
                <div className=" h-[24px] bg-slate-200 w-[24px] grid place-items-center">
                  {
                    actionIcons.find((each) => each.actions.includes(_.action))
                      ?.icon
                  }
                </div>
                <div className="flex items-center gap-2 flex-1 text-[14px]">
                  {/* <div className="flex items-center gap-[5px]">
                    <Image
                      src="/images/man-placeholder.png"
                      alt="Tenant Emoji"
                      className="rounded-full"
                      width={24}
                      height={24}
                      draggable={false}
                    />
                    <p className="text-[#4f4f4f]">Akello Buma</p>
                  </div> */}
                  <p className="text-[#4f4f4f]">Request was processed for </p>
                  <div className="flex items-center gap-[5px]">
                    <Image
                      src="/images/man-placeholder.png"
                      alt="Tenant Emoji"
                      className="rounded-full"
                      width={24}
                      height={24}
                      draggable={false}
                    />
                    <p className="text-[#4f4f4f]">Okello Buma</p>
                  </div>
                </div>
              </div>
              <p className="text-[#949494] text-[8px] py-[3px] border-b-[1px] border-b-[#d9d9d9]">
                10:13 AM &nbsp; 7 NOV 2023
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
