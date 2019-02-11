
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxFileUpload extends React.PureComponent<IFileUploadProps, IState> {
    protected static getDerivedStateFromProps(props: IFileUploadProps, state: IState): null | IState {
        if (!Object.is) {
            Object.is = function (x, y) {
                if (x === y) {
                    return x !== 0 || 1 / x === 1 / y;
                } else {
                    return x !== x && y !== y;
                }
            };
        }

        const areEqual = Object.is(props, state.lastProps) as boolean;

        if (!areEqual) {
            const newState = { lastProps: props } as IState;
            return newState;
        }

        return null;
    }

    /* tslint:disable:variable-name */
    private _jqx = JQXLite as any;
    /* tslint:disable:variable-name */
    private _id: string;
    /* tslint:disable:variable-name */
    private _componentSelector: string;

    constructor(props: IFileUploadProps) {
        super(props);

        this._id = 'JqxFileUpload' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IFileUploadProps;
        this._jqx(this._componentSelector).jqxFileUpload(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IFileUploadProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IFileUploadProps): void {
        this._jqx(this._componentSelector).jqxFileUpload(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxFileUpload(option);
    }

    public browse(): void {
        this._jqx(this._componentSelector).jqxFileUpload('browse' );
    };

    public cancelFile(fileIndex: number): void {
        this._jqx(this._componentSelector).jqxFileUpload('cancelFile' , fileIndex);
    };

    public cancelAll(): void {
        this._jqx(this._componentSelector).jqxFileUpload('cancelAll' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxFileUpload('destroy' );
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxFileUpload('render' );
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxFileUpload('refresh' );
    };

    public uploadFile(fileIndex: number): void {
        this._jqx(this._componentSelector).jqxFileUpload('uploadFile' , fileIndex);
    };

    public uploadAll(): void {
        this._jqx(this._componentSelector).jqxFileUpload('uploadAll' );
    };

    private _manageProps(): IFileUploadProps {
        const widgetProps: string[] = ['autoUpload','accept','browseTemplate','cancelTemplate','disabled','fileInputName','height','localization','multipleFilesUpload','renderFiles','rtl','theme','uploadUrl','uploadTemplate','width'];

        const options = {} as IFileUploadProps;

        for (const prop in this.props) {
            if (widgetProps.indexOf(prop) !== -1) {
                 options[prop] = this.props[prop];
            }
        }

        return options;
    }

    private _wireEvents(): void {
        for (const prop in this.props) {
            if (prop.indexOf('on') === 0) {
                let originalEventName = prop.slice(2) as string;
                originalEventName = originalEventName.charAt(0).toLowerCase() + originalEventName.slice(1);
                this._jqx(this._componentSelector).on(originalEventName, this.props[prop]);
            }
        }
    }
}

export default JqxFileUpload;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IFileUploadLocalization {
    browseButton?: string;
    uploadButton?: string;
    cancelButton?: string;
    uploadFileTooltip?: string;
    cancelFileTooltip?: string;
}

export interface IFileUploadRenderFiles {
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
    renderFiles?: (filename:IFileUploadRenderFiles['fileName']) => void;
    rtl?: boolean;
    theme?: string;
    uploadUrl?: string;
    uploadTemplate?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'inverse' | 'info' | 'link';
    width?: string | number;
}

export interface IFileUploadProps extends IFileUploadOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onRemove?: (e?: Event) => void;
    onSelect?: (e?: Event) => void;
    onUploadStart?: (e?: Event) => void;
    onUploadEnd?: (e?: Event) => void;
}
