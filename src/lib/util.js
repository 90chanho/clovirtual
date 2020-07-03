const makeUniqueId = () => {
	return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
}

export const setUid = () => {
	return `${makeUniqueId()}-${makeUniqueId()}-${makeUniqueId()}-${makeUniqueId()}-${makeUniqueId()}`
}
