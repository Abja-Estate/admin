import DialogLayout from "../DialogLayout"
import FormField from "../inputs/FormField"
import { useAppDispatch } from "@/redux/hooks"
import { addRequestInputs, addRequestSchema } from "@/utils/schema"
import MemoPriorityBadge from "./PriorityBadge"
import { useFormik } from "formik"
import { getDefault, getDefaultTimeValue } from "@/utils/helpers"
import { GetUnit, RequestDetails } from "@/utils/types"
import StatusBadge from "./StatusBadge"
import { useCallback, useEffect } from "react"
import {
  useGetLandlordMutation,
  useGetTenantByUnitMutation,
  useUpdateRequestMutation,
} from "@/redux/endpoints"
import { AnyObject } from "yup"
import toast from "react-hot-toast"
import moment from "moment"

export default function RequestDialog({
  setIsOpen,
  isOpen,
  request,
  ...props
}: {
  className?: string
  isOpen: boolean
  request?: RequestDetails
  setIsOpen: Function
}) {
  const [getLandlord] = useGetLandlordMutation()
  const [getTenant] = useGetTenantByUnitMutation()
  const [updateRequest] = useUpdateRequestMutation()

  const getProps = (name: string) => {
    return (
      addRequestInputs.find((each) => each.name == name) ?? addRequestInputs[0]
    )
  }

  const formik = useFormik({
    initialValues: getDefault(addRequestInputs),
    validationSchema: addRequestSchema,
    onSubmit: (values: AnyObject) => {
      if (request) {
        const requestData: RequestDetails = {
          ...request,
          status: values.status,
          day: moment(values.day).format("D MMMM YYYY"),
          agent: values.agent,
          priority: values.priority,
          description: values.description,
          servicePersonnelName: values.servicePersonnelName,
          servicePersonnelPhone: values.servicePersonnelPhone,
        }
        updateRequest(requestData)
          .unwrap()
          .then((resp) => {
            console.log(resp)

            toast.success("Request updated successfully")
          })
      }
    },
  })

  // const getLandlordDet = useCallback(
  //   async (id: string) => {
  //     getLandlord({ landlordID: id })
  //       .unwrap()
  //       .then((resp) => {
  //         console.log(resp)
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })

  //     // formik.setValues({ ...formik.values, landlord:"" } ?? {})
  //   },
  //   [getLandlord]
  // )

  // const getTenantDet = useCallback(
  //   async (details: GetUnit) => {
  //     getTenant(details)
  //       .unwrap()
  //       .then((resp) => {
  //         console.log(resp)
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //       })

  //     // formik.setValues({ ...formik.values, landlord:"" } ?? {})
  //   },
  //   [getTenant]
  // )

  useEffect(() => {
    if (request) {
      const originalDate = new Date(request.day)
      const year = originalDate.getFullYear()
      const month = (originalDate.getMonth() + 1).toString().padStart(2, "0")
      const day = originalDate.getDate().toString().padStart(2, "0")
      const formattedDate = year + "-" + month + "-" + day
      formik.setValues({
        ...formik.values,
        ...request,
        day: formattedDate,
        landlord: request.fullName,
        landlord_contact: request.phone,
        tenant: request.fullName,
        tenant_contact: request.phone,
        start_time: getDefaultTimeValue(request.period, false),
        end_time: getDefaultTimeValue(request.period, true),
      })

      // getLandlord({ landlordID: request.landlordID })
      //   .unwrap()
      //   .then((resp) => {
      //     console.log(resp)
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })

      // getTenantDet({
      //   landlordID: request.landlordID,
      //   unitID: request.tenantUnit,
      //   propertyID: "",
      // })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [request])

  return (
    <>
      <DialogLayout setIsOpen={setIsOpen} isOpen={isOpen} noToggle {...props}>
        <form
          onSubmit={formik.handleSubmit}
          className="w-screen max-h-[90vh] overflow-auto max-w-[70vw] md:max-w-2xl"
        >
          <div className="flex gap-2 md:gap-4 border-b pb-3 border-textcolor100 items-center">
            <h3 className="text-fade">Ticket:</h3>
            <h3>{request?.ticket}</h3>
          </div>
          <div className="my-4 w-full grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-3">
            {request?.from == "landlord" && (
              <>
                <FormField
                  formik={formik}
                  {...getProps("landlord")}
                  t
                  disabled
                />
                <FormField
                  formik={formik}
                  {...getProps("landlord_contact")}
                  t
                  disabled
                />
              </>
            )}
            {request?.from == "tenant" && (
              <>
                <FormField formik={formik} {...getProps("tenant")} t disabled />
                <FormField
                  formik={formik}
                  {...getProps("tenant_contact")}
                  t
                  disabled
                />
              </>
            )}
            <FormField formik={formik} {...getProps("agent")} t />
            <FormField formik={formik} {...getProps("day")} t />
            {/* <FormField formik={formik} {...getProps("start_time")} t />
            <FormField formik={formik} {...getProps("end_time")} t /> */}
            {/* <FormField {...getProps("period")} t /> */}
            <FormField
              formik={formik}
              {...getProps("status")}
              t
              options={[
                {
                  label: <StatusBadge status="pending" />,
                  value: "Pending",
                },
                {
                  label: <StatusBadge status="accepted" />,
                  value: "accepted",
                },
                {
                  label: <StatusBadge status="completed" />,
                  value: "completed",
                },
              ]}
            />
            <FormField
              formik={formik}
              {...getProps("priority")}
              t
              options={[
                {
                  label: <MemoPriorityBadge status="High Priority" />,
                  value: "High Priority",
                },
                {
                  label: <MemoPriorityBadge status="Medium Priority" />,
                  value: "Medium Priority",
                },
                {
                  label: <MemoPriorityBadge status="Low Priority" />,
                  value: "Low Priority",
                },
              ]}
            />

            <FormField
              formik={formik}
              disabled
              {...getProps("propertyLocation")}
              t
              className="col-span-full"
            />
            <FormField
              formik={formik}
              {...getProps("description")}
              t
              className="col-span-full"
            />
            <FormField
              formik={formik}
              {...getProps("servicePersonnelName")}
              t
            />
            <FormField
              formik={formik}
              {...getProps("servicePersonnelPhone")}
              t
            />
          </div>
          <div className="pt-4 px-4 border-t border-textcolor100 flex items-center flex-wrap gap-4 justify-evenly">
            {/* <button type="button" className="outlinebtn">
              Add Unit
            </button> */}
            <button
              type="submit"
              onClick={() => {
                // dispatch(openRespDialog({
                //   title:""
                // }))
              }}
              className="filledbtn"
            >
              Save Request
            </button>
          </div>
        </form>
      </DialogLayout>
    </>
  )
}
