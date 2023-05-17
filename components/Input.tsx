import clsx from "clsx";
import { forwardRef } from "react";

interface InputOptions {
    dim?: InputSize;
}

type Ref = HTMLInputElement;

export type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> &
    InputOptions;

type InputSize = "xl" | "lg" | "md" | "sm" | "xs";

const getSize = (size: InputSize) => {
    switch (size) {
        case "xl":
            return "text-xl py-4 px-6";
        case "lg":
            return "text-lg py-3 px-4";
        case "md":
            return "text-base py-2 px-4";
        case "sm":
            return "text-sm py-1 px-2";
        case "xs":
            return "text-xs py-1 px-1";
        default:
            return undefined;
    }
};

const defaultStyle = "relative inline-flex w-full rounded leading-none transition-colors ease-in-out placeholder-gray-500 text-gray-700 bg-gray-50 border border-gray-300 hover:border-blue-400 focus:outline-none focus:border-blue-400 focus:ring-blue-400 focus:ring-4 focus:ring-opacity-30";

const InputTest = forwardRef<Ref, InputProps>((props, ref) => {
    const {
        dim = "md",
        type = "text",
        className,
        ...rest
    } = props;

    const merged = clsx(defaultStyle, getSize(dim), className);

    return (
        <input type={type} ref={ref} className={merged} {...rest} />
    );
});

InputTest.displayName = "InputTest";
export default InputTest;