/* @flow */
import { connect } from 'react-redux';

/**
 * See flow-typed
 */
import type { ConnectedComponentClass } from 'react-redux';

/**
 * TextSubmit must have .props typed in flow for types to flow down.
 */
import TextSubmit from '../components/TextSubmit';

/**
 * Global application types are here for redux.
 */
import type {
  State,
  ConnectedComponent,
  Dispatch,
} from '../types';

/**
 * Sadly flow does not yet allow $PropertyType<T> yet so we need to manually type.
 */
type Props = $PropertyType<TextSubmit, 'props'>;
type OwnProps = { dispatch: Dispatch, ...Props };

const TextPublisher: ConnectedComponentClass<OwnProps, Props, void, void> = connect(
  (state: State) => {
    return {
      /** For example: This will throw an error because underlying component does not allow number for text */
      // text: 1,
      text: state.publish.preview,
    }
  },
  (dispatch: Dispatch) => {
    return {
      onSubmit: (event: Event & { currentTarget: HTMLInputElement }) => {
        const value = event.currentTarget.value;
        dispatch({ type: 'PUBLISH', text: value });
      }
    }
  },
)(TextSubmit);

export default TextPublisher;
