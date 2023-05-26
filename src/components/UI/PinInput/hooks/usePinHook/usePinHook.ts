import * as React from "react";
import type {
    PinInputValues,
    UsePinInputProps,
    PinInputFieldProps,
    PinInputClearOptions,
} from "./types";

function usePinHook(options: UsePinInputProps = {}) {
    const {
        actionRef,
        onComplete,
        length = 6,
        otp = false,
        mask = false,
        error = false,
        type = "numeric",
        placeholder = "",
        disabled = false,
        autoFocus = false,
        values: valuesProp,
        onChange: onChangeProp,
        defaultValues = Array<string>(length).fill(""),
    } = options;

    const [focusedIndex, setFocusedIndex] = React.useState(-1);
    const [valuesState, setValues] = React.useState(defaultValues);

    const isControlled = valuesProp !== undefined;
    const isTypeAlphanumeric = type === "alphanumeric";
    const values = isControlled ? valuesProp : valuesState;

    const fieldRefs = React.useRef<HTMLInputElement[]>([]);

    const setFocus = React.useCallback((index = 0) => {
        fieldRefs.current[index].focus();
    }, []);

    React.useEffect(() => {
        if (!autoFocus) return;

        fieldRefs.current[0].focus();
    }, [autoFocus, setFocus]);

    const setBlur = React.useCallback(() => {
        fieldRefs.current[focusedIndex]?.blur();
    }, [focusedIndex]);

    React.useImperativeHandle(
        actionRef,
        () => ({
            focus: (index = 0) => {
                const emptyFieldIndex = values.findIndex((v) => !v);

                setFocus(error ? (emptyFieldIndex === -1 ? index : emptyFieldIndex) : index);
            },
            blur: setBlur,
        }),
        [setBlur, setFocus, values, error],
    );

    const setFieldRef = React.useCallback(
        (index: number) => (ref: HTMLInputElement) => {
            fieldRefs.current[index] = ref;
        },
        [],
    );

    const updateValues = React.useCallback(
        (values: PinInputValues) => {
            if (!isControlled) {
                setValues(values);
            }

            onChangeProp?.(values);
        },
        [isControlled, setValues, onChangeProp],
    );

    const onChange = React.useCallback(
        (index: number): React.ChangeEventHandler<HTMLInputElement> => (event) => {
            let { value } = event.target;

            value = value.trim();

            const regexType = isTypeAlphanumeric ? /^[a-z\d]*$/i : /^\d*$/;

            if (!regexType.test(value)) return;

            if (isTypeAlphanumeric) {
                value = value.toUpperCase();
            }

            // Is used on paste into a field
            if (value.length > 2) {
                if (value.length === values.length) {
                    updateValues(value.split(""));
                    onComplete?.(value);
                }

                return;
            }

            // Used to change the value if it already exists in current field
            if (value.length === 2) {
                const currentValue = values[index];

                if (currentValue === value[0]) {
                    value = value[1];
                } else if (currentValue === value[1]) {
                    value = value[0];
                } else {
                    return;
                }
            }

            const nextValues = values.slice();
            nextValues[index] = value;
            updateValues(nextValues);

            if (value) {
                if (!nextValues.includes("")) {
                    onComplete?.(nextValues.join(""));
                }

                if (index !== values.length - 1) {
                    if (error) {
                        const emptyFieldIndex = nextValues.findIndex((v) => !v);

                        if (emptyFieldIndex !== -1) {
                            setFocus(emptyFieldIndex);
                        }
                    } else {
                        setFocus(index + 1);
                    }
                }
            }
        },
        [isTypeAlphanumeric, values, updateValues, onComplete, error, setFocus],
    );

    const onKeyDown = React.useCallback(
        (index: number): React.KeyboardEventHandler<HTMLInputElement> => (event) => {
            if (event.key === "Backspace" && !values[index] && index) {
                setFocus(index - 1);
            }
        },
        [values, setFocus],
    );

    const clear = React.useCallback(
        ({ focus = false }: PinInputClearOptions = {}) => {
            updateValues(Array<string>(length).fill(""));

            if (focus) {
                setFocus();
            } else {
                setBlur();
            }
        },
        [length, updateValues, setFocus, setBlur],
    );

    const onFocus = React.useCallback(
        (index: number) => () => {
            setFocusedIndex(index);
        },
        [],
    );

    const onBlur = React.useCallback(() => {
        setFocusedIndex(-1);
    }, []);

    const hasFocus = focusedIndex !== -1;

    const fields: PinInputFieldProps[] = values.map((value: string, index: number) => ({
        value,
        disabled,
        ref: setFieldRef(index),
        type: mask ? "password" : "text",
        placeholder: hasFocus ? "" : placeholder,
        autoComplete: otp ? "one-time-code" : "off",
        inputMode: isTypeAlphanumeric ? "text" : "numeric",
        ...(!disabled && {
            onBlur,
            onFocus: onFocus(index),
            onChange: onChange(index),
            onKeyDown: onKeyDown(index),
        }),
    }));

    return { fields, clear, isFocused: hasFocus };
}

export default usePinHook;
