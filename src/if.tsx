import * as React from "react";

interface Props {
    condition: boolean
    children: React.ReactNode | (() => React.ReactNode)
}

/**
 * Renders the child component if the given condition is true.
 */
export function If(props: Props): JSX.Element {
    if (props.condition) {
        return typeof props.children === "function" ? props.children() : props.children;
    }

    return <React.Fragment />;
}
