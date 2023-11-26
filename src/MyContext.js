import React, { useState } from "react";

const CounterComponent = (WrappedComponent) => {
    const CounterComponent = (props) => {
        const [count, setCount] = useState(0);
        const increment = () => {
            setCount(count + 1);
        }
        const decrement = () => {
            setCount(count - 1);
        }
        const reset = () => {
            setCount(0);
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

export default CounterComponent;