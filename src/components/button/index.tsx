'use client';

import type { NextPage } from 'next';
import style from './index.module.css';

type Props = {
    text: String;
    onClick: () => void;
};

export default (props => {
    const { text, onClick } = props;
    return (
        <button className={style.button} onClick={onClick}>
            {text}
        </button>
    );
}) as NextPage<Props>;
