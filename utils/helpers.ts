import { AnyObject } from "yup"

export const getDefault = (inputArr: any[], data: AnyObject | null = null) => {
	let obj = {}
	inputArr.forEach(({ name, defaultV }) => {
		if (data) {
			obj = { ...obj, [name]: data[name] ?? defaultV ?? "" }
		} else {
			obj = { ...obj, [name]: defaultV ?? "" }
		}
	})
	return obj;
}


const keys: { [k: string]: string[] } = {
	users: ["name", "role", "email"],
	logs: ["user_type", "component", "user_name", "action", "details", "created_at"],
	all: [
		"name", "fullName",
		"status", "email", "created_at"
	],
	requests: ["fullName", "phone", "day", "priority", "status", "agent", "requestLocation"]
}

export const filter = (items: any[], searchText: string, filter: string | null = null): any[] => {
	if (!items) return [];
	if (!searchText) return items;
	searchText = searchText.toLowerCase();

	let filteredItems: any[] = [];

	filteredItems = items.filter(each => (
		filter === 'strings' ?
			each.toString().toLowerCase()?.includes(searchText) :
			keys[filter ?? "all"].filter((key: any) => (
				// Array.isArray(each[key]) ?
				// each[key]?.includes(searchText) :
				JSON.stringify(each[key])?.toLowerCase()?.includes(searchText)
			)).length
	));

	return filteredItems;

}