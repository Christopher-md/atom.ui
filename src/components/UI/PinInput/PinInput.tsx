import React from "react";
import usePinHook from "./hooks/usePinHook/usePinHook";
import type Props from "./types";
import styles from "./PinInput.module.sass";

/**
 * Created by chaikovskiy on 26.05.2023
 */
const PinInput: React.FC<Props> = (props) => {
    const { fields } = usePinHook(props);

    return (
        <div className={styles["pin__wrapper-input"]}>
            {fields.map((fieldProps, index) => (
                <div
                    key={`pin__input-${index}`}
                    className={styles.container}
                >
                    <input
                        className={styles["pin-input"]}
                        {...fieldProps}
                    />
                </div>
            ))}
        </div>
    );
};

export default PinInput;
