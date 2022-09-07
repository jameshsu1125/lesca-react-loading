import { CSSProperties } from 'react';
import './style.css';
declare type Props = {
    position: CSSProperties;
    scale: CSSProperties;
    backgroundColor: CSSProperties;
    iconColor: CSSProperties;
    children?: JSX.Element;
};
declare const LoadingProcess: {
    ({ children, position, scale, backgroundColor, iconColor }: Props): JSX.Element;
    defaultProps: {
        position: string;
        scale: number;
        backgroundColor: string;
        iconColor: string;
    };
};
export default LoadingProcess;
