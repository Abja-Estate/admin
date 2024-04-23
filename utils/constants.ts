import { Permissions } from "./types";

export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

export const shuffleItems = (items: any[]) => {
	let array = items;
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return items
}


export const demoTenantServiceRequest = [
	{
		service: "Electrician",
		status: "arriving",
		message:
			"I need an electrician to install a new light fixture in my living room. The light fixture is a chandelier and it will need to be wired into the existing electrical system.",
		name: "Bryan Umar",
		time: "Arriving in 2 hours",
	},
	{
		service: "Electrician",
		status: "completed",
		message:
			"I need an electrician to install a new light fixture in my living room. The light fixture is a chandelier and it will need to be wired into the existing electrical system.",
		name: "Bryan Umar",
		time: "2 hours ago",
	},
	{
		service: "Electrician",
		status: "completed",
		message:
			"I need an electrician to install a new light fixture in my living room. The light fixture is a chandelier and it will need to be wired into the existing electrical system.",
		name: "Bryan Umar",
		time: "2 hours ago",
	},
]

export const demoPersonnel = [
	{
		name: "Bryan Umar",
		service: "Electrician",
		message:
			"I was very impressed with Bryan’s work. He was prompt, professional, and did a great job fixing the electrical problem in my tenant's apartment. I would highly recommend him to anyone who needs an electrician.",
	},
	{
		name: "Bryan Umar",
		service: "Plumber",
		message:
			"I was very impressed with Bryan’s work. He was prompt, professional, and did a great job fixing the electrical problem in my tenant's apartment. I would highly recommend him to anyone who needs an electrician.",
	},
]

export const demologs = [
	{ message: "Newly listed property added", time: "9:50 AM" },
	{
		message: "Request service provider: Electrician ",
		time: "9:41AM",
	},
	{
		message: "1 Unit added to property and 1 tenant onboarded",
		time: "8:42 AM",
	},
	{
		message: "Updated subscription plan to Bronze Plan",
		time: "yesterday",
	},
	{
		message: "Added new tenant to property",
		time: "2 days ago",
	},
]


export const permissions: Permissions = {
	requests: {
		view: ["1", "2", "3"],
		edit: ["1", "2", "3"],
		add: ["2", "3"],
		delete: ["2", "3"],
	},
	admins: {
		view: ["3", "2"],
		edit: ["3"],
		add: ["3"],
		delete: ["3"],
	},
	landlords: {
		view: ["1", "2", "3"],
		edit: ["2", "3"],
		add: ["2", "3"],
		delete: ["2", "3"],
	},
	tenants: {
		view: ["1", "2", "3"],
		edit: ["2", "3"],
		add: ["2", "3"],
		delete: ["2", "3"],
	},
}