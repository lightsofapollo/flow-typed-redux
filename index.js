/** @flow */

import { connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import type { PublisherState, Action } from './types';


const store: Store = createStore(combineReducers({
  publish: (state = { preview: '' }, action: Action): PublisherState => {
    if (!action.type === 'PUBLISH') {
      return state;
    }
    return Object.assign({}, state, {
      publish: {
        preview: action.text
      }
    });
  }
}));

type TextAreaProps = {
   text: string, onSubmit: Function, dispatch: Dispatch
};

// const TextSubmit = (
//   {text = '', onSubmit = () => {}}: TextAreaProps
// ) => {
//   return (
//     <section>
//       <h1>preview</h1>
//       <p>{text}</p>
//       <form onSubmit={onSubmit}>
//         <input type="text" />
//         <button type="submit" />
//       </form>
//     </section>
//   );
// }






// const x = ( <TextSubmit text={1} onSubmit={() => {}} /> );
