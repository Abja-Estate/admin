import { setAdminProfile } from "@/redux/adminSlice"
import { useGetAdminQuery } from "@/redux/endpoints"
import { useAppDispatch } from "@/redux/hooks"
import { redirect } from "next/navigation"

const AdminAuthGuard = ({ Component }: { Component: React.FC }) => {
  const { data, error, isLoading } = useGetAdminQuery("")
  const dispatch = useAppDispatch()

  if (!data) {
    return <Component />
  } else if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    )
  } else if (error) {
    dispatch(setAdminProfile(null))
    // console.log(error);
    redirect("/login")
  }
}

export default AdminAuthGuard
