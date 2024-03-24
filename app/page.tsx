import { ArrowLeftIcon } from "@/components/svgs"
import authImage1 from "/public/images/auth-img-1.png"
import authImage2 from "/public/images/auth-img-2.svg"
import authImage3 from "/public/images/auth-img-3.svg"
import Image from "next/image"
import adminUserData from "@/data/admin-user.json"
import Link from "next/link"

export default function Admin() {
  return (
    <div className="flex">
      <figure className="relative basis-[35%]">
        <Image
          src={authImage3}
          draggable={false}
          alt="House"
          className="w-full h-full object-cover"
        />
        <button className="w-[40px] h-[40px] rounded-[100%] bg-white grid place-items-center top-[50px] left-[50px] absolute">
          <ArrowLeftIcon />
        </button>
      </figure>
      <div className="basis-[65%] bg-white">
        <div className="h-[230px] flex justify-between relative overflow-hidden">
          <Image
            src={authImage1}
            alt="House"
            draggable={false}
            className="absolute top-0 left-0"
          />
          <Image
            src={authImage2}
            alt="House"
            draggable={false}
            className="absolute top-0 right-0"
          />
        </div>
        <div className="px-[24px] pb-[230px]">
          <header className="grid place-items-center gap-[24px] pb-[32px]">
            <Image
              src="/images/abj-logo.svg"
              alt="Abj_logo"
              width={70}
              height={100}
              draggable={false}
              // className="bg-red-300"
            />
            <h1 className="text-primary text-[32px] font-bold">
              Welcome Back!
            </h1>
            <p className="text-textcolor100 font-semibold">
              Click to Login as the Admin you identify{" "}
            </p>
          </header>
          <div className="flex gap-[16px] max-w-max justify-around flex-wrap mx-auto">
            {adminUserData.map((user: adminUserType, i: number) => (
              <div key={i} className="w-[130px] grid place-items-center">
                <Image
                  src={user?.img}
                  alt={user?.name}
                  width={50}
                  height={50}
                  draggable={false}
                  className="mb-[8px]"
                />
                <h2 className="text-fade text-[12px]">{user?.role}</h2>
                <h1 className="text-textcolor100 font-semibold text-[14px]">
                  {user?.name}
                </h1>
              </div>
            ))}
          </div>
          <div className="pt-[60px] grid place-items-center">
            <Link href="/login">
              <button className="text-white bg-primary grid place-items-center h-[38px] w-[234px] rounded-[6px]">
                Proceed
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
