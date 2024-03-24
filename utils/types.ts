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
	actor: Actor,
	email: string,
	phone: string,
	password: string,
	confirmPassword: string,
	name: string,
	surname: string,
}

export interface AddLandlord extends AddAdmin {

}

export type Actor = "admin" | "tenant" | "landlord"

export interface AdminLoginT {
	email: string, password: string, actor: Actor
}
export interface LandLord {
	name: string,
	surname: string,
	active?: boolean,
	history?: any[],
	_id: string,
	phone: string,
	selfie: string,
	email: string,
	about?: string,
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
