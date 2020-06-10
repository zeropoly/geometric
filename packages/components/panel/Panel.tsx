import React, { FC, ReactNode } from 'react';
import { useStyles } from '@trousers/core';
import collector from '@trousers/collector';

import { Theme } from '@precursor/theme';

export interface PanelProps {
    children: ReactNode;
}

const styles = collector<Theme>('Panel').element`
    border-radius: ${({ radii }) => radii[1]};
    border: ${({ borders }) => borders.base};
    padding: 1.5rem;
    margin-bottom: 2rem;

    & > *:first-child {
        margin-top: 0px;
    }

    & > *:last-child {
        margin-bottom: 0px;
    }
`;

const Panel: FC<PanelProps> = props => {
    const classNames = useStyles(styles);

    return <div className={classNames}>{props.children}</div>;
};

export default Panel;