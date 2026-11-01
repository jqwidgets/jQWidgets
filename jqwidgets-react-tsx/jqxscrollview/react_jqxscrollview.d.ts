import * as React from 'react';
declare class JqxScrollView extends React.PureComponent<IScrollViewProps> {
    private _jqx;
    private _id;
    private _componentSelector;
    private _rendered;
    private _host;
    private _appliedOptions;
    private _eventHandlers;
    private _eventElement;
    private _teardownPending;
    private _mounting;
    private _hostParent;
    private _hostNext;
    private _widgetPlace;
    private _hostChildren;
    private _changedInARow;
    private _warned;
    constructor(props: IScrollViewProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IScrollViewProps): void;
    getOptions(option: string): any;
    back(): void;
    changePage(index: number): void;
    destroy(): void;
    forward(): void;
    refresh(): void;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxScrollView;
export declare const jqx: any;
export declare const JQXLite: any;
interface IScrollViewOptions {
    animationDuration?: number;
    bounceEnabled?: boolean;
    buttonsOffset?: number[];
    carouselString?: string;
    currentPage?: number;
    disabled?: boolean;
    dragEnabled?: boolean;
    height?: string | number;
    moveThreshold?: number;
    showButtons?: boolean;
    slideString?: string;
    slideShow?: boolean;
    slideDuration?: number;
    theme?: string;
    width?: string | number;
}
export interface IScrollViewProps extends IScrollViewOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onPageChanged?: (e?: any) => void;
}
