import { Input } from "./types"
import * as Yup from 'yup'

const passwordSchema = Yup.string()
	.required("Password is required")
	.test(
		'password-complexity',
		'Password must include a digit, a symbol, a lowercase and a capital letter',
		value =>
			/^(?=.*\d)(?=.*[a-z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Z])/.test(value)
	)
	.label("Password");

const cPasswordSchema = (passwordKey: string) => Yup.string().label('Confirm Password').required().oneOf([Yup.ref(passwordKey)], 'Passwords must match')

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
export const editProfileSchema = Yup.object().shape({
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
  { label: "First Name", name: "name", type: "text", placeholder: "First name" },
  { label: "Last Name", name: "surname", type: "text", placeholder: "Last name" },
  { label: "Phone Number", name: "phone", type: "text", placeholder: "Phone number" },
  { label: "E-mail Address", name: "email", type: "text", placeholder: "Email address" },
  { label: "About You", name: "about", type: "textarea", placeholder: "Tell us about yourself" },
  { label: "Password", name: "password", type: "password", placeholder: "Enter password" },
  { label: "Confirm Password", name: "confirmPassword", type: "password", placeholder: "Confirm password" },
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
  name: Yup.string().required("First name is required"),
  surname: Yup.string().required("Last name is required"),
  phone: Yup.string().required("Phone number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  about: Yup.string().optional(),
  password: Yup.string().min(6, "Minimum 6 characters").required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
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

export const addAdminSchema = (update: boolean = false) => Yup.object({
	email: Yup.string().email("Email is invalid").required("Email is required"),
	name: Yup.string().required("Firstname is required"),
	surname: Yup.string().required("Lastname is required"),
	role: Yup.string().required("Role is required"),
	phone: update ? Yup.string().notRequired() : Yup.string().required("Phone is required"),
	password: update ? Yup.string().notRequired() : passwordSchema,
	// confirmPassword: cPasswordSchema("password")
})

export const addAdminInputs: Input[] = [
	{ label: "Firstname", name: 'name', placeholder: "Firstname" },
	{ label: "Lastname", name: 'surname', placeholder: "Lastname" },
	{ label: "Email", name: 'email', type: "email", placeholder: "Enter Email" },
	{ label: "Phone", name: 'phone', placeholder: "Phone" },
	{ label: "Enter password", name: 'password', type: "password", placeholder: "Password" },
]

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
	password: passwordSchema,
	confirmPassword: cPasswordSchema("password"),
})
export const changePasswordSchema2 = Yup.object({
	oldPassword: Yup.string().required("Old Password is required"),
	password: passwordSchema,
	confirmPassword: cPasswordSchema("password"),
})
