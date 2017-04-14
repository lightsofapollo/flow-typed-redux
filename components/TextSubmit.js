/**
 * This is a UI only functional component
 *
 * @flow
 */

import React from 'react';

export default class TextSubmit extends React.PureComponent {
  props: {
    text: string,
    onSubmit: Function,
  }

  render() {
    const {text, onSubmit} = this.props;
    return (
      <section>
        <h1>preview</h1>
        <p>{text}</p>
        <form onSubmit={onSubmit}>
          <input type="text" />
          <button type="submit" />
        </form>
      </section>
    );
  }
}
