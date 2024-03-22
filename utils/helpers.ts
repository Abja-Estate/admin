
export const getDefault = (inputArr: any[], data = null) => {
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