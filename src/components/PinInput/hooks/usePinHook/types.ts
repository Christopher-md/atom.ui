import * as React from "react";

export type PinInputValues = string[];

export interface PinInputActions {
    /**
     * Imperative function call to lose focus.
     */
    blur: () => void
    /**
     * Imperative function call to set focus on the first empty field.
     * In the case when `error: true`, the focus is set to the first empty field.
     * The argument takes an optional parameter in the form
     * of a number (ordinal index), which will set the focus on a specific field.
     * @param {number} index
     */
    focus: (index?: number) => void
}

export interface UsePinInputProps {
    /**
     * The length of your PIN code
     */
    length?: number
    /**
     * Field values. If no values are passed, the default value defined in `defaultValues` is used.
     */
    values?: PinInputValues
    /**
     * The function is called every time the value changes.
     * @param {PinInputValues} values
     */
    onChange?: (values: PinInputValues) => void
    /**
     * The function is called when all fields are filled in.
     * @param {string} value
     */
    onComplete?: (value: string) => void
    /**
     * A reference to imperative actions.
     */
    actionRef?: React.Ref<PinInputActions>
    /**
     * Automatic focus setting at the first mount, is set to the first field.
     */
    autoFocus?: boolean
    /**
     * In the case when the component is unmanaged, default values are set,
     * where the number of values in the array is equal to the number of fields.
     */
    defaultValues?: PinInputValues
    /**
     * Changes the type of keyboard display on mobile devices.
     */
    type?: "numeric" | "alphanumeric"
    /**
     * If `true`, then the attribute `autocomplete="one-time-code"` is added, otherwise
     * `autocomplete="off"`.
     */
    otp?: boolean
    /**
     * Placeholder for the `input` element.
     */
    placeholder?: string
    /**
     * If `true`, the transmission of event handlers `onChange`, `onBlur`, `onFocus` and `onKeyDown`
     * in the parameters of each field is prevented.
     */
    disabled?: boolean
    /**
     * If `true`, then the attribute `type="password"` is set, otherwise `type="text"`.
     */
    mask?: boolean
    /**
     * If `true`, then the focus behavior on the fields changes.
     */
    error?: boolean
}

export type PinInputClearOptions = {
    /**
     * If `true`, then the focus is set on the first field, otherwise after clearing it disappears.
     */
    focus?: boolean
};

export interface PinInputFieldProps {
    /**
     * Returns a callback function to register the field.
     */
    ref: React.RefCallback<HTMLInputElement>
    /**
     * Returns the value of the field.
     */
    value: string
    /**
     * Returns the value passed by the `disabled` parameter.
     */
    disabled: boolean
    /**
     * Returns either `one-time-code` if the parameter `otp: true` was passed, otherwise `off`.
     */
    autoComplete: "one-time-code" | "off"
    /**
     * Returns either `text` if the parameter `type: 'alphanumeric'`
     * was passed, otherwise `numeric`.
     */
    inputMode: "text" | "numeric"
    /**
     * Returns either `password` if the `mask: true` parameter was passed, or `text`.
     */
    type: "text" | "password"
    /**
     * Returns the value passed by the `placeholder` parameter if there are no focused fields.
     */
    placeholder: string
    /**
     * Returns the handler for the focus loss event if `disabled: false`.
     * @param {React.FocusEvent<HTMLInputElement>} event
     */
    onBlur?: React.FocusEventHandler<HTMLInputElement>
    /**
     * Returns the handler for the focus appearance event if `disabled: false`.
     * @param {React.FocusEvent<HTMLInputElement>} event
     */
    onFocus?: React.FocusEventHandler<HTMLInputElement>
    /**
     * Returns a handler for the field change event if `disabled: false`.
     * @param {React.ChangeEvent<HTMLInputElement>} event
     */
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    /**
     * Returns a handler for the keystroke event if `disabled: false`.
     * @param {React.KeyboardEvent<HTMLInputElement>} event
     */
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
}
