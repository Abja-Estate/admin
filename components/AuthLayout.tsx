"use client"
import { ArrowLeftIcon } from "@/components/svgs"
import authImage1 from "/public/images/auth-img-1.png"
import authImage2 from "/public/images/auth-img-2.svg"
import authImage3 from "/public/images/auth-img-3.svg"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function AuthLayout({
  children,
  backwardNavigate: bnv,
}: {
  children: JSX.Element
  backwardNavigate?: () => void
}) {
  const router = useRouter()

  const backwardNavigate = () => {
    if (bnv) {
      bnv()
      return
    }
    router.back()
  }

  // const dispatch = useDispatch();
  // const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  // const handleLogin = () => {
  //   // Dispatch the login action with user data
  //   dispatch(login({ id: 1, username: 'exampleUser' }));
  // };

  return (
    <div className="flex h-screen">
      <figure className="relative hidden md:block basis-[35%]">
        <Image
          src={authImage3}
          alt="House"
          className="w-full h-full object-cover"
        />
        <button
          onClick={backwardNavigate}
          className="w-[40px] h-[40px] rounded-[100%] bg-white grid place-items-center top-[50px] left-[50px] absolute"
        >
          <ArrowLeftIcon />
        </button>
      </figure>
      <div className="basis-full md:basis-[65%] h-full bg-white relative pt-[24px]">
        <Image
          src={authImage1}
          alt="House"
          draggable={false}
          className="absolute hidden lg:inline top-0 left-0 pointer-events-none z-10"
        />
        <Image
          src={authImage2}
          alt="House"
          draggable={false}
          className="absolute hidden lg:inline top-0 right-0 pointer-events-none z-10"
        />
        <div className="px-[24px] flex flex-col h-full overflow-auto pb-10">
          {children}
        </div>
      </div>
    </div>
  )
}
