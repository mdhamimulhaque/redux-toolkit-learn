import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from '../features/counter/counterSlice';

const CounterApp = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.count);
    return (
        <section className='counter_app'>
            <button onClick={() => dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(reset())}>reset</button>
            <button onClick={() => dispatch(incrementByAmount(25))}>incrementByAmount</button>
        </section>
    );
};

export default CounterApp;