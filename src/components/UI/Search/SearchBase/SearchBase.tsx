import React from "react";
import classNames from "classnames";
import { ReactComponent as Icon } from "@/assets/search.svg";
import type { Props } from "./types";
import styles from "./SearchBase.module.sass";

/**
 * Created by chaikovskiy on 05.06.2023
 */
const SearchBase: React.FC<Props> = (props) => {
    const { onEnter, onSearch, onKeyDown, className, ...rest } = props;

    const onHandleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.key === "Enter" && onEnter) {
            onEnter();
        }

        if (onKeyDown) {
            onKeyDown(event);
        }
    };

    return (
        <>
            <input
                autoComplete="off"
                onKeyDown={onHandleKeyDown}
                className={classNames(
                    styles.input,
                    className,
                )}
                {...rest}
            />
            <button
                onClick={onSearch}
                className={styles["btn-icon"]}
            >
                <Icon className={styles.icon} />
            </button>
        </>
    );
};

export default SearchBase;
