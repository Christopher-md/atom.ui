import React, { useState } from "react";
import classNames from "classnames";
import { usePopper } from "react-popper";
import { createPortal } from "react-dom";
import { Transition } from "react-transition-group";
import type Props from "./types";
import styles from "./Tooltip.module.sass";

const timeout = { appear: 0, exit: 500, enter: 500 };

const Tooltip: React.FC<Props> = (props) => {
    const { text, children, className } = props;

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [popper, setPopper] = useState<HTMLDivElement | null>(null);
    const [tooltip, setTooltip] = useState<HTMLDivElement | null>(null);

    const { styles: style, attributes } = usePopper(tooltip, popper, {
        modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
    });

    const handleMouseEnter = () => setIsOpen(true);

    const handleMouseLeave = () => setIsOpen(false);

    return (
        <div className={classNames(styles["tooltip-wrapper"], className)}>
            <div
                ref={setTooltip}
                aria-describedby="tooltip"
                className={styles.tooltip}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </div>

            {createPortal(
                <Transition
                    in={isOpen}
                    mountOnEnter
                    unmountOnExit
                    timeout={timeout}
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
                </Transition>,
                document.body,
            )}
        </div>
    );
};

export default Tooltip;
