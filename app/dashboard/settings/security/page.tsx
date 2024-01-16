"use client"

import Input from "@/components/input"
import SwitchToggle from "@/components/switchToggle"
import { useState } from "react"

export default function Security() {

    const [enable2FA, setEnable2FA] = useState(false);

    const toggleEnable2FA = () => setEnable2FA(prev => !prev);

    return (
        <div className="p-[40px] rounded-[10px] border-[1px] border-[#7F947B] bg-white w-full max-w-[672px]">
            <header className="flex items-center justify-between pb-[16px] border-b-[1px] border-b-[#2A4C23] mb-[38px]">
                <div>
                    <h1 className="text-[333436] text-[24px] font-semibold mb-[8px]">Security</h1>
                    <p className="text-[#949494] font-semibold">Choose a billing plan that caters to you</p>
                </div>
                <div className="my-auto flex gap-[16px] items-center">
                    <button className="text-[#949494] bg-transparent border-[1px] border-[#949494] text-[14px] w-[106px] h-[39px] rounded-[8px]">Cancel</button>
                    <button className="text-white bg-primary text-[14px] w-[106px] h-[39px] rounded-[10px]">Save</button>
                </div>
            </header>
            <div className="mb-[40px]">
                <header className="mb-[16px]">
                    <h1 className="text-[18px] font-semibold">Change Password</h1>
                </header>
                <form className="w-full max-w-[425px] flex flex-col gap-[24px]">
                    <fieldset>
                        <label className="mb-[8px] inline-block">Current Password</label>
                        <Input type="password" placeholder="Enter Password" className="shadow-[0px_1px_1px_0px_#00000040]" />
                    </fieldset>
                    <fieldset>
                        <label className="mb-[8px] inline-block">New Password</label>
                        <Input type="password" placeholder="*****************" className="shadow-[0px_1px_1px_0px_#00000040]" />
                    </fieldset>
                    <fieldset>
                        <label className="mb-[8px] inline-block">Confirm Password</label>
                        <Input type="password" placeholder="*****************" className="shadow-[0px_1px_1px_0px_#00000040]" />
                    </fieldset>
                </form>
            </div>
            <div className="w-full max-w-[425px]">
                <h1 className="text-[18px] font-semibold mb-[8px]">Two-Factor Authentication</h1>
                <div className="flex gap-[40px]">
                    <p className="text-[#949494]">Keep your account extra secure by enabling 2FA. Along with your password, you&rsquo;ll need to enter a code.</p>
                    <div>
                    <SwitchToggle isOn={enable2FA} onClick={toggleEnable2FA} />
                    </div>
                </div>
            </div>
        </div>
    )
}