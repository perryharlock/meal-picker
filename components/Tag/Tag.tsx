import React from 'react'
import styles from './Tag.module.scss'

export type TagProps = {
    tag: string;
};

export const Tag: React.FC<TagProps> = ({ tag }) => {
    return (
        <li className={styles.tag}>
            {tag}
        </li>
    );
};