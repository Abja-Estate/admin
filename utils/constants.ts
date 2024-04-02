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