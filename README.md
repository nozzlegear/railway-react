# @nozzlegear/railway-react

This is a collection of React components to complement the functional helpers found in [@nozzlegear/railway](https://github.com/nozzlegear/railway).

## Installation

```sh
yarn install @nozzlegear/railway @nozzlegear/railway-react
```

## Usage

### `Option`

**Aliases**: Option, OptionComponent, Maybe, MaybeComponent

The `Option` component is a simple way to render a React component when the value of an `Option` is Some:

```tsx
import { Option } from "@nozzlegear/railway";
import { OptionComponent } from "@nozzlegear/railway-react";

const myOption = Option.ofSome("Hello world");

<OptionComponent value={myOption}>
    {value => <div>Message is: {value}</div>}
</OptionComponent>
```

The component will only call the render function (and therefore will only render) if the value is Some. If the value is None, the function will not be called and an empty React fragment (`<></>`) will be returned instead.

### `If`

The `If` component only renders its children if the condition is true.

```tsx
import { If } from "@nozzlegear/railway-react";

const value = true;

<If condition={value}>
    <p>{"Only renders if value is true."}</p>
</If>
```

### `Unless`

The `Unless` component is the inverse of the `If` component; it will only render its children when the condition is false.

```tsx
import { Unless } from "@nozzlegear/railway-react";

const value = false;

<Unless condition={value}>
    <p>{"Only renders if value is false."}</p>
</Unless>
```
