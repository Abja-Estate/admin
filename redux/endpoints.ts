// Need to use the React-specific entry point to import createApi
import { BASE_URL } from '@/config';
import { isBrowser, isString } from '@/utils/helpers';
import { Actor, AddAdmin, AdminLoginT, GetUnit, LandLord, LandlordData, Package, RequestDetails, RespData, TenantInfo, UserData } from '@/utils/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import toast from 'react-hot-toast';
import { AnyObject } from 'yup';

// export const BURL = "https://4a1efe7e86e8-8302610227555236033.ngrok-free.app"
// export const BURL = "https://rnaus-105-112-26-123.a.free.pinggy.online"

// Define a service using a base URL and expected endpoints
export const appApi = createApi({
	reducerPath: 'appApi',
	// keepUnusedDataFor: 30,
	// refetchOnFocus: true,
	refetchOnReconnect: true,
	// refetchOnMountOrArgChange: true,
	tagTypes: ['User', 'Landlord', 'Request', 'Tenant', 'Rent', 'Property', 'Package', 'Admin'],
	baseQuery: fetchBaseQuery({
		baseUrl: `${BASE_URL}`,
		prepareHeaders: (headers) => {
			// prepareHeaders: (headers, { getState }) => {
			// Get the token from your state or wherever it's stored
			// const token = isBrowser ? localStorage.getItem('token') : "";
			// const token = getState().auth.token;
			// if (token) {
			headers.set('Authorization', `4f1fe63a-5f8b-4e7f-ad38-e68445079351`);
			// headers.set('Authorization', `Bearer ${token}`);
			headers.set('Accept', `application/json`);
			headers.set('ngrok-skip-browser-warning', `69420`);
			// }
			return headers;
		},

		validateStatus: (response, result) => {
			if (result.statusCode && result.statusCode != 200) {
				toast.error(isString(result.error) ? result.error : "An error occured");
			}
			return response.status === 200 && (result.statusCode == 200 || !result.statusCode)
		},

		// responseHandler: async (response) => {
		// 	return" response.json()";
		// }

	}),

	endpoints: (builder) => ({
		getAnAdmin: builder.mutation<UserData, { adminID: string }>({
			query: (body) => ({ url: `auth/admin/get_admin_by_id`, body, method: "POST" }),
			// transformResponse: (response: any) => response.data,
			invalidatesTags: ["User", "Admin"],
			// extraOptions:{},
			// forceRefetch: () => false
		}),
		adminLogin: builder.mutation<RespData<any>, AdminLoginT>({
			query: (body) => ({ url: `auth/admin/login`, method: "POST", body }),
			invalidatesTags: ['User']
		}),
		adminResetPass: builder.mutation<any, { actor: Actor, id: string, password: string, confirmPassword: string }>({
			query: (body) => ({ url: `auth/${body.actor}/reset_password`, method: "POST", body }),
		}),
		adminChangePass: builder.mutation<any, AnyObject>({
			query: (body) => ({ url: `auth/${body.actor}/reset_password`, method: "POST", body }),
		}),
		adminForgotPassword: builder.mutation<any, { email: string, actor: Actor, }>({
			query: (body) => ({ url: `auth/${body.actor}/forgot_password`, method: "POST", body }),
		}),
		adminVerifyOTP: builder.mutation<RespData<any>, { actor: Actor, email: string, otp: string }>({
			query: (body) => ({ url: `auth/${body.actor}/verify_otp`, method: "POST", body }),
			// transformResponse: (response: any) => response.data,
		}),
		updateprofile: builder.mutation<RespData<UserData>, any>({
			query: (body,) => ({ url: `auth/admin/update_admin`, method: "PATCH", body }),
			transformResponse: (response: any) => response.data,
			invalidatesTags: ['User', "Admin"]
		}),
		registerAdmin: builder.mutation<RespData<UserData>, AddAdmin>({
			query: (body,) => ({ url: `auth/${body.actor}/register`, method: "POST", body }),
			transformResponse: (response: any) => response.data,
			invalidatesTags: ['Admin']
		}),
		updateAdmin: builder.mutation<RespData<UserData>, AddAdmin>({
			query: (body,) => ({ url: `auth/${body.actor}/edit_admin`, method: "POST", body }),
			transformResponse: (response: any) => response.data,
			invalidatesTags: ['Admin']
		}),
		deleteAdmin: builder.mutation<any, any>({
			query: (body,) => ({ url: `auth/admin/delete_admin`, method: "POST", body }),
			transformResponse: (response: any) => response.data,
			invalidatesTags: ['Admin']
		}),
		getAdmins: builder.query<UserData[], any>({
			query: (qP) => `auth/admin/all_admins`,
			transformResponse: (response: any) => response.data,
			providesTags: ['Admin']
		}),



		// package
		createPackage: builder.mutation<any, any>({
			query: (body) => ({ url: `data/admin/create_package`, method: "POST", body }),
			transformResponse: (response: any) => response.data,
			invalidatesTags: ['Package']
		}),

		getPackages: builder.query<Package[], any>({
			query: (qP) => `data/admin/all_package`,
			transformResponse: (response: any) => response.data,
			providesTags: ['Package']
		}),


		// landlord
		getLandlords: builder.query<LandLord[], any>({
			query: (qP) => `service/admin/all_landlords`,
			transformResponse: (response: any) => response.data,
			providesTags: ['Landlord']
		}),
		getLandlord: builder.mutation<LandlordData, { landlordID: string }>({
			query: (body) => ({ url: `service/admin/get_landlord_by_id`, body, method: "POST" }),
			// providesTags: ['Landlord']
		}),
		addLandlord: builder.mutation<any, AddAdmin>({
			query: (body) => ({ url: `auth/landlord/register`, method: "POST", body }),
			invalidatesTags: ['Landlord']
		}),
		updateLandlord: builder.mutation<any, LandLord>({
			query: (body) => ({ url: `auth/landlord/update_landlord`, method: "PUT", body }),
			invalidatesTags: ['Landlord']
		}),
		deleteLandlord: builder.mutation<any, { landlordID: string }>({
			query: (body,) => ({ url: `service/admin/delete_landlord`, method: "POST", body }),
			invalidatesTags: ['Landlord']
		}),


		// requests
		getRequests: builder.query<RequestDetails[], string>({
			query: (qP) => `service/admin/all_requests`,
			transformResponse: (response: any) => {
				interface ReqDet {
					landlordID: string;
					requests: RequestDetails[];
				}

				let data: RequestDetails[] = [];

				const compareDates = (a: RequestDetails, b: RequestDetails) => {
					const dateA = new Date(a.time) as any;
					const dateB = new Date(b.time) as any;
					return (dateB - dateA);
				}

				response.data
					.filter((each: ReqDet) => each?.requests?.length)
					.forEach((each: ReqDet) => {
						data = data.concat(each.requests)
					})

				return data.sort(compareDates);
			},
			providesTags: ['Request']
		}),
		updateRequest: builder.mutation<any, RequestDetails>({
			query: (body) => ({ url: `request/admin/update_request`, method: "PATCH", body }),
			invalidatesTags: ['Request']
		}),
		deleteRequest: builder.mutation<any, { ticketNumber: string, landlordID: string }>({
			query: (body,) => ({ url: `request/admin/delete_request`, method: "POST", body }),
			invalidatesTags: ['Request']
		}),


		getTenants: builder.query<any[], any>({
			query: (qP) => `service/admin/all_tenants`,
			transformResponse: (response: any) => response.data,
			providesTags: ['Tenant']
		}),
		getTenant: builder.mutation<TenantInfo, { email: string }>({
			query: (body) => ({ url: `service/admin/get_tenant_by_email`, body, method: "POST" }),
			invalidatesTags: ['Tenant']
		}),
		getTenantByUnit: builder.mutation<TenantInfo, GetUnit>({
			query: (body) => ({ url: `service/admin/get_tenant_by_unitid`, body, method: "POST" }),
			transformResponse: (response: any) => response.data,
			transformErrorResponse: (response: any) => response.error,
			invalidatesTags: ['Tenant']
		}),
		getRents: builder.query<any[], any>({
			query: (qP) => `service/admin/all_rents`,
			transformResponse: (response: any) => response.data,
			providesTags: ['Rent']
		}),
		deleteTenant: builder.mutation<any, { email: string }>({
			query: (body,) => ({ url: `service/admin/delete_tenant`, method: "POST", body }),
			invalidatesTags: ['Tenant', 'Landlord']
		}),


		// properties
		getProperties: builder.query<any[], any>({
			query: (qP) => `service/admin/all_properties`,
			transformResponse: (response: any) => response.data,
			providesTags: ['Property']
		}),
		getLandlordProperties: builder.mutation<any, { landlordID: string }>({
			query: (body) => ({ url: `service/landlord/properties`, method: "POST", body }),
			invalidatesTags: ['Property', 'Landlord']
		})


	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
	useGetLandlordsQuery,
	useGetAnAdminMutation,
	useGetPropertiesQuery,
	useGetRequestsQuery,
	useGetRentsQuery,
	useGetTenantMutation,
	useAdminForgotPasswordMutation,
	useAdminLoginMutation,
	useUpdateLandlordMutation,
	useGetTenantByUnitMutation,
	useAdminResetPassMutation,
	useGetAdminsQuery,
	useAdminVerifyOTPMutation,
	useCreatePackageMutation,
	useUpdateRequestMutation,
	useGetLandlordPropertiesMutation,
	useGetLandlordMutation,
	useUpdateAdminMutation,
	useAddLandlordMutation,
	useAdminChangePassMutation,
	useUpdateprofileMutation,
	useDeleteLandlordMutation,
	useGetPackagesQuery,
	useRegisterAdminMutation,
	useDeleteRequestMutation,
	useDeleteTenantMutation,
	useGetTenantsQuery,
	useDeleteAdminMutation
} = appApi