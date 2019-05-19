import * as React from "react";
import * as Railway from "@nozzlegear/railway";

export interface Props<T> {
    value: Railway.Option<T>;
    children: (value: T) => JSX.Element;
}

/**
 * Maps a railway Option value to a React component. Will return empty if the value is None.
 */
export function Option<T>(props: Props<T>): JSX.Element {
    return props.value.map<JSX.Element>(props.children).defaultValue(<></>);
}
/**
 * Maps a railway Option value to a React component. Will return empty if the value is None.
 */
export const OptionComponent = Option;
/**
 * Maps a railway Option value to a React component. Will return empty if the value is None.
 */
export const Maybe = Option;
/**
 * Maps a railway Option value to a React component. Will return empty if the value is None.
 */
export const MaybeComponent = Option;
