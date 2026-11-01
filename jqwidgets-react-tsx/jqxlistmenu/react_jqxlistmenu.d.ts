import * as React from 'react';
declare class JqxListMenu extends React.PureComponent<IListMenuProps> {
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
    constructor(props: IListMenuProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IListMenuProps): void;
    getOptions(option: string): any;
    back(): void;
    changePage(Item: any): void;
    destroy(): void;
    disable(): void;
    enable(): void;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxListMenu;
export declare const jqx: any;
export declare const JQXLite: any;
export interface IListMenuFilterCallback {
    text: string;
    searchValue: string;
}
interface IListMenuOptions {
    alwaysShowNavigationArrows?: boolean;
    animationType?: 'slide' | 'fade';
    animationDuration?: number | string;
    autoSeparators?: boolean;
    backLabel?: number | string;
    disabled?: boolean;
    enableScrolling?: boolean;
    filterCallback?: (text: IListMenuFilterCallback['text'], searchValue: IListMenuFilterCallback['searchValue']) => boolean;
    height?: number | string;
    headerAnimationDuration?: number | string;
    placeHolder?: number | string;
    readOnly?: boolean;
    rtl?: boolean;
    roundedCorners?: boolean;
    showNavigationArrows?: boolean;
    showFilter?: boolean;
    showHeader?: boolean;
    showBackButton?: boolean;
    theme?: string;
    width?: string | number;
}
export interface IListMenuProps extends IListMenuOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
