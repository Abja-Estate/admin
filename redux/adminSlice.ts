import { RootState } from '@/redux/store'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type UserData = any;
// Define a type for the slice state
export interface AdminState {
	// value: number
	profile: UserData | null,
	navIsOpen: boolean,
	responseDialog: {
		path?: string,
		open?: boolean,
		to?: boolean,
		btnLabel?: boolean,
		title: string,
		desc: string,
		type?: "success" | "error" | "info",
		icon?: "bus" | "road",
		self?: boolean
	}
}

const defaultResp = {
	open: false,
	// self: true,
	desc: "",
	// type: "",
	// icon: "",
	to: "",
	btnlabel: "",
	title: "Oops!"
}

// Define the initial state using that type
const initialState: AdminState = {
	// value: 0,
	navIsOpen: false,
	profile: null,
	responseDialog: defaultResp
}

export const adminSlice = createSlice({
	name: 'admin',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		setNavIsOpen: (state, action: PayloadAction<boolean>) => {
			state.navIsOpen = action.payload
		},

		setAdminProfile: (state, action: PayloadAction<UserData | null>) => {
			state.profile = action.payload
		},

		closeRespDialog: (state) => {
			state.responseDialog.open = false;
		},

		openRespDialog: (state, action: PayloadAction<AdminState['responseDialog']>) => {
			state.responseDialog = { ...action.payload, open: true }
		}
	},
})

export const { setNavIsOpen, setAdminProfile, closeRespDialog, openRespDialog } = adminSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectNavIsOpen = (state: RootState) => state.admin.navIsOpen

export default adminSlice.reducer