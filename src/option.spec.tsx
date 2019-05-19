import * as React from "react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import { Option } from "@nozzlegear/railway";
import { Maybe } from "./option";

describe("Option", () => {
    let container: HTMLDivElement | null;

    beforeEach(() => {
        container = document.createElement("div");
        document.body.appendChild(container);
    });

    afterEach(() => {
        if (container) {
            document.body.removeChild(container);
            container = null;
        }
    });

    it("should render when given a Some value", () => {
        const value = Option.ofSome("Hello world");
        const comp = <Maybe value={value}>{value => <div id="app">Value is {value}</div>}</Maybe>;

        act(() => {
            render(comp, container);
        });

        const app = container!.querySelector("#app");

        expect(app).toBeDefined();
        expect(app).not.toBeNull();
        expect(app!.textContent).toBe("Value is Hello world");
    });

    it("should not render when given a None value", () => {
        const value = Option.ofNone();
        const renderFn = jest.fn(() => <div id="app">Value is {value}</div>);
        const comp = <Maybe value={value}>{renderFn}</Maybe>;

        act(() => {
            render(comp, container);
        });

        expect(renderFn).not.toBeCalled();

        const app = container!.querySelector("#app");

        expect(app).toBeNull();
    });
});
