import * as React from "react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";
import { Unless } from "./unless";

describe("Unless", () => {
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

    it("should render when given a false condition", () => {
        const condition = false;
        const comp = <Unless condition={condition}><div id="app">{"Condition is " + condition}</div></Unless>;

        act(() => {
            render(comp, container);
        });

        const app = container!.querySelector("#app");

        expect(app).toBeDefined();
        expect(app).not.toBeNull();
        expect(app!.textContent).toBe("Condition is false");
    });

    it("should not render when given a true condition", () => {
        const condition = true;
        const renderFn = jest.fn(() => <div id="app">{"Value is " + condition}</div>);
        const comp = <Unless condition={condition}>{renderFn}</Unless>;

        act(() => {
            render(comp, container);
        });

        expect(renderFn).not.toBeCalled();

        const app = container!.querySelector("#app");

        expect(app).toBeNull();
    });
});
