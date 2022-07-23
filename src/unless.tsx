import * as React from "react";
import { If } from "./if";

interface Props {
    condition: boolean
    children: React.ReactNode | (() => React.ReactNode)
}

/**
 * Renders the child component if the given condition is false.
 */
export function Unless(props: Props): JSX.Element {
    return (
        <If condition={!props.condition} children={props.children} />
    )
}
