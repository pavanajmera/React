import React, { useReducer } from 'react';
import { data } from './data';
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from './reducer/actions';
import reducer from './reducer/reducer';

const initialState = {
    people: data,
    isLoading: false
}

// // Action Type declares as it importing from actions.js file
// const CLEAR_LIST = 'CLEAR_LIST';
// const RESET_LIST = 'RESET_LIST';
// const REMOVE_ITEM = 'REMOVE_ITEM';

// const reducer = (state, action) => {
//     // switch(action.type){
//     //     case 'CLEAR_LIST':
//     //         return {
//     //             ...state, people:[]
//     //         }

//     //     default:
//     //         throw new Error();
//     // }
//     if (action.type === CLEAR_LIST) {
//         return { ...state, people: [] }
//     }

//     if(action.type === RESET_LIST){
//         return {...state, people:data}
//     }

//     if(action.type === REMOVE_ITEM) {
//         let newPeople = state.people.filter((person) => person.id !== action.payload.id);
//         return {...state, people: newPeople}
//     }

//     // return state;
//     throw new Error(`No matching "${action.type}" - action type`);
// }

const ReducerBasics = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // console.log(state)
    // console.log(dispatch)

    const removeItem = (id) => {
        dispatch({type: REMOVE_ITEM, payload : {id}})
        // let newPeople = people.filter((person) => person.id !== id);
        // setPeople(newPeople);
    };

    const clearList = () => {
        dispatch({ type: CLEAR_LIST })
        // setPeople([])
    }

    const restList = () => {
        dispatch({type : RESET_LIST})
        // setPeople(data)
    }

    return (
        <div>
            {state.people.map((person) => {
                const { id, name } = person;
                return (
                    <div key={id} className='item'>
                        <h4>{name}</h4>
                        <button onClick={() => removeItem(id)}>remove</button>
                    </div>
                );
            })}

            {
                state.people.length < 1 ?
                    <button className='btn' onClick={restList}>
                        reset
                    </button> :
                    <button
                        className='btn'
                        style={{ marginTop: '2rem' }}
                        onClick={() => clearList()}
                    >
                        clear items
                    </button>
            }
        </div>
    );
};

export default ReducerBasics;