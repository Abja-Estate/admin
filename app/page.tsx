import Image from "next/image"
import adminUserData from "@/data/admin-user.json"
import Link from "next/link"
import AuthLayout from "@/components/AuthLayout"

export default function Admin() {
  return (
    <AuthLayout>
      <>
        <div className="my-auto">
          <header className="grid place-items-center gap-6 pb-8">
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
            <p className="text-textcolor100 font-semibold text-center">
              Click to Login as the Admin you identify
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
            <Link href="/auth/login">
              <button className="text-white bg-primary grid place-items-center h-[38px] w-[234px] rounded-[6px]">
                Proceed
              </button>
            </Link>
          </div>
        </div>
      </>
    </AuthLayout>
  )
}
