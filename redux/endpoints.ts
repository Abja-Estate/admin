// Need to use the React-specific entry point to import createApi
import { BASE_URL } from '@/config';
import { AddAdmin, AdminLoginT, LandLord, Package, RespData, UserData } from '@/utils/types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// export const BURL = "https://4a1efe7e86e8-8302610227555236033.ngrok-free.app"
// export const BURL = "https://rnaus-105-112-26-123.a.free.pinggy.online"

// Define a service using a base URL and expected endpoints
export const appApi = createApi({
	reducerPath: 'appApi',
	// keepUnusedDataFor: 30,
	// refetchOnFocus: true,
	refetchOnReconnect: true,
	// refetchOnMountOrArgChange: true,
	tagTypes: ['User', 'Landlord', 'Request', 'Tenant', 'Rent', 'Property', 'Package'],
	baseQuery: fetchBaseQuery({
		baseUrl: `${BASE_URL}`,
		prepareHeaders: (headers) => {
			// prepareHeaders: (headers, { getState }) => {
			// Get the token from your state or wherever it's stored
			const token = localStorage.getItem('token');
			// const token = getState().auth.token;
			// if (token) {
			headers.set('Authorization', `4f1fe63a-5f8b-4e7f-ad38-e68445079351`);
			// headers.set('Authorization', `Bearer ${token}`);
			headers.set('Accept', `application/json`);
			headers.set('ngrok-skip-browser-warning', `69420`);
			// }
			return headers;
		},
	}),

	endpoints: (builder) => ({
		getAdmin: builder.query<UserData, string>({
			query: () => `service/admin/user`,
			providesTags: (result) => result ? [{ type: "User", id: result.id }] : ["User"],
			// extraOptions:{},
			// forceRefetch: () => false
		}),
		adminLogin: builder.mutation<RespData<any>, AdminLoginT>({
			query: (body) => ({ url: `auth/admin/login`, method: "POST", body }),
			invalidatesTags: ['User']
		}),
		adminResetPass: builder.mutation<any, { id: string, password: string, confirmPassword: string }>({
			query: (body) => ({ url: `auth/admin/reset_password`, method: "POST", body }),
		}),
		adminForgotPassword: builder.mutation<any, { email: string }>({
			query: (body) => ({ url: `auth/admin/forgot_password`, method: "POST", body }),
		}),
		adminVerifyOTP: builder.mutation<RespData<any>, { email: string, otp: string }>({
			query: (body) => ({ url: `auth/admin/verify_otp`, method: "POST", body }),
			// transformResponse: (response: any) => response.data,
		}),
		registerAdmin: builder.mutation<RespData<UserData>, AddAdmin>({
			query: (body) => ({ url: `auth/admin/register`, method: "POST", body }),
			transformResponse: (response: any) => response.data,
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
		updateLandlord: builder.mutation<any, LandLord>({
			query: (body) => ({ url: `/admin/update_landlord`, method: "POST", body }),
			invalidatesTags: ['Landlord']
		}),


		// requests
		getRequests: builder.query<any[], any>({
			query: (qP) => `service/admin/all_requests`,
			transformResponse: (response: any) => response.data,
			providesTags: ['Request']
		}),
		updateRequest: builder.mutation<any, { landlordID: string, ticketNumber: string }>({
			query: (body) => ({ url: `request/admin/update_requests`, method: "POST", body }),
			invalidatesTags: ['Request']
		}),



		getTenants: builder.query<any[], any>({
			query: (qP) => `service/admin/all_tenants`,
			transformResponse: (response: any) => response.data,
			providesTags: ['Tenant']
		}),
		getRents: builder.query<any[], any>({
			query: (qP) => `service/admin/all_rents`,
			transformResponse: (response: any) => response.data,
			providesTags: ['Rent']
		}),


		// properties
		getProperties: builder.query<any[], any>({
			query: (qP) => `service/admin/all_properties`,
			transformResponse: (response: any) => response.data,
			providesTags: ['Property']
		}),
		getLandlordProperties: builder.mutation<any, { landlordID: string }>({
			query: (body) => ({ url: `service/landlord/properties`, method: "POST", body }),
			invalidatesTags: ['Property']
		})


	}),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
	useGetLandlordsQuery,
	useGetAdminQuery,
	useGetPropertiesQuery,
	useGetRequestsQuery,
	useGetRentsQuery,
	useAdminForgotPasswordMutation,
	useAdminLoginMutation,
	useAdminResetPassMutation,
	useAdminVerifyOTPMutation,
	useCreatePackageMutation,
	useGetLandlordPropertiesMutation,
	useGetPackagesQuery,
	useGetTenantsQuery,
} = appApi