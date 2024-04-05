import { Input } from "./types"
import * as Yup from 'yup'

export const landlordInputs: Input[] = [
	{ label: "Full Names", name: 'fullname', type: "text", placeholder: "Full name" },
	{ label: "Contact", name: 'phone', type: "text", placeholder: "Contact Number" },
	{ label: "Email", name: 'email', type: "email", placeholder: "Email Address" },
	{ label: "Address", name: 'adress', type: "text", placeholder: "Address" },
	{ label: "Start Date", name: 'start_date', type: "date", placeholder: "Date" },
	{ label: "Subscription Plan", name: 'plan', type: "select", placeholder: "Plan" },
]

export const landlordSchema = Yup.object({
	email: Yup.string().email("Email is invalid").required("Email is required"),
	password: Yup.string().required("Password is required")
	// .length(10, "Phone number should be 8 digits (without the leading zero)"),
})

export const editlandlordInputs: Input[] = [
	{ label: "Firstname", name: 'name', type: "text", placeholder: "First name" },
	{ label: "Lastname", name: 'surname', type: "text", placeholder: "Last name" },
	{ label: "Email", name: 'email', type: "email", placeholder: "Email Address" },
	{ label: "Phone", name: 'phone', type: "text", placeholder: "Phone Number" },
	{ label: "Bio", name: 'about', type: "textarea", placeholder: "Bio" },
]


export const editLandlordSchema = Yup.object().shape({
	name: Yup.string().required('First name is required'),
	surname: Yup.string().required('Last name is required'),
	email: Yup.string().email('Invalid email address').required('Email is required'),
	phone: Yup.string().required('Phone number is required'),
	about: Yup.string().nullable(),
});

export const adminInputs: Input[] = [
	{ label: "Firstname", name: 'name', type: "text", placeholder: "First name" },
	{ label: "Lastname", name: 'surname', type: "text", placeholder: "Last name" },
	{ label: "Email", name: 'email', type: "email", placeholder: "Email Address" },
	{ label: "Phone", name: 'phone', type: "text", placeholder: "Phone Number" },
	{ label: "Bio", name: 'about', type: "textarea", placeholder: "Bio" },
]

export const adminSettingInputs1: Input[] = [
	{ label: "Firstname", name: 'name', type: "text", placeholder: "First name" },
	{ label: "Lastname", name: 'surname', type: "text", placeholder: "Last name" },
	{ label: "Username", name: 'username', type: "text", placeholder: "Username" },
	{ label: "Date of Birth", name: 'dob', type: "date", },
]

export const adminSettingInputs3: Input[] = [
	{ label: "Phone Number", name: 'phone', type: "text", placeholder: "Phone Number" },
	{ label: "E-mail Address", name: 'email', type: "text", placeholder: "Enter Email" },
	{ label: "City", name: 'city', type: "select", placeholder: "City" },
	{ label: "State", name: 'state', type: "select", placeholder: "State" },
	{ label: "Country", name: 'country', type: "select", placeholder: "Country" },
	{ label: "Address", name: 'address', type: "text", placeholder: "Address" },
]

export const adminProfileSchema = Yup.object({
	email: Yup.string().email("Email is invalid").required("Email is required"),
	// password: Yup.string().required("Password is required")
	// .length(10, "Phone number should be 8 digits (without the leading zero)"),
})


export const propertyInputs: Input[] = [
	{ label: "Name", name: "name", type: "text", placeholder: "Enter Name" },
	{
		label: "Description",
		name: "description",
		type: "text",
		placeholder: "Enter Description",
	},
	{ label: "Unit", name: "unit", type: "text", placeholder: "Enter Unit" },
	{
		label: "Category",
		name: "category",
		type: "text",
		placeholder: "Enter Category",
	},
	{
		label: "Unit Taken",
		name: "unitTaken",
		type: "text",
		placeholder: "Enter Unit Taken",
	},
	{
		label: "Structure",
		name: "structure",
		type: "text",
		placeholder: "Enter Structure",
	},
	{ label: "Type", name: "type", type: "text", placeholder: "Enter Type" },
	{
		label: "Location",
		name: "location",
		type: "text",
		placeholder: "Enter Location",
	},
]

export const addPropertySchema = Yup.object().shape({
	name: Yup.string().required("Name is required"),
	description: Yup.string().required("Description is required"),
	unit: Yup.string().required("Unit is required"),
	category: Yup.string().required("Category is required"),
	unitTaken: Yup.string().required("Unit Taken is required"),
	structure: Yup.string().required("Structure is required"),
	type: Yup.string().required("Type is required"),
	location: Yup.string().required("Location is required"),
	photo: Yup.string().required("Photo URL is required"),
	football: Yup.string().required("Football Info is required"),
	canDelete: Yup.boolean().required("Can Delete is required"),
	pool: Yup.boolean().required("Pool is required"),
	wifi: Yup.boolean().required("Wifi is required"),
	laundry: Yup.boolean().required("Laundry is required"),
	garden: Yup.boolean().required("Garden is required"),
	fitness: Yup.boolean().required("Fitness is required"),
	power: Yup.boolean().required("Power is required"),
});


export const addRequestInputs: Input[] = [
	{ label: "Landlord", name: "landlord", type: "text", placeholder: "Enter Landlord" },
	{ label: "Landlord Contact", name: "landlord_contact", type: "text", placeholder: "Enter Landlord Contact" },
	{ label: "Tenant", name: "tenant", type: "text", placeholder: "Enter Tenant" },
	{ label: "Tenant Contact", name: "tenant_contact", type: "text", placeholder: "Enter Tenant Contact" },
	{ label: "Service Type", name: "agent", type: "text", placeholder: "Enter Service Type" },
	{ label: "Request Status", name: "status", type: "select", placeholder: "Request Status" },
	{ label: "Priority", name: "priority", type: "select", placeholder: "Enter Priority" },
	{ label: "Day", name: "day", type: "date", placeholder: "Day" },
	{ label: "Start Time", name: "start_time", type: "time", placeholder: "Start Time" },
	{ label: "End Time", name: "end_time", type: "time", placeholder: "End Time" },
	{ label: "Address", name: "propertyLocation", type: "text", placeholder: "Enter Address" },
	{ label: "Description", name: "description", type: "text", placeholder: "Enter Description" },
	{ label: "Service Personnel", name: "servicePersonnelName", type: "text", placeholder: "Service Personnel" },
	{ label: "Service Personnel Contact", name: "servicePersonnelPhone", type: "text", placeholder: "Service Personnel Contact" },
];

// Generate Yup validation schema
export const addRequestSchema = Yup.object().shape({
	agent: Yup.string().required("Service Type is required"),
	priority: Yup.string().required("Priority is required"),
	// start_time: Yup.date().required("Start Time is required"),
	// end_time: Yup.date().required("End Time is required"),
	day: Yup.string().required("Day is required"),
	description: Yup.string().required("Description is required"),
});


export const signInInputs: Input[] = [
	{ label: "Email", name: 'email', type: "email", placeholder: "Enter Email" },
	{ label: "Enter password", name: 'password', type: "password", placeholder: "Your password" },
]

export const signInSchema = Yup.object({
	email: Yup.string().email("Email is invalid").required("Email is required"),
	password: Yup.string().required("Password is required")
	// .length(10, "Phone number should be 8 digits (without the leading zero)"),
})

export const reqResetPasswordInputs: Input[] = [
	{ name: 'email', type: "email", placeholder: "Your Email" },
	// { name: 'password', type: "password", placeholder: "Your password" },
]

export const reqResetPasswordSchema = Yup.object({
	email: Yup.string().email("Email is invalid").required("Email is required"),
	// password: Yup.string().required("Password is required")
	// .length(1
})

export const resetPasswordInputs: Input[] = [
	{ name: 'password', type: "password", placeholder: "Your password" },
	{ name: 'password_confirmation', type: "password", placeholder: 'Confirm Password' },
]

export const changePasswordSchema = Yup.object({
	password: Yup.string()
		.required("Password is required")
		.test(
			'password-complexity',
			'Password must include a digit,a symbol, and a capital letter',
			value =>
				/^(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])/.test(
					value
				)
		)
		.label("Password"),

	confirmPassword: Yup.string().label('Confirm Password').required().oneOf([Yup.ref('password')], 'Passwords must match'),
})
