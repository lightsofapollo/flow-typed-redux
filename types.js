/* @flow */
import type { Component } from 'react';
import type { Connector, ConnectedComponentClass } from 'react-redux';
import type {
  Store as ReduxStore,
  StoreEnhancer,
  Dispatch as ReduxDispatch,
} from 'redux';

export type PublisherState = {
  preview: string;
}

export type State = {
  publish: PublisherState
}

export type PublishAction = {
  type: 'PUBLISH',
  text: string,
};

export type Action = PublishAction;
export type Store = ReduxStore<State, Action>;
export type Dispatch = ReduxDispatch<Action>;

/**
 * This type is a wrapper type for ConnectedComponentClass from redux.
 *
 * Provides easy to use type but requires that Component.props is set.
 */
type $GetPropTypes<T> = $PropertyType<T, 'props'>
type $GetOwnPropTypes<T> = $GetPropTypes<T> & {
  dispatch: Dispatch
}

export type ConnectedComponent<T> =
  $Supertype<Component<any, any, any>> &
  ConnectedComponentClass<$GetOwnPropTypes<T>, $GetPropTypes<T>, void, void>;
