import React, { useEffect, useRef, useState } from "react"
import DialogLayout from "../DialogLayout"
import { UserData } from "@/utils/types"
import { useFormik } from "formik"
import { addAdminInputs, addAdminSchema } from "@/utils/schema"
import { getDefault } from "@/utils/helpers"
import FormField from "../inputs/FormField"
import Image from "next/image"
import {
  useRegisterAdminMutation,
  useUpdateAdminMutation,
} from "@/redux/endpoints"
import toast from "react-hot-toast"

const AdminDialog = ({
  open,
  setOpen,
  admin,
  setDone,
}: {
  open: boolean
  setOpen: Function
  setDone: Function
  admin?: UserData | null
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [images, setImages] = useState<File[]>([])
  const [addAdmin, { isLoading: adding }] = useRegisterAdminMutation()
  const [updateAdmin, { isLoading: saving }] = useUpdateAdminMutation()

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      const imageFiles = Array.from(files).filter((file) =>
        file.type.startsWith("image/")
      )
      // setImages((prevImages) => [...prevImages, ...imageFiles]);
      setImages(imageFiles)
    }
  }

  const add_f = useFormik<any>({
    validationSchema: addAdminSchema,
    initialValues: { ...getDefault(addAdminInputs), selfie: "" },
    onSubmit: async (values) => {
      const fileToBase64 = (file: File) => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = () => resolve(reader.result as string)
          reader.onerror = (error) => reject(error)
        })
      }

      const details = {
        ...values,
        confirmPassword: values.password,
        selfie: images.length > 0 ? await fileToBase64(images[0]) : "", // convert image[0] to base64 here
        actor: "admin",
      }

      const response = await (admin ? updateAdmin(details) : addAdmin(details))
      if ("data" in response) {
        setOpen(false)
        setDone(true)
        setImages([])
      }
    },
  })

  useEffect(() => {
    admin && add_f.setValues(admin)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [admin])

  useEffect(() => {
    !open && add_f.resetForm()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  return (
    <DialogLayout isOpen={open} setIsOpen={setOpen} noPadding>
      <form
        onSubmit={add_f.handleSubmit}
        className="w-svw max-w-[80vw] md:max-w-[45rem]"
      >
        <div className="border-b py-3 px-5 gap-6 border-primary flex items-center justify-between">
          Add Admin
          <button type="button" onClick={() => setOpen(false)}>
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 3.41L13.09 0.5L8 5.59L2.91 0.5L0 3.41L5.09 8.5L0 13.59L2.91 16.5L8 11.41L13.09 16.5L16 13.59L10.91 8.5L16 3.41Z"
                fill="#3A3A3A"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-3 py-6 px-5">
          <input
            type="file"
            name="selfie"
            accept="image/*"
            style={{ display: "none" }}
            ref={fileInputRef}
            onChange={(e) => {
              handleImageChange(e)
              add_f.handleChange(e)
            }}
          />
          <div
            onClick={() => fileInputRef.current?.click()}
            className="w-14 cursor-pointer flex items-center justify-center h-14 min-w-14 rounded-full overflow-hidden bg-bgprimaryfade"
          >
            {!images.length && (
              <svg
                width="24"
                height="30"
                viewBox="0 0 24 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12.0007 0.666992C10.321 0.666992 8.71011 1.33425 7.52238 2.52198C6.33465 3.70971 5.66739 5.32062 5.66739 7.00033C5.66739 8.68003 6.33465 10.2909 7.52238 11.4787C8.71011 12.6664 10.321 13.3337 12.0007 13.3337C13.6804 13.3337 15.2913 12.6664 16.4791 11.4787C17.6668 10.2909 18.3341 8.68003 18.3341 7.00033C18.3341 5.32062 17.6668 3.70971 16.4791 2.52198C15.2913 1.33425 13.6804 0.666992 12.0007 0.666992ZM7.66739 7.00033C7.66739 5.85105 8.12394 4.74885 8.9366 3.9362C9.74925 3.12354 10.8515 2.66699 12.0007 2.66699C13.15 2.66699 14.2522 3.12354 15.0649 3.9362C15.8775 4.74885 16.3341 5.85105 16.3341 7.00033C16.3341 8.1496 15.8775 9.2518 15.0649 10.0645C14.2522 10.8771 13.15 11.3337 12.0007 11.3337C10.8515 11.3337 9.74925 10.8771 8.9366 10.0645C8.12394 9.2518 7.66739 8.1496 7.66739 7.00033ZM12.0007 15.3337C8.91673 15.3337 6.07406 16.035 3.96873 17.219C1.89406 18.387 0.334059 20.155 0.334059 22.3337V22.4697C0.332726 24.019 0.331392 25.963 2.03673 27.3523C2.87539 28.035 4.05006 28.5217 5.63673 28.8417C7.22606 29.1643 9.29939 29.3337 12.0007 29.3337C14.7021 29.3337 16.7741 29.1643 18.3661 28.8417C19.9527 28.5217 21.1261 28.035 21.9661 27.3523C23.6714 25.963 23.6687 24.019 23.6674 22.4697V22.3337C23.6674 20.155 22.1074 18.387 20.0341 17.219C17.9274 16.035 15.0861 15.3337 12.0007 15.3337ZM2.33406 22.3337C2.33406 21.199 3.16339 19.967 4.94873 18.963C6.70339 17.9763 9.19406 17.3337 12.0021 17.3337C14.8074 17.3337 17.2981 17.9763 19.0527 18.963C20.8394 19.967 21.6674 21.199 21.6674 22.3337C21.6674 24.0777 21.6141 25.059 20.7021 25.8003C20.2087 26.203 19.3821 26.5963 17.9687 26.8817C16.5594 27.167 14.6327 27.3337 12.0007 27.3337C9.36873 27.3337 7.44073 27.167 6.03273 26.8817C4.61939 26.5963 3.79273 26.203 3.29939 25.8017C2.38739 25.059 2.33406 24.0777 2.33406 22.3337Z"
                  fill="#949494"
                />
              </svg>
            )}

            {images[0] && (
              <>
                {images.map((image, index) => (
                  <Image
                    width={200}
                    height={200}
                    key={index + "img"}
                    src={URL.createObjectURL(image)}
                    alt={`Preview ${index}`}
                    className="w-full h-full object-cover"
                  />
                ))}
              </>
            )}
          </div>

          <div className="w-full grid grid-cols-2 gap-x-8 gap-y-3">
            {addAdminInputs.map((each) => (
              <FormField
                key={each.name}
                t
                formik={add_f}
                {...{
                  ...each,
                  className:
                    each.name == "email"
                      ? "col-span-full"
                      : "col-span-full sm:col-span-1",
                }}
              />
            ))}
            <div className="col-span-full flex flex-col flex-wrap gap-4">
              <h3 className="w-full">Admin Type</h3>
              {[
                { val: 1, id: "op1" },
                { val: 2, id: "op2" },
                { val: 3, id: "op3" },
              ].map((each) => (
                <label
                  key={each.id + "key"}
                  htmlFor={each.id}
                  className="flex cursor-pointer items-center gap-2 w-fit"
                >
                  <input
                    id={each.id}
                    type="radio"
                    value={each.val}
                    onChange={add_f.handleChange}
                    name="role"
                    className="peer appearance-none outline outline-[#D9D9D9] checked:outline-primary border-[3px] border-white h-4 w-4 min-w-2 rounded-full bg-[#D9D9D9] checked:bg-primary transition-all duration-300"
                  />
                  <span className="text-[#949494] text-sm peer-checked:text-[#333436]  transition-all duration-300">
                    Admin {each.val}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t py-3 px-5 gap-4 border-primary flex items-center justify-end">
          <button
            type="button"
            className="border w-24 rounded-lg px-5 py-0.5 text-sm border-primary"
          >
            Cancel
          </button>
          <button
            disabled={adding || saving}
            type="submit"
            className="border disabled:opacity-70 w-24 bg-primary text-white rounded-lg px-5 py-0.5 text-sm border-primary"
          >
            {adding || saving ? "Saving..." : "Save"}
          </button>
        </div>
      </form>
    </DialogLayout>
  )
}

export default AdminDialog
