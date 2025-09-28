import moment from 'moment';
const App = () => {
	const now = moment().format("YYYY-MM-DD HH:mm:ss")
	return (
		<>
			APP
			{now}
		</>
	)
}

export default App;