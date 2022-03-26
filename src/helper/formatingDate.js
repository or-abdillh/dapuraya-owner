
export default date => {
	const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
	return new Date(date).toLocaleDateString(undefined, options)
}
