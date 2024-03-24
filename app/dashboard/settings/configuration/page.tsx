"use client"

import RadioInput from "@/components/inputs/radioInput"
import clsx from "clsx"
import { useState } from "react"

export default function Configuration() {
  const Admin1 = <Admin title="Admin 1" />
  const Admin2 = <Admin title="Admin 2" />
  const Admin3 = <Admin title="Admin 3" />

  return (
    <div className="p-[40px] rounded-[10px] border-[1px] border-[#7F947B] bg-white w-full max-w-[1240px] flex flex-col gap-[40px]">
      <header className="flex items-center justify-between pb-[16px] border-b-[1px] border-b-[#2A4C23]">
        <div>
          <h1 className="text-[333436] text-[24px] font-semibold mb-[8px]">
            Configuration
          </h1>
          <p className="text-[#949494] font-semibold">
            Configure access to cater to each admin.
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
      <div className="grid grid-cols-3 gap-[60px] 2xl:gap-[90px]">
        {Admin1}
        {Admin2}
        {Admin3}
      </div>
    </div>
  )
}

interface optionInterface {
  [key: string]: string
}

const dataAccessOption: optionInterface = {
  FIRST_OPTION: "Access to properties in Kampala ONLY",
  SECOND_OPTION: "Access to only tenants.",
  THIRD_OPTION: "Access to only 1-5 properties.",
  FOURTH_OPTION: "Access to only service providers.",
}

const transactionalCapabilityOption: optionInterface = {
  FIRST_OPTION: "Create new tenants, properties, leases",
  SECOND_OPTION: "Edit tenant records, property records, lease agreements.",
  THIRD_OPTION: "Delete tenant records, property records.",
  FOURTH_OPTION: "Terminate lease agreement",
  FIFTH_OPTION: "Collect rent payments",
  SIXTH_OPTION: "Issue Invoices",
  SEVENTH_OPTION: "Assign tasks, track and close requests.",
}

const reportingCapabilityOption: optionInterface = {
  FIRST_OPTION: "Run financial reports or occupancy reports.",
  SECOND_OPTION: "Run reports on properties.",
  THIRD_OPTION: "Download reports files.",
  FOURTH_OPTION: "Share reports with other admins.",
  FIFTH_OPTION: "Schedule Reports.",
}

const userManagementOption: optionInterface = {
  FIRST_OPTION: "Delete Users.",
  SECOND_OPTION: "Assign permission to users.",
}

const systemSettingOption: optionInterface = {
  FIRST_OPTION: "Access  to payments.",
  SECOND_OPTION: "Access to dashboard settings.",
  THIRD_OPTION: "Access to preference and notifications settings",
  FOURTH_OPTION: "Access to User Activity settings.",
}

interface AdminProps {
  title: string
}

const Admin = ({ title }: AdminProps) => {
  const [dataAccess, setDataAccess] = useState<string | null>(null)
  const [transactionalCapability, setTransactionalCapability] = useState<
    string | null
  >(null)
  const [reportingCapability, setReportingCapability] = useState<string | null>(
    null
  )
  const [userManagement, setUserManagement] = useState<string | null>(null)
  const [systemSetting, setSystemSetting] = useState<string | null>(null)

  const dataAccessChecker = (data: string) => setDataAccess(data)
  const transactionalCapabilityChecker = (data: string) =>
    setTransactionalCapability(data)
  const reportingCapabilityChecker = (data: string) =>
    setReportingCapability(data)
  const userManagementChecker = (data: string) => setUserManagement(data)
  const systemSettingChecker = (data: string) => setSystemSetting(data)

  return (
    <div className="flex flex-col gap-[24px]">
      <header className="py-[10px] border-b-[1px] border-b-primary">
        <h1 className="text-textcolor100 text-[22px] font-semibold">{title}</h1>
      </header>
      <div className="card-box-shadow p-[16px]">
        <h1 className="text-textcolor100 text-[18px] font-semibold mb-[16px]">
          Data Access
        </h1>
        <div className="flex flex-col gap-[24px]">
          {Object.keys(dataAccessOption).map((data) => (
            <div
              key={data}
              className="flex gap-[16px] items-center cursor-pointer"
            >
              <RadioInput
                checked={dataAccess === dataAccessOption[data]}
                onClick={() => dataAccessChecker(dataAccessOption[data])}
              />
              <p
                className={clsx(
                  dataAccess === dataAccessOption[data]
                    ? "text-primary"
                    : "text-[#949494]",
                  "font-semibold"
                )}
                onClick={() => dataAccessChecker(dataAccessOption[data])}
              >
                {dataAccessOption[data]}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="card-box-shadow p-[16px]">
        <h1 className="text-textcolor100 text-[18px] font-semibold mb-[16px]">
          Transactional Capabilities
        </h1>
        <div className="flex flex-col gap-[24px]">
          {Object.keys(transactionalCapabilityOption).map((data) => (
            <div
              key={data}
              className="flex gap-[16px] items-center cursor-pointer"
            >
              <RadioInput
                checked={
                  transactionalCapability ===
                  transactionalCapabilityOption[data]
                }
                onClick={() =>
                  transactionalCapabilityChecker(
                    transactionalCapabilityOption[data]
                  )
                }
              />
              <p
                className={clsx(
                  transactionalCapability ===
                    transactionalCapabilityOption[data]
                    ? "text-primary"
                    : "text-[#949494]",
                  "font-semibold"
                )}
                onClick={() =>
                  transactionalCapabilityChecker(
                    transactionalCapabilityOption[data]
                  )
                }
              >
                {transactionalCapabilityOption[data]}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="card-box-shadow p-[16px]">
        <h1 className="text-textcolor100 text-[18px] font-semibold mb-[16px]">
          Reporting Capabilities
        </h1>
        <div className="flex flex-col gap-[24px]">
          {Object.keys(reportingCapabilityOption).map((data) => (
            <div
              key={data}
              className="flex gap-[16px] items-center cursor-pointer"
            >
              <RadioInput
                checked={
                  reportingCapability === reportingCapabilityOption[data]
                }
                onClick={() =>
                  reportingCapabilityChecker(reportingCapabilityOption[data])
                }
              />
              <p
                className={clsx(
                  reportingCapability === reportingCapabilityOption[data]
                    ? "text-primary"
                    : "text-[#949494]",
                  "font-semibold"
                )}
                onClick={() =>
                  reportingCapabilityChecker(reportingCapabilityOption[data])
                }
              >
                {reportingCapabilityOption[data]}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="card-box-shadow p-[16px]">
        <h1 className="text-textcolor100 text-[18px] font-semibold mb-[16px]">
          User Management
        </h1>
        <div className="flex flex-col gap-[24px]">
          {Object.keys(userManagementOption).map((data) => (
            <div
              key={data}
              className="flex gap-[16px] items-center cursor-pointer"
            >
              <RadioInput
                checked={userManagement === userManagementOption[data]}
                onClick={() =>
                  userManagementChecker(userManagementOption[data])
                }
              />
              <p
                className={clsx(
                  userManagement === userManagementOption[data]
                    ? "text-primary"
                    : "text-[#949494]",
                  "font-semibold"
                )}
                onClick={() =>
                  userManagementChecker(userManagementOption[data])
                }
              >
                {userManagementOption[data]}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="card-box-shadow p-[16px]">
        <h1 className="text-textcolor100 text-[18px] font-semibold mb-[16px]">
          System Settings
        </h1>
        <div className="flex flex-col gap-[24px]">
          {Object.keys(systemSettingOption).map((data) => (
            <div
              key={data}
              className="flex gap-[16px] items-center cursor-pointer"
            >
              <RadioInput
                checked={systemSetting === systemSettingOption[data]}
                onClick={() => systemSettingChecker(systemSettingOption[data])}
              />
              <p
                className={clsx(
                  systemSetting === systemSettingOption[data]
                    ? "text-primary"
                    : "text-[#949494]",
                  "font-semibold"
                )}
                onClick={() => systemSettingChecker(systemSettingOption[data])}
              >
                {systemSettingOption[data]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
