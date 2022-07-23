import * as React from "react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import { If } from "./if";

describe("If", () => {
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

    it("should render when given a true condition", () => {
        const condition = true;
        const comp = <If condition={condition}><div id="app">{"Condition is " + condition}</div></If>;

        act(() => {
            render(comp, container);
        });

        const app = container!.querySelector("#app");

        expect(app).toBeDefined();
        expect(app).not.toBeNull();
        expect(app!.textContent).toBe("Condition is true");
    });

    it("should not render when given a false condition", () => {
        const condition = false;
        const renderFn = jest.fn(() => <div id="app">{"Value is " + condition}</div>);
        const comp = <If condition={condition}>{renderFn}</If>;

        act(() => {
            render(comp, container);
        });

        expect(renderFn).not.toBeCalled();

        const app = container!.querySelector("#app");

        expect(app).toBeNull();
    });
});
