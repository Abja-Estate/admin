import AdminAuthGuard from "@/components/AdminAuthGuard"
import AdminDashboardLayout from "@/components/admin-pages/AdminDashboardLayout"
import nProgress from "nprogress"

export default function AuthD({ children }: { children: React.ReactNode }) {
  // const [isActive, setIsActive] = useState(true)
  // const dispatch = useAppDispatch()
  // const router = useRouter()

  // useEffect(() => {
  //   // Router.events.on("routeChangeStart", (url) => {
  //   //   console.log("Starting")
  //   nProgress.configure({ showSpinner: false })
  //   nProgress.start()
  //   // })

  //   Router.events.on("routeChangeComplete", (url) => {
  //     nProgress.done(false)
  //     console.log("done")
  //   })
  //   Router.events.on("routeChangeError", (url) => {
  //     // setIsLoading(false)
  //   })
  // }, [])

  return (
    // <StoreProvider>
    <AdminDashboardLayout>{children}</AdminDashboardLayout>
    // <AdminAuthGuard Component={() => AdminDashboardLayout({ children })} />
    // </StoreProvider>
  )
}
