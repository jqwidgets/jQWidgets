import * as React from 'react';
declare class JqxListMenu extends React.PureComponent<IListMenuProps, IState> {
    protected static defaultProps: IListMenuProps;
    protected static getDerivedStateFromProps(props: IListMenuProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IListMenuProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IListMenuProps): void;
    setOptions(options: IListMenuProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    back(): void;
    changePage(Item: any): void;
    destroy(): void;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxListMenu;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IListMenuFilterCallback {
    text?: string;
    searchValue?: string | number;
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
export interface IListMenuProps extends IListMenuOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
