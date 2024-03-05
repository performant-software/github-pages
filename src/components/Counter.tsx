import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <div onClick={() => setCounter((i) => i+1)}>
            {counter}
        </div>
    )
};

export default Counter;