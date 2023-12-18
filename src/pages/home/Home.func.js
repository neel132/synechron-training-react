import React, {useEffect} from 'react';
const Home = () => {
    useEffect(() => {
        console.log("useEffect is been called.");
    })
    console.log("returning UI");
    return (
        <h1>Home Screen</h1>
    )
}
export default Home;