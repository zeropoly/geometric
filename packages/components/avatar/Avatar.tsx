/** @jsx jsx */
import { FC } from 'react';
import { jsx, css } from '@trousers/core';

import Image, { ImageProps } from '@precursor/image';

export interface AvatarProps extends ImageProps {
    href: string;
}

const Avatar: FC<AvatarProps> = ({ href, src, alt }) => (
    <a
        css={css`
            display: inline-block;
            position: relative;
            outline: 0px;
            height: 64px;
            width: 64px;
            overflow: hidden;
            border-radius: 50%;
            border: ${({ border }) => `${border.size[2]} solid  white`};
            transition: border 200ms;

            &:focus,
            &:hover {
                border: ${({ border }) =>
                    `${border.size[2]} solid ${border.color.focus}`}
                outline: 0;
            }
        `}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
    >
        <Image src={src} alt={alt} />
    </a>
);

export default Avatar;
