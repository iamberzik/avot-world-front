export const prepareTitlesToSelect = (array) => {
	const output = []

	for (const item of array) {
		output.push({
			value: item.title,
			label: item.title
		})
	}

	return output
}

export const prepareRuTitlesToSelect = (array) => {
	const output = []

	for (const item of array) {
		output.push({
			value: item.titleRu,
			label: item.titleRu
		})
	}

	return output
}