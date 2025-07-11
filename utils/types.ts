import { AnyObject } from "yup"
export type Role = "1" | "2" | "3";
export type Action = "view" | "add" | "edit" | "delete"
export type Entity = "requests" | "landlords" | "admins" | "tenants"
export type Permissions = {
	[k: string]: {
		view: Role[],
		add: Role[],
		delete: Role[],
		edit: Role[],
		[b: string]: Role[],
	}
}

export type UserData = {
	id: string,
	name: string,
	surname: string,
	phone?: string,
	email: string,
	active: boolean,
	role: Role,
	about?: string,
	activated: boolean,
	accessToken?: string,
	createdAt?: string,
	updatedAt?: string,
	selfie?: "/images/circle.svg"// string,
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
	email: string, password: string,
}

export interface LandLord {
	name: string,
	surname: string,
	active?: boolean,
	history?: any[],
	_id: string,
	landlordID?: string,
	phone: string,
	selfie: string,
	email: string,
	about?: string,
	token?: string
	password?: string
	confirmPassword?: string
}

export interface RentHistory {
	accessCode: string;
	propertyName: string;
	landlordName: string;
	propertyStructure: string;
	location: string;
	landlordPhoto: string;
	isActive: boolean;
	duration: number;
}

export interface GetUnit {
	propertyID: string,
	landlordID: string,
	unitID: string
};

export interface TenantInfo {
	email: string;
	phone: string;
	unitID: string;
	startDate: string;
	endDate: string;
	name: string;
	surname: string;
	canDelete: boolean;
	selfie: string;
	idPhoto: string;
	receiptPhoto: string;
	rentalPhoto: string;
	created_at: string;
	added_at: string;
	active?: boolean;
	validated?: boolean;
	rentHistory?: RentHistory[];
}

interface UnitData {
	bedroom: string;
	landlordID: string;
	propertyID: string;
	unitID: string;
	bathroom: string;
	lightMeter: string;
	waterMeter: string;
	toilet: string;
	wifi: boolean;
	power: boolean;
	store: string;
	isTaken: boolean;
	isInUse: boolean;
	monthlyCost: string;
	extraWages: string;
	tax: string;
	photo: string;
	nick: string;
	tenantInfo?: TenantInfo;
}

interface Property {
	propertyID: string;
	name: string;
	description: string;
	unit: string;
	category: string;
	unitTaken: string;
	structure: string;
	type: string;
	location: string;
	photo: string;
	unitData: UnitData[];
	football: boolean;
	canDelete: boolean;
	pool: boolean;
	wifi: boolean;
	laundry: boolean;
	garden: boolean;
	fitness: boolean;
	power: boolean;
	created_at: string;
}

interface PropertyCreation {
	type: "propertyCreation";
	data: Property
}

interface TenantAdded {
	type: "tenantAdded";
	data: TenantInfo
}

interface RequestAdded {
	type: "request";
	data: RequestDetails
}

type Event = PropertyCreation | TenantAdded | RequestAdded;

export interface LandlordInfo {
	_id: string;
	name: string;
	surname: string;
	phone: string;
	email: string;
	selfie: string;
	created: string;
	active: boolean;
	validated: boolean;
	propertiesLimit: string;
	properties: Property[];
	history: Event[];
	__v: number;
}

export interface RequestDetails {
	ticketNumber?: string,
	agent: string;
	description: string;
	from: string;
	priority: string;
	phone: string;
	email: string;
	tenantPhoto: "/images/circle.svg"// string;
	propertyLocation: string;
	problems: string[];
	tenantUnit: string;
	fullName: string;
	propertyName: string;
	ownerID: string;
	propertyStructure: string;
	period: string;
	others: string;
	time: string;
	day: string;
	ticket: string;
	status: string;
	isOwnerApproved: boolean;
	isResolved: boolean;
	servicePersonnelName?: string;
	servicePersonnelPhone?: "/images/circle.svg"// string;
	servicePersonnelPhoto?: "/images/circle.svg"// string;
	created_at: string
}

interface LandlordRequests {
	_id: string;
	ownerID: string;
	requests: RequestDetails[];
}

export interface LandlordData {
	landlordInfo: LandlordInfo;
	tenants: TenantInfo[];
	propertyInfo: {
		propertyID: string,
		totalTenants: string | number,
		totalUnits: string | number
	}[];
	requestData: {
		active: string | number,
		pending: string | number,
		completed: string | number,
		all: LandlordRequests
	};
}


export interface Tenant {
	email: string;
	phone: string;
	password: string;
	confirmPassword: string;
	name: string;
	surname: string;
	accessCode: string;
}

export interface Package {

}

export interface AreYouSureProps {
	status: boolean,
	desc?: string | JSX.Element,
	data?: AnyObject,
	action?: (data?: any) => (void | Promise<void>),
	type?: 'deleteUser' | "successResp" | "deleteRequest"
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


// Monthly chart data interface
export interface MonthlyChartData {
  month: string;
  monthIndex: number;
  signUps: number;
  activeUsers: number;
}

// Summary statistics interface
export interface UsageSummary {
  totalUsers: number;
  totalActive: number;
  totalLandlords: number;
  totalTenants: number;
}

// Main data interface
export interface MobileAppUsageData {
  chartData: MonthlyChartData[];
  summary: UsageSummary;
}

// API response interface
export interface MobileAppUsageResponse {
  statusCode: number;
  data: MobileAppUsageData;
}