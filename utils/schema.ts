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

export const resetPasswordSchema = Yup.object({
	password: Yup.string()
		.required("Password is required")
		.matches(/[a-zA-Z]/, "Password must contain at least one alphabet")
		.matches(/[0-9]/, "Password must contain at least one digit")
		.min(8, "Password must contain at least 8 characters").label("Password"),
	password_confirmation: Yup.string().label('Confirm Password').required().oneOf([Yup.ref('password')], 'Passwords must match'),
})
