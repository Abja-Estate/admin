"use client"
import RadioInput from "@/components/inputs/radioInput"
import SwitchToggle from "@/components/inputs/switchToggle"
import clsx from "clsx"
import { useState } from "react"

export default function Notification() {
  return (
    <div className="p-[40px] rounded-[10px] border-[1px] border-[#7F947B] bg-white w-full max-w-[940px] flex flex-col gap-[40px]">
      <header className="flex items-center justify-between pb-[16px] border-b-[1px] border-b-[#2A4C23]">
        <div>
          <h1 className="text-[333436] text-[24px] font-semibold mb-[8px]">
            Notifications
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
      </header>
      <div className="grid grid-cols-2 gap-[70px]">
        <ColumnOne />
        <ColumnTwo />
      </div>
    </div>
  )
}

interface optionInterface {
  [key: string]: string
}

const waitlistOption: optionInterface = {
  FIRST_OPTION: "Do not notify me",
  SECOND_OPTION: "Notify me with ONLY users on 2 days gap",
  THIRD_OPTION: "Notify for all users on waitlists.",
}

const paymentOption: optionInterface = {
  FIRST_OPTION: "Do not notify me",
  SECOND_OPTION: "Notify me on all payments",
}

const taskOption: optionInterface = {
  FIRST_OPTION: "Do not notify me",
  SECOND_OPTION: "ONLY new tasks",
  THIRD_OPTION: "ONLY completed tasks",
  FOURTH_OPTION: "ONLY cancelled tasks",
  FIFTH_OPTION: "Overdue tasks.",
  SIXTH_OPTION: "Custom.",
}

const messageOption: optionInterface = {
  FIRST_OPTION: "Do not notify me",
  SECOND_OPTION: "ONLY from landlords",
  THIRD_OPTION: "Only from tenants",
  FOURTH_OPTION: "Only from service providers",
  FIFTH_OPTION: "Only from admins.",
  SIXTH_OPTION: "Notify me on all messages.",
}

const ColumnOne = () => {
  const [waitlist, setWaitlist] = useState<string | null>(null)
  const [payment, setPayment] = useState<string | null>(null)
  const [task, setTask] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)

  const waitlistChecker = (data: string) => setWaitlist(data)
  const paymentChecker = (data: string) => setPayment(data)
  const taskChecker = (data: string) => setTask(data)
  const messageChecker = (data: string) => setMessage(data)

  return (
    <div>
      <header className="mb-[24px]">
        <h1 className="text-textcolor100 text-[18px] font-semibold mb-[8px]">
          Users Activities
        </h1>
        <p className="text-[#949494] font-medium text-[14px]">
          These are notifications of users varying from waitlists, payments,
          tasks and messages.
        </p>
      </header>
      <div className="flex flex-col gap-[24px] pl-[16px]">
        <div>
          <h1 className="text-textcolor100 text-[18px] font-semibold mb-[8px]">
            Waitlists
          </h1>
          <div className="flex gap-[8px] flex-col">
            {Object.keys(waitlistOption).map((data) => (
              <div
                key={data}
                className="flex gap-[16px] items-center cursor-pointer"
              >
                <RadioInput
                  checked={waitlist === waitlistOption[data]}
                  onClick={() => waitlistChecker(waitlistOption[data])}
                />
                <p
                  className={clsx(
                    task === waitlistOption[data]
                      ? "text-primary"
                      : "text-[#949494]",
                    "font-semibold"
                  )}
                  onClick={() => waitlistChecker(waitlistOption[data])}
                >
                  {waitlistOption[data]}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-textcolor100 text-[18px] font-semibold mb-[8px]">
            Payments
          </h1>
          <div className="flex gap-[8px] flex-col">
            {Object.keys(paymentOption).map((data) => (
              <div
                key={data}
                className="flex gap-[16px] items-center cursor-pointer"
              >
                <RadioInput
                  checked={payment === paymentOption[data]}
                  onClick={() => paymentChecker(paymentOption[data])}
                />
                <p
                  className={clsx(
                    task === paymentOption[data]
                      ? "text-primary"
                      : "text-[#949494]",
                    "font-semibold"
                  )}
                  onClick={() => paymentChecker(paymentOption[data])}
                >
                  {paymentOption[data]}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-textcolor100 text-[18px] font-semibold mb-[8px]">
            Tasks
          </h1>
          <div className="flex gap-[8px] flex-col">
            {Object.keys(taskOption).map((data) => (
              <div
                key={data}
                className="flex gap-[16px] items-center cursor-pointer"
              >
                <RadioInput
                  checked={task === taskOption[data]}
                  onClick={() => taskChecker(taskOption[data])}
                />
                <p
                  className={clsx(
                    task === taskOption[data]
                      ? "text-primary"
                      : "text-[#949494]",
                    "font-semibold"
                  )}
                  onClick={() => taskChecker(taskOption[data])}
                >
                  {taskOption[data]}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-textcolor100 text-[18px] font-semibold mb-[8px]">
            Messages
          </h1>
          <div className="flex gap-[8px] flex-col">
            {Object.keys(messageOption).map((data) => (
              <div
                key={data}
                className="flex gap-[16px] items-center cursor-pointer"
              >
                <RadioInput
                  checked={message === messageOption[data]}
                  onClick={() => messageChecker(messageOption[data])}
                />
                <p
                  className={clsx(
                    message === messageOption[data]
                      ? "text-primary"
                      : "text-[#949494]",
                    "font-semibold"
                  )}
                  onClick={() => messageChecker(messageOption[data])}
                >
                  {messageOption[data]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const languageOption: optionInterface = {
  FIRST_OPTION: "English (UK)",
  SECOND_OPTION: "English (US)",
  THIRD_OPTION: "French",
  FOURTH_OPTION: "Portugese",
}

const ColumnTwo = () => {
  const [language, setLanguage] = useState<string | null>(null)
  const [soundEnabled, setSoundEnabled] = useState<boolean>(false)
  const [popupNotificationsEnabled, setPopupNotificationsEnabled] =
    useState<boolean>(false)
  const [defaultNotificationsEnabled, setDefaultNotificationsEnabled] =
    useState<boolean>(false)

  const languageChecker = (data: string) => setLanguage(data)
  const soundEnabler = () => setSoundEnabled((prev) => !prev)
  const popupNotificationsEnabler = () =>
    setPopupNotificationsEnabled((prev) => !prev)
  const defaultNotificationsEnabler = () =>
    setDefaultNotificationsEnabled((prev) => !prev)

  return (
    <div className="flex flex-col gap-[24px]">
      <div>
        <header className="mb-[24px]">
          <h1 className="text-textcolor100 text-[18px] font-semibold mb-[8px]">
            Language
          </h1>
          <p className="text-[#949494] font-medium text-[14px]">
            Select your preferred language option.
          </p>
        </header>
        <div className="flex gap-[8px] flex-col">
          {Object.keys(languageOption).map((data) => (
            <div
              key={data}
              className="flex gap-[16px] items-center cursor-pointer"
            >
              <RadioInput
                checked={language === languageOption[data]}
                onClick={() => languageChecker(languageOption[data])}
              />
              <p
                className={clsx(
                  language === languageOption[data]
                    ? "text-primary"
                    : "text-[#949494]",
                  "font-semibold"
                )}
                onClick={() => languageChecker(languageOption[data])}
              >
                {languageOption[data]}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-[62px] items-center">
        <div className="flex-1">
          <h1 className="text-primary text-[18px] font-semibold mb-[8px]">
            Sounds
          </h1>
          <p className="text-[#949494] font-medium">
            Enable/disable all notification sounds.
          </p>
        </div>
        <div>
          <SwitchToggle isOn={soundEnabled} onClick={soundEnabler} />
        </div>
      </div>
      <div className="flex gap-[62px] items-center">
        <div className="flex-1">
          <h1 className="text-primary text-[18px] font-semibold mb-[8px]">
            Pop-up notifications
          </h1>
          <p className="text-[#949494] font-medium">
            Enable/disable all notifications popping on the screen.
          </p>
        </div>
        <div>
          <SwitchToggle
            isOn={popupNotificationsEnabled}
            onClick={popupNotificationsEnabler}
          />
        </div>
      </div>
      <div className="flex gap-[62px] items-center">
        <div className="flex-1">
          <h1 className="text-primary text-[18px] font-semibold mb-[8px]">
            Default notifications
          </h1>
          <p className="text-[#949494] font-medium">
            Set all notification settings back to default.
          </p>
        </div>
        <div>
          <SwitchToggle
            isOn={defaultNotificationsEnabled}
            onClick={defaultNotificationsEnabler}
          />
        </div>
      </div>
    </div>
  )
}
