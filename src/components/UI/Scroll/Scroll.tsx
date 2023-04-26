import React, {
    Children, FC, MutableRefObject, useEffect, useRef, useState,
} from "react";
import classNames from "classnames";
import styles from "./Scroll.module.sass";

type Props = {
    children: React.ReactNode;
    className?: string;
};

const Scroll: FC<Props> = (props) => {
    const { children, className, ...rest } = props;
    const [clientX, setClientX] = useState(0);
    const [scrollX, setScrollX] = useState(0);
    const [scrolling, setScrolling] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const container = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;
    const count = Children.toArray(children).length;

    useEffect(() => {
        if (!isPressed) return;

        const onMouseUp = () => {
            setIsPressed(false);
            setScrolling(false);
        };

        const onMouseMove = (e: MouseEvent) => {
            e.preventDefault();
            setScrolling(true);

            const x = e.pageX - container.current.offsetLeft;
            const walk = x - clientX;
            container.current.scrollLeft = scrollX - walk;
        };

        document.addEventListener("mouseup", onMouseUp);
        document.addEventListener("mousemove", onMouseMove);
        return () => {
            document.removeEventListener("mouseup", onMouseUp);
            document.removeEventListener("mousemove", onMouseMove);
        };
    }, [clientX, scrollX, isPressed]);

    useEffect(() => {
        if (!scrolling) return;

        const element = container.current;

        document.body.style.cursor = "grabbing";
        element.style.pointerEvents = "none";
        return () => {
            document.body.style.removeProperty("cursor");
            element.style.removeProperty("pointer-events");
        };
    }, [scrolling]);

    const onMouseDown = (e: React.MouseEvent) => {
        setIsPressed(true);
        setScrollX(container.current.scrollLeft);
        setClientX(e.pageX - container.current.offsetLeft);
    };

    if (!count) return null;

    return (
        <div
            ref={container}
            onMouseDown={onMouseDown}
            className={classNames(
                styles.scroll,
                styles["hide-scrollbars"],
                className,
            )}
            {...rest}
        >
            {children}
        </div>
    );
};

export default Scroll;
