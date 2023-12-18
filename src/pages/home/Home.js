import React from 'react';

class Home extends React.Component {
	constructor() {
		super();
		console.log("Constructor is been called.");
	}
	componentDidMount() {
		console.log("component did mount is been called.");
		// apicall()
	}
	render() {
		console.log("Render is been called.");
		return (
			<h1>Home Screen</h1>
		)
	}
}
export default Home;