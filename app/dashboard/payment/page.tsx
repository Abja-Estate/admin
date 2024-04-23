import dynamic from "next/dynamic"

const AdminPaymentPage = dynamic(
  () => import("../../../components/admin-dashboard/AdminPayment"),
  {
    ssr: false,
  }
)

export default AdminPaymentPage
