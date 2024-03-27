import { setAdminProfile } from "@/redux/adminSlice"
import { useGetAdminQuery } from "@/redux/endpoints"
import { useAppDispatch } from "@/redux/hooks"
import { redirect } from "next/navigation"

const AdminAuthGuard = ({ Component }: { Component: React.FC }) => {
  // const { data, error, isLoading } = useGetAdminQuery("")
  const dispatch = useAppDispatch()
  const data = localStorage.getItem("active-user")
  try {
    if (data) {
      dispatch(setAdminProfile(JSON.parse(data)))
      return <Component />
    } else {
      throw Error(`Can't find details: ${data}`)
    }
  } catch (error) {
    dispatch(setAdminProfile(null))
    redirect("/auth/login")
  }
  // else if (isLoading) {
  //   return (
  //     <div className="flex h-screen items-center justify-center">
  //       Loading...
  //     </div>
  //   )
  // }
}

export default AdminAuthGuard
