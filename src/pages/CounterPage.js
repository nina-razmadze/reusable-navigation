import Button from '../components/Button';
import Panel from '../components/Panel';
import { useReducer } from 'react';

const INCREMENT_COUNT = 'increment-count';
const DECREMENT_COUNT = 'decrement-count';
const CHANGE_COUNT = 'change-value';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };

    case CHANGE_COUNT:
      return {
        ...state,
        valueToAdd: action.payload,
      };

    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };

    default:
      throw new Error('unexpected action type' + action.type);
  }
};

export default function CounterPage({ initialCount }) {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT,
      payload: state.count,
    });
  };

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT,
      payload: state.count,
    });
  };

  const handleChange = (event) => {
    const value = Number(event.target.value) || 0;
    dispatch({
      type: CHANGE_COUNT,
      payload: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT,
    });
  };

  return (
    <div className='pl-[350px] pt-[100px] w-[800px]'>
      <Panel>
        <h1 className='text-lg'>Count is {state.count}</h1>
        <div className='flex flex-row'>
          <Button onClick={increment}>Increment</Button>
          <Button onClick={decrement}>Decrement</Button>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Add a lot!</label>
          <input
            value={state.valueToAdd || ''}
            onChange={handleChange}
            type='number'
            className='p-1 m-3 bg-gray-50 border border-gray-300'
          />
          <Button>Add it!</Button>
        </form>
      </Panel>
    </div>
  );
}
