import { useDeleteTenantMutation } from "@/redux/endpoints"
import AreYouSure from "../AreYouSure"
import DialogLayout from "../DialogLayout"
import { AreYouSureProps } from "@/utils/types"
import { useState } from "react"
import { AnyObject } from "yup"
import toast from "react-hot-toast"

const TenantDetailsDialog = ({
  open,
  setOpen,
  tenant,
}: {
  tenant: any
  open: boolean
  setOpen: Function
}) => {
  const [cDIO, setCDIO] = useState<AreYouSureProps>({ status: false })
  const [deleteATenant] = useDeleteTenantMutation()
  const deleteTenantCaution = (data: any) => {
    setCDIO({
      status: true,
      data,
      type: "deleteUser",
      action: deleteTenant,
      desc: `Are you sure you want to delete this user?`,
    })
  }

  const deleteTenant = async (_tenant: any) => {
    const response: AnyObject = await deleteATenant(_tenant._id)
    if (response.data) {
      // dispatch(
      //   openRespDialog({
      //     self: false,
      //     type: "success",
      //     desc: response.data.message,
      //     title: "Deleted!",
      //   })
      // )
      toast.success("Tenant Deleted")
    } else if (response.error) {
      toast.error("An error occured")
      // dispatch(
      //   openRespDialog({
      //     self: false,
      //     type: "error",
      //     desc: response.error.message,
      //     title: "Oops!",
      //   })
      // )
    }
  }

  return (
    <DialogLayout isOpen={open} setIsOpen={setOpen}>
      <>
        <div className="grid gap-3 grid-cols-2"></div>

        <AreYouSure aYSD={cDIO} setAYSD={setCDIO} />
      </>
    </DialogLayout>
  )
}

export default TenantDetailsDialog
