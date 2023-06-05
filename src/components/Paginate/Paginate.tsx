import React from "react";
import ReactPaginate from "react-paginate";
import { ReactComponent as Next } from "@/assets/next.svg";
import { ReactComponent as Prev } from "@/assets/prev.svg";
import type Props from "./types";
import styles from "./Paginate.module.sass";

/**
 * Created by chaikovskiy on 05.06.2023
 */
const Paginate: React.FC<Props> = (props) => {
    const { pageRangeDisplayed = 1, marginPagesDisplayed = 2, ...rest } = props;

    return (
        <ReactPaginate
            nextLabel={<Next />}
            previousLabel={<Prev />}
            pageLinkClassName={styles.page}
            nextLinkClassName={styles.next}
            breakLinkClassName={styles.break}
            activeLinkClassName={styles.active}
            previousLinkClassName={styles.prev}
            disabledClassName={styles.disabled}
            containerClassName={styles.container}
            pageRangeDisplayed={pageRangeDisplayed}
            marginPagesDisplayed={marginPagesDisplayed}
            {...rest}
        />
    );
};

export default Paginate;
