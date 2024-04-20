import MemoNoRecord from "@/components/NoRecord"
import Button from "@/components/button"
import { CancelIcon, MoreVertIcon, StarIcon } from "@/components/svgs"
import Image from "next/image"
import Link from "next/link"

export default function RecentPayments() {
  const payments: any[] = [
    // {
    //   image: "/images/payments-profile-img-1.svg",
    //   name: "Bryan Umar",
    //   type: "tenancy",
    //   amount: "$600.00",
    //   date: "20 Oct, 2023",
    //   phone: "(+256) 567890123",
    // },
    // {
    //   image: "/images/payments-profile-img-2.svg",
    //   name: "Susan Okello",
    //   type: "Service",
    //   amount: "$600.00",
    //   date: "20 Oct, 2023",
    //   phone: "(+256) 567890123",
    // },
    // {
    //   image: "/images/payments-profile-img-3.svg",
    //   name: "Akello Umar",
    //   type: "Service",
    //   amount: "$600.00",
    //   date: "20 Oct, 2023",
    //   phone: "(+256) 567890123",
    // },
  ]
  return (
    <div className="grid grid-cols-11 gap-[23px]">
      <div className="col-span-full flex flex-col md:col-span-5">
        <header className="bg-white px-[26px] py-[8px] mb-[8px] text-[22px] font-semibold rounded-t-[5px] text-textcolor100">
          <h1>Recent Payments</h1>
        </header>
        <div className="mb-[8px] h-full">
          {!payments.length && (
            <div className="flex bg-white h-full rounded mb-2 py-10 gap-3 items-center justify-center flex-col">
              <MemoNoRecord className="w-20" />
              <p className="text-primary text-sm">No payment yet</p>
            </div>
          )}
          {payments.map((each) => (
            <div
              key={each.image}
              className="w-full py-[10px] px-[26px] bg-white mb-[2px]"
            >
              <div className="mb-[8px] flex gap-[20px] justify-between">
                <div className="w-[173px] flex items-center gap-[8px]">
                  <Image
                    src={each.image}
                    alt="Profile"
                    width={24}
                    height={24}
                    draggable={false}
                  />
                  <p className="text-[#4F4F4F] text-[14px]">{each.name}</p>
                </div>
                <div
                  className={` ${
                    each.type == "tenancy" ? "bg-[#FFE8DF] " : "bg-[#E3D5E6]"
                  } rounded-[8px] px-[8px] py-[4px] flex gap-[8px] items-center`}
                >
                  <span
                    className={`h-[4px] w-[4px]  ${
                      each.type == "tenancy" ? "bg-[#FF8B60]" : "bg-[#722E83]"
                    } rounded-[100%]`}
                  ></span>
                  <p
                    className={`text-[10px] ${
                      each.type == "tenancy"
                        ? "text-[#FF8B60]"
                        : "text-[#722E83]"
                    }  capitalize`}
                  >
                    {each.type}
                  </p>
                </div>
                <p className="text-[14px] text-[#4F4F4F]">{each.amount}</p>
                <p className="text-[14px] text-[#4F4F4F]">{each.date}</p>
                <MoreVertIcon />
              </div>
              <p className="text-[#949494] text-[10px]">{each.phone}</p>
            </div>
          ))}
        </div>
        <div>
          <Link href={`/dashboard/payment`}>
            <Button className="!text-[14px] !h-[35px]">See All Payments</Button>
          </Link>
        </div>
      </div>
      <div className="col-span-full md:col-span-6 px-[20px] py-[13px] bg-white rounded-[15px] flex flex-col gap-[12px] flex-1">
        <div className="flex justify-between">
          <div className="flex gap-[8px]">
            <Image
              src="/images/ratings-star.svg"
              width={40}
              height={40}
              alt="Ratings star"
            />
            <div>
              <h1 className="text-[14px] font-semibold text-textcolor100">
                Reviews
              </h1>
              <p className="text-[#949494] text-[10px]">
                Feedback provided by clients and service providers
              </p>
            </div>
          </div>
          <div>
            <CancelIcon />
          </div>
        </div>
        <div className="flex gap-[8px] items-center">
          <h1 className="text-[32px]">00</h1>
          <div className="h-[32px] border-l-[#949494] border-l-[1px] pl-[5px]">
            <div className="flex mb-[8px]">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} />
              ))}
            </div>
            <div className="flex gap-[8px] text-[10px]">
              <p className="font-light">0</p>
              <p>0 Ratings</p>
              <p className="underline">0 reviews</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[12px]">
          <Rating percent="100%" ratings="5.0" />
          <Rating percent="80%" ratings="4.0" />
          <Rating percent="60%" ratings="3.0" />
          <Rating percent="40%" ratings="2.0" />
          <Rating percent="20%" ratings="1.0" />
        </div>
        <div className="mt-auto">
          <Button className="!text-[14px] !h-[35px]">View All Reviews</Button>
        </div>
      </div>
    </div>
  )
}

interface RatingsProps {
  percent: string
  ratings: string
}

const Rating = ({ percent, ratings }: RatingsProps) => {
  return (
    <div className="flex items-center gap-[5px]">
      <div className="flex-1 h-[7px] bg-[#EDF2F7] rounded-[29px] overflow-hidden">
        <div
          style={{ width: percent }}
          className="h-[7px] bg-[#FFD600] rounded-[29px]"
        ></div>
      </div>
      <div className="flex items-center gap-[3px]">
        <span className="text-textcolor100 text-[10px] font-light">
          {ratings}
        </span>
        <div className="-mt-[3.8px]">
          <StarIcon />
        </div>
      </div>
    </div>
  )
}
