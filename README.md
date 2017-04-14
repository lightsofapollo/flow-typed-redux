# Flow + Redux + React

An example project using flow + redux + react... This follows closely the redux
guidelines.

This project uses `flow-typed` to provide primitives for react-redux. See
[TextPublisher](./containers/TextPublisher.js) for a detailed example which ensures types flow
through redux to the underlying presentational component.

## Coverage

It's really important to note that you can have 100% flow coverage but still
improperly pass values through connect -> component. You must explicitly type
check the components properties.
