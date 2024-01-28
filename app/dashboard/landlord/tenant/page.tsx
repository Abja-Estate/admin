import { AddGreenIcon, ArrowGrowthWhiteIcon, DeleteRedIcon, HouseWhiteIcon, InformationIcon, LocationIcon, NotificationOutlineWhiteIcon, ProgressiveClockWhiteIcon, ShareYellowIcon } from "@/components/svgs";
import Image from "next/image";
import Link from "next/link";

export default function Tenant() {

    return (
        <>
            <header>
                <div className="bg-white h-[55px] px-[16px] flex items-center justify-between rounded-t-[10px] mb-[8px]">
                    <h1 className="text-[#949494] text-[18px]">Today at a glance</h1>
                    <button className="px-[8px] py-[4px] text-[14px] flex gap-[8px] items-center bg-[#B5D0B2] text-[#47893F] rounded-[4px]">
                        <AddGreenIcon />
                        Add Request
                    </button>
                </div>
                <div className="p-[22px] rounded-b-[10px] w-[1156px] flex bg-white gap-[16px]">
                    <div className="w-[260px] h-[174px] bg-[#2F80ED] flex flex-col justify-between rounded-[10px] px-[15px] py-[10px]">
                        <div className="flex text-white justify-between h-[40px] gap-[10px]">
                            <h1>Total Number of Landlords</h1>
                            <HouseWhiteIcon />
                        </div>
                        <div className="flex gap-[10px]">
                            <h1 className="text-white text-[34px] font-semibold">179</h1>
                            <div className="flex items-center gap-[5px] mt-[10px]">
                                <ArrowGrowthWhiteIcon />
                                <p className="text-white text-[14px] font-semibold">17%</p>
                            </div>
                        </div>
                        <div className="text-white flex justify-between items-center text-[12px]">
                            <p>7 Requests made</p>
                            <p>View</p>
                        </div>
                    </div>
                    <div className="w-[260px] h-[174px] bg-[#6FCF97] flex flex-col justify-between rounded-[10px] px-[15px] py-[10px]">
                        <div className="flex justify-between text-white h-[40px] gap-[10px]">
                            <h1>Total Number of Properties</h1>
                            <NotificationOutlineWhiteIcon />
                        </div>
                        <div className="flex gap-[10px]">
                            <h1 className="text-white text-[34px] font-semibold">524</h1>
                            <div className="flex items-center gap-[5px] mt-[10px]">
                                <ArrowGrowthWhiteIcon />
                                <p className="text-white text-[14px] font-semibold">17%</p>
                            </div>
                        </div>
                        <div className="text-white flex justify-between items-center text-[12px]">
                            <p>7 Requests made</p>
                            <p>View</p>
                        </div>
                    </div>
                    <div className="w-[260px] h-[174px] bg-[#B0BEC5] flex flex-col justify-between rounded-[10px] px-[15px] py-[10px]">
                        <div className="flex justify-between text-white h-[40px] gap-[10px]">
                            <h1>Total Number of Requests</h1>
                            <ProgressiveClockWhiteIcon />
                        </div>
                        <div className="flex gap-[10px]">
                            <h1 className="text-white text-[34px] font-semibold">102</h1>
                            <div className="flex items-center gap-[5px] mt-[10px]">
                                <ArrowGrowthWhiteIcon />
                                <p className="text-white text-[14px] font-semibold">17%</p>
                            </div>
                        </div>
                        <div className="text-white flex justify-between items-center text-[12px]">
                            <p>8 Requests made</p>
                            <p>View</p>
                        </div>
                    </div>
                </div>
            </header>
            <div className="my-[24px] flex items-center gap-2">
                <Link href="/landlord">
                    <span className="text-[#47893F] font-bold text-[22px]">Landlords /</span>
                </Link>
                <Link href="/landlord">
                    <span className="text-[#47893F] font-bold text-[22px]">Landlord&rsquo;s Tenant /</span>
                </Link>
            </div>
            <div className='w-full flex items-center justify-between py-[16px] px-[22px] bg-white'>
                <div className="flex gap-[20px]">
                    <Image src='/images/tenant-profile-img.svg' alt="Tenant Profile" width={100} height={100} />
                    <div className="py-[8px]">
                        <h1 className="text-[#333436] text-[18px] font-semibold mb-[12px]">Akello Buma</h1>
                        <div className="flex items-center gap-[19px] text-[#949494] mb-[4.5px]">
                            <p>@AkelloBuma</p>
                            <div className="bg-[#333436] w-[1px] h-[19px]"></div>
                            <p>(+256) 567890123</p>
                        </div>
                        <div className="gap-[16px] flex items-center">
                            <LocationIcon />
                            <p className="text-[#949494] text-[14px]">Kampala, Uganda</p>
                        </div>
                    </div>
                </div>
                <div>
                    <button className="text-white w-[140px] h-[38px] grid place-items-center rounded-[6px] bg-[#2A4C23]">
                        View Profile
                    </button>
                </div>
            </div>
            <div className='mt-[30px] text-[14px]'>
                <header className='h-[44px] bg-[#47893F] w-full p-[10px] items-center gap-[20px] text-white grid grid-cols-[20px_1fr_1fr_1fr_1fr_1fr_1fr_1fr] mb-2'>
                    <div>
                        <div className='border-[1px] border-white rounded-[4px] w-[20px] h-[20px]'></div>
                    </div>
                    <p>Landlord</p>
                    <p>Address</p>
                    <p>Email Address</p>
                    <p>Properties</p>
                    <p>Tenants</p>
                    <p>Request Status</p>
                    <p>Action</p>
                </header>
                <div className='flex flex-col gap-2'>
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className='bg-white w-full p-[10px] gap-[20px] grid grid-cols-[20px_1fr_1fr_1fr_1fr_1.4fr_1fr_1fr] mb-2'>
                            <div>
                                <div className='border-[1px] border-[#828282] rounded-[4px] w-[20px] h-[20px]'></div>
                            </div>
                            <div>
                                <div className='flex items-center gap-[5px] mb-[2px]'>
                                    <Image src="/images/landlord-emoji.svg" alt="Landlord Emoji" width={24} height={24} />
                                    <p className='text-[#4f4f4f]'>Akello Buma</p>
                                </div>
                                <p className="text-[10px] text-[#949494]">(+256) 567890123</p>
                            </div>
                            <p>Kampala, Uganda</p>
                            <p>akello.buma@gmail.com</p>
                            <p>& Properties</p>
                            <div className='flex items-center gap-[5px] mb-[2px]'>
                                <Image src="/images/tenant-emoji.svg" alt="Tenant Emoji" width={24} height={24} />
                                <Image src="/images/tenant-emoji.svg" alt="Tenant Emoji" className="-ml-3" width={24} height={24} />
                                <Image src="/images/tenant-emoji.svg" alt="Tenant Emoji" className="-ml-3" width={24} height={24} />
                                <p className='pl-2 text-[#4f4f4f]'>+10 persons</p>
                            </div>
                            <div className="bg-[#B5D0B2] rounded-[8px] px-[8px] py-[4px] flex gap-[8px] items-center h-fit">
                                <span className="h-[4px] w-[4px] bg-[#47893F] rounded-[100%]"></span><p className="text-[10px] text-[#47893F]">Completed</p>
                            </div>
                            <div className='flex items-center gap-2 h-fit'>
                                <InformationIcon />
                                <ShareYellowIcon />
                                <DeleteRedIcon />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}