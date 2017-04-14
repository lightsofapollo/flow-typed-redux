/**
 * Global application states and actions. It is intended that every action is
 * defined within.
 *
 * @flow
 */
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
