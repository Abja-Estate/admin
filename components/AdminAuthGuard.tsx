import { setAdminProfile } from "@/redux/adminSlice"
import { appApi, useGetAnAdminMutation } from "@/redux/endpoints"
import { useAppDispatch } from "@/redux/hooks"
import { isBrowser } from "@/utils/helpers"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const AdminAuthGuard = ({ Component }: { Component: React.FC }) => {
  // const { data, error, isLoading } = useGetAdminQuery("")
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [getAdminDetails] = useGetAnAdminMutation()

  const [cv, setcv] = useState(
    <span className="h-screen flex items-center justify-center text-sm">
      Loading...
    </span>
  )

  useEffect(() => {
    const data = isBrowser ? localStorage.getItem("active-user") ?? "{}" : "{}"

    const fetchData = async (adminID: string) => {
      const resp = await getAdminDetails({ adminID })
      if ("data" in resp) {
        dispatch(setAdminProfile({ ...resp.data, role: "3" }))
        setcv(<Component />)
      } else {
        dispatch(setAdminProfile(null))
        router.push("/auth/login")
      }
    }

    try {
      if (data) {
        const parsed = JSON.parse(data)
        if (parsed.email && parsed._id) {
          fetchData(parsed._id)
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
