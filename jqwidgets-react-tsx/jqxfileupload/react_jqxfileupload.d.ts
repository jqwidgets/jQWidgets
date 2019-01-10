import * as React from 'react';
declare class JqxFileUpload extends React.PureComponent<IFileUploadProps, IState> {
    protected static defaultProps: IFileUploadProps;
    protected static getDerivedStateFromProps(props: IFileUploadProps, state: IState): null | IState;
    private _jqx;
    private _id;
    private _componentSelector;
    constructor(props: IFileUploadProps);
    componentDidUpdate(): void;
    componentDidMount(): void;
    render(): React.ReactNode;
    createComponent(options: IFileUploadProps): void;
    setOptions(options: IFileUploadProps): void;
    getOptions(option: string): any;
    addEventListener(name: string, callbackFn: (e?: Event) => void): void;
    removeEventListener(name: string): void;
    browse(): void;
    cancelFile(fileIndex: number): void;
    cancelAll(): void;
    destroy(): void;
    renderWidget(): void;
    refresh(): void;
    uploadFile(fileIndex: number): void;
    uploadAll(): void;
    private _createComponent;
    private _manageProps;
    private _wireEvents;
}
export default JqxFileUpload;
export declare const jqx: any;
export declare const JQXLite: any;
export declare const jqwidgets: any;
interface IState {
    lastProps: object;
}
interface IFileUploadLocalization {
    browseButton?: string;
    uploadButton?: string;
    cancelButton?: string;
    uploadFileTooltip?: string;
    cancelFileTooltip?: string;
}
interface IFileUploadRenderFiles {
    fileName?: string;
}
interface IFileUploadOptions {
    autoUpload?: boolean;
    accept?: string;
    browseTemplate?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'inverse' | 'info' | 'link';
    cancelTemplate?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'inverse' | 'info' | 'link';
    disabled?: boolean;
    fileInputName?: string;
    height?: number | string;
    localization?: IFileUploadLocalization;
    multipleFilesUpload?: boolean;
    renderFiles?: (filename: IFileUploadRenderFiles['fileName']) => void;
    rtl?: boolean;
    theme?: string;
    uploadUrl?: string;
    uploadTemplate?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'inverse' | 'info' | 'link';
    width?: string | number;
}
export interface IFileUploadProps extends IFileUploadOptions {
    autoCreate?: boolean;
    className?: string;
    style?: React.CSSProperties;
    onRemove?: (e?: Event) => void;
    onSelect?: (e?: Event) => void;
    onUploadStart?: (e?: Event) => void;
    onUploadEnd?: (e?: Event) => void;
}
