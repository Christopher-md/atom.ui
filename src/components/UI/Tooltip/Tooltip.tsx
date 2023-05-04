import React, { useRef, useState } from "react";
import classNames from "classnames";
import { usePopper } from "react-popper";
import { Transition } from "react-transition-group";
import type Props from "./types";
import styles from "./Tooltip.module.sass";

const Tooltip: React.FC<Props> = (props) => {
    const { text, children } = props;

    const ref = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [popper, setPopper] = useState<HTMLDivElement | null>(null);
    const [tooltip, setTooltip] = useState<HTMLButtonElement | null>(null);

    const { styles: style, attributes } = usePopper(tooltip, popper, {
        modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
    });

    const handleMouseEnter = () => setIsOpen(true);

    const handleMouseLeave = () => setIsOpen(false);

    return (
        <div
            ref={ref}
            className={styles.wrapper}
        >
            <button
                ref={setTooltip}
                className={styles.tooltip}
                aria-describedby="tooltip"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </button>

            <Transition
                in={isOpen}
                mountOnEnter
                unmountOnExit
                timeout={{
                    appear: 0,
                    exit: 500,
                    enter: 500,
                }}
            >
                {(state) => (
                    <div
                        role="tooltip"
                        ref={setPopper}
                        style={style.popper}
                        className={classNames(
                            styles.popper,
                            styles[`animation-${state}`],
                        )}
                        {...attributes.popper}
                    >
                        {text}
                        <div
                            data-popper-arrow
                            style={style.arrow}
                            className={styles.arrow}
                        />
                    </div>
                )}
            </Transition>
        </div>
    );
};

export default Tooltip;
