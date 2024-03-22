export type UserData = {
	id: string,
	name: string,
	surname: string,
	phone?: string,
	email: string,
	active: boolean,
	activated: boolean,
	accessToken?: string,
	created?: string
}

export interface AddAdmin {
	email: string,
	phone: string,
	password: string,
	confirmPassword: string,
	name: string,
	surname: string,
}

export interface AdminLoginT {
	email: string, password: string
}
export interface LandLord {
	name: string,
	surname: string,
	phone: string,
	selfie: string,
	email: string,
	about: string,
	token?: string
	password?: string
	confirmPassword?: string
}

export interface Package {

}

export interface RespData<T> {
	statusCode: number | string,
	data: T
}

export interface Input {
	defaultV?: string | boolean | number
	placeholder?: string,
	type?: string,
	name: string,
	label?: string,
	min?: string | number,
	options?: { value: string, label: string }[]
	// options?: {
	// 	label: string,
	// 	valueKey: string,
	// 	value: string
	// }
}
