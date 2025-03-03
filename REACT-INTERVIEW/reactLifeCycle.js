
//with the help of hooks we can manage life cycle methods of react

import React, { useEffect, useState } from 'react';

export default function ReactLifeCycle() {
    // State variable for count
    const [count, setCount] = useState(0);

    // Function to handle the increase in count
    const handleIncrease = () => {
        setCount(prevCount => prevCount + 1);
    };

    // useEffect to simulate componentDidMount (runs once after the component mounts)

    //component did mount step
    // useEffect(() => {
    //     console.log("Component mounted");
    // }, []);



    //component updated we want when increase then only update
    // useEffect(() => {
    //     console.log("Component updated");
    // }, [count]);


    //now we want unmounting acheive 
    //after remove component from page


    useEffect(() => {
        console.log("Component updated");

        return () => {
            console.log("compnent unmounted or remove")
        }
    }, [count]);


    return (
        <>
            <h3>Counter: {count}</h3>
            <button onClick={handleIncrease}>Increase Counter</button>
        </>
    );
}
