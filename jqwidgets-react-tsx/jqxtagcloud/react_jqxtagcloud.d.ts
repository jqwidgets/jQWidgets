import * as React from 'react';
declare class JqxTagCloud extends React.PureComponent<ITagCloudProps> {
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
    constructor(props: ITagCloudProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: ITagCloudProps): void;
    getOptions(option: string): any;
    destroy(): void;
    findTagIndex(tag: string): number;
    getHiddenTagsList(): any[];
    getRenderedTags(): any[];
    getTagsList(): any[];
    hideItem(index: number): void;
    insertAt(index: number, item: any): void;
    removeAt(index: number): void;
    updateAt(index: number, item: any): void;
    showItem(index: number): void;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxTagCloud;
export declare const jqx: any;
export declare const JQXLite: any;
export interface ITagCloudTagRenderer {
    itemData: any;
    minValue: number;
    valueRange: number;
}
export interface ITagCloudSource {
    url?: string;
    data?: any;
    localdata?: string;
    datatype?: 'xml' | 'json' | 'jsonp' | 'tsv' | 'csv' | 'local' | 'array' | 'observablearray';
    type?: string;
    id?: string;
    root?: string;
    record?: string;
}
interface ITagCloudOptions {
    alterTextCase?: 'none' | 'allLower' | 'allUpper' | 'firstUpper' | 'titleCase';
    autoBind?: boolean;
    disabled?: boolean;
    displayLimit?: number;
    displayMember?: string;
    displayValue?: boolean;
    fontSizeUnit?: 'px' | 'em' | '%';
    height?: number | string;
    maxColor?: string;
    maxFontSize?: number;
    maxValueToDisplay?: number;
    minColor?: string;
    minFontSize?: number;
    minValueToDisplay?: number;
    rtl?: boolean;
    sortBy?: 'none' | 'label' | 'value';
    sortOrder?: 'ascending' | 'descending';
    source?: ITagCloudSource;
    tagRenderer?: (itemData: ITagCloudTagRenderer['itemData'], minValue: ITagCloudTagRenderer['minValue'], valueRange: ITagCloudTagRenderer['valueRange']) => any;
    takeTopWeightedItems?: boolean;
    textColor?: string;
    theme?: string;
    urlBase?: string;
    urlMember?: string;
    valueMember?: string;
    width?: string | number;
}
export interface ITagCloudProps extends ITagCloudOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onBindingComplete?: (e?: any) => void;
    onBindingUpdateComplete?: (e?: any) => void;
    onItemClick?: (e?: any) => void;
}
