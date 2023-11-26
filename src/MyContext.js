import React, { useState } from "react";

const HighOrderComponent = (WrappedComponent) => {
    const CounterComponent = (initial = 0) => {
        const [count, setCount] = useState(initial);
        const increment = () => {
            setCount(count + 1);
        }
        const decrement = () => {
            setCount(count + 1);
        }
        const reset = () => {
            setCount(count + 1);
        }
        return (
            <div>
                <WrappedComponent
                    count={count}
                    increment={increment}
                    decrement={decrement}
                    reset={reset}
                />
            </div>
        )
    }
    return CounterComponent
}

export default HighOrderComponent;