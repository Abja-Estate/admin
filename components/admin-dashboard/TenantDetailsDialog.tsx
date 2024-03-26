import DialogLayout from "../DialogLayout"

const TenantDetailsDialog = ({
  open,
  setOpen,
}: {
  open: boolean
  setOpen: Function
}) => {
  return (
    <DialogLayout isOpen={open} setIsOpen={setOpen}>
      <div className="grid gap-3 grid-cols-2"></div>
    </DialogLayout>
  )
}

export default TenantDetailsDialog
