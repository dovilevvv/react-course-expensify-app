import { createStore } from 'redux';

// Actions generators - functions that returns action object
const add = ({a, b}, c) => {
    return a + b + c;
}
console.log(add({ a: 1, b: 12 }, 100));


const incrementCount = ({incrementBy = 1} = {}) => ({
        type: 'INCREMENT',
        incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({count} = {}) => ({
    type: 'SET',
    count

});

const resetCount = () => ({
    type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions

// not pure function - yra globalus kintamasis ir jis naudojamas funkcijoje
// let a = 10;
// const add = (b) => {
//    return a + b;
//}
//let result;
//const add = (a, b) => ({
//    result = a + b;
//});

// pure funtion: 
//const add2 = (c, d) => ({
//    return c + d;
//});

// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
            count: state.count - action.decrementBy
        };
        case 'SET':
            return {
           count: action.count 
        }
        case 'RESET':
            return {
            count: 0
        };
        default:
            return state;
    }  
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());    
});



// Increment count
// Actions - an object that gets sent to the store
// Increment, decrement, reset

// I'd like to increment the count
//store.dispatch({
//  type: 'INCREMENT',
//  incrementBy: 5
//});

//unsubscribe();

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

//store.dispatch({
//    type: 'DECREMENT',
//    decrementBy: 10
//});

store.dispatch(decrementCount({decrementBy: 10}));

store.dispatch(setCount({count: 101}));
