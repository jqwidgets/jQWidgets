
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxTagCloud extends React.PureComponent<ITagCloudProps, IState> {
    protected static getDerivedStateFromProps(props: ITagCloudProps, state: IState): null | IState {
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

    constructor(props: ITagCloudProps) {
        super(props);

        this._id = 'JqxTagCloud' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as ITagCloudProps;
        this._jqx(this._componentSelector).jqxTagCloud(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as ITagCloudProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: ITagCloudProps): void {
        this._jqx(this._componentSelector).jqxTagCloud(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxTagCloud(option);
    }

    public destroy(): void {
        this._jqx(this._componentSelector).jqxTagCloud('destroy' );
    };

    public findTagIndex(tag: string): number {
        return this._jqx(this._componentSelector).jqxTagCloud('findTagIndex' , tag);
    };

    public getHiddenTagsList(): any[] {
        return this._jqx(this._componentSelector).jqxTagCloud('getHiddenTagsList' );
    };

    public getRenderedTags(): any[] {
        return this._jqx(this._componentSelector).jqxTagCloud('getRenderedTags' );
    };

    public getTagsList(): any[] {
        return this._jqx(this._componentSelector).jqxTagCloud('getTagsList' );
    };

    public hideItem(index: number): void {
        this._jqx(this._componentSelector).jqxTagCloud('hideItem' , index);
    };

    public insertAt(index: number, item: any): void {
        this._jqx(this._componentSelector).jqxTagCloud('insertAt' , index, item);
    };

    public removeAt(index: number): void {
        this._jqx(this._componentSelector).jqxTagCloud('removeAt' , index);
    };

    public updateAt(index: number, item: any): void {
        this._jqx(this._componentSelector).jqxTagCloud('updateAt' , index, item);
    };

    public showItem(index: number): void {
        this._jqx(this._componentSelector).jqxTagCloud('showItem' , index);
    };

    private _manageProps(): ITagCloudProps {
        const widgetProps: string[] = ['alterTextCase','disabled','displayLimit','displayMember','displayValue','fontSizeUnit','height','maxColor','maxFontSize','maxValueToDisplay','minColor','minFontSize','minValueToDisplay','rtl','sortBy','sortOrder','source','tagRenderer','takeTopWeightedItems','textColor','urlBase','urlMember','valueMember','width'];

        const options = {} as ITagCloudProps;

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

export default JqxTagCloud;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface ITagCloudTagRenderer {
    itemData?: any;
    minValue?: number;
    valueRange?: number;
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
    urlBase?: string;
    urlMember?: string;
    valueMember?: string;
    width?: string | number;
}

export interface ITagCloudProps extends ITagCloudOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onBindingComplete?: (e?: Event) => void;
    onItemClick?: (e?: Event) => void;
}
