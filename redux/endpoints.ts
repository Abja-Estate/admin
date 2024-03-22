// Need to use the React-specific entry point to import createApi
import { BASE_URL } from '@/config';
import { LandLord, UserData } from '@/utils/types';
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
	tagTypes: ['User', 'Landlord', 'Request', 'Tenant', 'Rent', 'Property'],
	baseQuery: fetchBaseQuery({
		baseUrl: `${BASE_URL}/service/admin`,
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
			query: () => `user`,
			providesTags: (result) => result ? [{ type: "User", id: result.id }] : ["User"],
			// extraOptions:{},
			// forceRefetch: () => false
		}),

		getLandlords: builder.query<LandLord[], any>({
			query: (qP) => `all_landlords`,
			transformResponse: (response: any) => response.data,
			providesTags: ['Landlord']
		}),

		getRequests: builder.query<any[], any>({
			query: (qP) => `all_requests`,
			transformResponse: (response: any) => response.data,
			providesTags: ['Request']
		}),

		getTenants: builder.query<any[], any>({
			query: (qP) => `all_tenants`,
			transformResponse: (response: any) => response.data,
			providesTags: ['Tenant']
		}),
		getRents: builder.query<any[], any>({
			query: (qP) => `all_rents`,
			transformResponse: (response: any) => response.data,
			providesTags: ['Rent']
		}),
		getProperties: builder.query<any[], any>({
			query: (qP) => `all_properties`,
			transformResponse: (response: any) => response.data,
			providesTags: ['Property']
		}),


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
	useGetTenantsQuery,
} = appApi