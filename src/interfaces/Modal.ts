import { ReactNode, RefObject } from 'react';

export interface IModal {
    children: ReactNode;
    reference: RefObject<HTMLDivElement>;
};
