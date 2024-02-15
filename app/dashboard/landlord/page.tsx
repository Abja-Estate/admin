'use client';
import { AddGreenIcon, ArrowGrowthWhiteIcon, CalenderOutlineIcon, ChevronLeftIconIcon, ChevronRightGreenIcon, DeleteRedIcon, DoubleCheckWhiteIcon, EditGreenIcon, FilterGreenIcon, HouseWhiteIcon, InformationIcon, MoreVertIcon, NotificationOutlineWhiteIcon, ProgressiveClockWhiteIcon, RequestIcon, SearchIcon, ShareIcon, ShareYellowIcon, TagIcon } from "@/components/svgs";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { fetchAdminRequests } from "@/utils/api";
import { BASE_URL } from "@/config";

export default function AdminLandord() {
    const [landlords, setRequests] = useState<any>(null)

    useEffect(() => {
        const fetchRequests = async (url: string, requestStateSetter: React.Dispatch<any>) => {
          try {
            const response = await fetchAdminRequests(`${BASE_URL}/service/admin/${url}`);
            if (response.statusCode === 200) {
              console.log('data', response.data);
              requestStateSetter(response.data.data);
            } else {
              console.error("Error fetching landlords:", response.error);
            }
          } catch (error) {
            console.error("Error fetching landlords:", error);
          }     
        };
 
        fetchRequests("all_landlords", setRequests);
    
      }, [BASE_URL]);

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
            <div className="my-[24px]">
                <Link href="/landlord">
                    <span className="text-[#47893F] font-bold text-[22px]">Landlords /</span>
                </Link>
            </div>
            <div className='w-full flex justify-between py-[12px] px-[22px] bg-white mt-[30px]'>
                <div className='w-full max-w-[584px] items-center flex gap-[16px]'>
                    <SearchIcon />
                    <input className='flex-1 w-full placeholder-[#828282] text-[14px]' placeholder='Search' />
                </div>
                <div className="flex items-center gap-[24px]">
                    <button className="px-[8px] py-[4px] text-[14px] flex gap-[8px] items-center bg-[#B5D0B2] text-[#47893F] rounded-[4px]">
                        <FilterGreenIcon />
                        Filter
                    </button>
                    <button className="px-[8px] py-[4px] text-[14px] flex gap-[8px] items-center bg-[#B5D0B2] text-[#47893F] rounded-[4px]">
                        <ShareIcon />
                        Export
                    </button>
                    <button className="px-[8px] py-[4px] text-[14px] flex gap-[8px] items-center bg-[#B5D0B2] text-[#47893F] rounded-[4px]">
                        <CalenderOutlineIcon />
                        Sept 2023
                    </button>
                </div>
            </div>
            <div className='mt-[30px] text-[14px]'>
                <header className='h-[44px] bg-[#47893F] w-full p-[10px] items-center gap-[20px] text-white grid grid-cols-[20px_1fr_1fr_1fr_1fr_1fr_1fr_1fr] mb-2'>
                    <div>
                        <div className='border-[1px] border-white rounded-[4px] w-[20px] h-[20px]'></div>
                    </div>
                    <p>Landlord</p>
              
                    <p>Email Address</p>
                    <p>Photo</p>
                    <p>Status</p>
                    <p>Action</p> 
                </header>
                <div className='flex flex-col gap-2'>
                {landlords && landlords.map((landlord: any, i: number) => (
                        <div key={i} className='bg-white w-full p-[10px] gap-[20px] grid grid-cols-[20px_1fr_1fr_1fr_1fr_1.4fr_1fr_1fr] mb-2'>
                            <div>
                                <div className='border-[1px] border-[#828282] rounded-[4px] w-[20px] h-[20px]'></div>
                            </div>
                            <div>
                                <div className='flex items-center gap-[5px] mb-[2px]'>
                                    <Image src="/images/landlord-emoji.svg" alt="Landlord Emoji" width={24} height={24} />
                                    <p className='text-[#4f4f4f]'>{landlord.name} {" "}{landlord.name}</p>
                                </div>
                                <p className="text-[10px] text-[#949494]">{landlord.phone}</p>
                            </div>
            
                            <p>{landlord.email}</p>
                            <div className='flex items-center gap-[5px] mb-[2px]'>
                                {/* <Image src={`${landlord.selfie}`} alt="Tenant Emoji" width={24} height={24} /> */}
                
                            </div>
                            <p>{landlord.active ? "active" : "not active"}</p>
                            <div className='flex items-center gap-2 h-fit'>
                                <EditGreenIcon />
                                <ShareYellowIcon /> 
                                <DeleteRedIcon />
                                <MoreVertIcon />
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex mt-[30px] items-center justify-between'>
                    <button className='border-[#828282] text-[#828282] rounded-[6px] px-[8px] py-[4px] border-[1px] flex gap-2 items-center'>
                        <ChevronLeftIconIcon />
                        Previous
                    </button>
                    <div className='flex items-center gap-2'>
                        <button className='w-[27px] h-[27px] rounded-[6px] bg-[#B5D0B2] text-[#47893F] grid place-items-center'>
                            1
                        </button>
                        <button className='w-[27px] h-[27px] rounded-[6px] bg-white text-[#828282] grid place-items-center'>
                            2
                        </button>
                        <button className='w-[27px] h-[27px] rounded-[6px] bg-white text-[#828282] grid place-items-center'>
                            3
                        </button>
                        <button className='w-[27px] h-[27px] rounded-[6px] bg-white text-[#828282] grid place-items-center'>
                            ...
                        </button>
                        <button className='w-[27px] h-[27px] rounded-[6px] bg-white text-[#828282] grid place-items-center'>
                            8
                        </button>
                        <button className='w-[27px] h-[27px] rounded-[6px] bg-white text-[#828282] grid place-items-center'>
                            9
                        </button>
                        <button className='w-[27px] h-[27px] rounded-[6px] bg-white text-[#828282] grid place-items-center'>
                            10
                        </button>
                    </div>
                    <button className='text-[#47893F] bg-[#B5D0B2] rounded-[6px] px-[8px] py-[4px] border-[1px] flex gap-5 items-center'>
                        Next
                        <ChevronRightGreenIcon />
                    </button>
                </div>
            </div>
        </>
    )
}