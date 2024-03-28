// Need to use the React-specific entry point to import createApi
import { BASE_URL } from '@/config';
import { Actor, AddAdmin, AdminLoginT, LandLord, Package, RespData, UserData } from '@/utils/types';
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

		validateStatus: (response, result) => {
			if (result.statusCode != 200) {
				toast.error(result.error);
			}
			return response.status === 200 && result.statusCode == 200
		},

		// responseHandler: async (response) => {
		// 	return" response.json()";
		// }

	}),

	endpoints: (builder) => ({
		getAdmin: builder.query<UserData, string>({
			query: () => `service/admin/user`,
			providesTags: (result) => result ? [{ type: "User", id: result.id }] : ["User"],
			// extraOptions:{},
			// forceRefetch: () => false
		}),
		adminLogin: builder.mutation<RespData<any>, AdminLoginT>({
			query: (body) => ({ url: `auth/${body.actor}/login`, method: "POST", body }),
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
		registerAdmin: builder.mutation<RespData<UserData>, AddAdmin>({
			query: (body,) => ({ url: `auth/${body.actor}/register`, method: "POST", body }),
			transformResponse: (response: any) => response.data,
		}),
		deleteAdmin: builder.mutation<any, any>({
			query: (body,) => ({ url: `auth/${body.actor}/`, method: "DELETE", body }),
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
		getLandlord: builder.query<AnyObject, string>({
			query: (qP) => `service/admin/landlord/${qP}`,
			transformResponse: (response: any) => response.data,
			providesTags: ['Landlord']
		}),
		addLandlord: builder.mutation<any, AddAdmin>({
			query: (body) => ({ url: `auth/landlord/register`, method: "POST", body }),
			invalidatesTags: ['Landlord']
		}),
		updateLandlord: builder.mutation<any, LandLord>({
			query: (body) => ({ url: `/admin/update_landlord`, method: "POST", body }),
			invalidatesTags: ['Landlord']
		}),
		deleteLandlord: builder.mutation<any, any>({
			query: (body,) => ({ url: `auth/${body.actor}/landlord`, method: "DELETE", body }),
			transformResponse: (response: any) => response.data,
		}),


		// requests
		getRequests: builder.query<any[], any>({
			query: (qP) => `service/admin/all_requests`,
			transformResponse: (response: any) => {

				let data: any[] = []
				response.data
					.filter((each: any) => each?.requests?.length)
					.forEach((each: any) => {
						data = data.concat(each.requests)
					})

				return data;

			},
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
		deleteTenant: builder.mutation<any, any>({
			query: (body,) => ({ url: `auth/${body.actor}/tenant`, method: "DELETE", body }),
			transformResponse: (response: any) => response.data,
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
	useGetLandlordQuery,
	useAddLandlordMutation,
	useAdminChangePassMutation,
	useDeleteLandlordMutation,
	useGetPackagesQuery,
	useDeleteTenantMutation,
	useGetTenantsQuery,
	useDeleteAdminMutation
} = appApi