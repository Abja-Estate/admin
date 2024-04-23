import { AnyObject } from "yup"
import { Action, Entity, Role } from "./types"
import { permissions } from "./constants"

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

export function getGreeting (): string {
	const currentTime = new Date();
	const currentHour = currentTime.getHours();

	let greeting: string;

	if (currentHour >= 5 && currentHour < 12) {
		greeting = "Morning";
	} else if (currentHour >= 12 && currentHour < 17) {
		greeting = "Afternoon";
	} else if (currentHour >= 17 && currentHour < 21) {
		greeting = "Evening";
	} else {
		greeting = "Night";
	}

	return greeting;
}

export function isString (value: any): value is string {
	return typeof value === 'string';
}


export function getDefaultTimeValue (timeRange: string, isStartTime: boolean) {
	var times = timeRange.split(' - ');
	var startTime = times[0];
	var endTime = times[1];

	if (isStartTime) {
		var date = new Date('2000-01-01 ' + startTime); // Use an arbitrary date for parsing
		var hour = date.getHours();
		var minute = date.getMinutes();
		if (startTime.includes('PM') && hour < 12) {
			hour += 12; // Convert to 24-hour format if needed
		}
		var formattedTime = (hour < 10 ? '0' : '') + hour + ':' + (minute < 10 ? '0' : '') + minute;
		return formattedTime;
	} else {
		var date = new Date('2000-01-01 ' + endTime); // Use an arbitrary date for parsing
		var hour = date.getHours();
		var minute = date.getMinutes();
		if (endTime.includes('PM') && hour < 12) {
			hour += 12; // Convert to 24-hour format if needed
		}
		var formattedTime = (hour < 10 ? '0' : '') + hour + ':' + (minute < 10 ? '0' : '') + minute;
		return formattedTime;
	}
}

export function formatDateTime (dateTimeStr: string, ago: boolean = false) {
	const date = new Date(dateTimeStr);
	const currentDate = new Date();

	// Calculate time difference in milliseconds
	const timeDiff = currentDate.getTime() - date.getTime();
	const secondsDiff = Math.floor(timeDiff / 1000);
	const minutesDiff = Math.floor(secondsDiff / 60);
	const hoursDiff = Math.floor(minutesDiff / 60);
	const daysDiff = Math.floor(hoursDiff / 24);

	if (daysDiff === 0) {
		// Today's date
		const formattedTime = date.toLocaleString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
		return formattedTime;
	} else if (daysDiff === 1) {
		// Yesterday's date
		return 'Yesterday';
	} else if (daysDiff <= 7 || ago) {
		// Up to 1 week ago
		return `${daysDiff} days ago`;
	} else {
		// X days ago
		return date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
	}
}


export const isPermitted = (action: Action, role: Role, entity: Entity) => permissions[entity][action].includes(role);
export const canDelete = (entity: Entity, role: Role = "1") => isPermitted("delete", role, entity);
export const canEdit = (entity: Entity, role: Role = "1") => isPermitted("edit", role, entity);
export const canAdd = (entity: Entity, role: Role = "1") => isPermitted("add", role, entity);
export const canView = (entity: Entity, role: Role = "1") => isPermitted("view", role, entity);

export const isBrowser = typeof window !== 'undefined';