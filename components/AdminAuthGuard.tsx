import { setAdminProfile } from "@/redux/adminSlice"
import { useGetAdminQuery } from "@/redux/endpoints"
import { useAppDispatch } from "@/redux/hooks"
import { redirect, useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const AdminAuthGuard = ({ Component }: { Component: React.FC }) => {
  // const { data, error, isLoading } = useGetAdminQuery("")
  const dispatch = useAppDispatch()
  const router = useRouter()

  const [cv, setcv] = useState(<span></span>)

  useEffect(() => {
    const data =
      typeof window !== "undefined" ? localStorage.getItem("active-user") : "{}"
    console.log(data)
    try {
      if (data) {
        const parsed = JSON.parse(data)
        if (parsed.email) {
          dispatch(setAdminProfile(parsed))
          setcv(<Component />)
        } else {
          throw Error(`Can't find details: ${data}`)
        }
      } else {
        throw Error(`Can't find details: ${data}`)
      }
    } catch (error) {
      dispatch(setAdminProfile(null))
      router.push("/auth/login")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch])

  return cv

  // else if (isLoading) {
  //   return (
  //     <div className="flex h-screen items-center justify-center">
  //       Loading...
  //     </div>
  //   )
  // }
}

export default AdminAuthGuard
