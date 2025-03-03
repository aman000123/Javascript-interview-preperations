// (function add(a, b) {
//     return a + b;
// })(5, 3);




const Child = ({ name }) => {
    <p>name:name</p>
}

const Parent = () => {
    const [incremaent, setIncrement] = useState(0);
    <>
        <button onClick={() => setIncrement(incremaent + 1)}>Incress</button >
        <p>{incremaent}</p>
        <Child name="Aman" />

    </>
}