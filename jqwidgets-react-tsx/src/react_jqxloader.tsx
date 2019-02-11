
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxLoader extends React.PureComponent<ILoaderProps, IState> {
    protected static getDerivedStateFromProps(props: ILoaderProps, state: IState): null | IState {
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

    constructor(props: ILoaderProps) {
        super(props);

        this._id = 'JqxLoader' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as ILoaderProps;
        this._jqx(this._componentSelector).jqxLoader(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as ILoaderProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: ILoaderProps): void {
        this._jqx(this._componentSelector).jqxLoader(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxLoader(option);
    }

    public close(): void {
        this._jqx(this._componentSelector).jqxLoader('close' );
    };

    public open(left?: number | string, top?: number | string): void {
        this._jqx(this._componentSelector).jqxLoader('open' , left, top);
    };

    private _manageProps(): ILoaderProps {
        const widgetProps: string[] = ['autoOpen','height','html','isModal','imagePosition','rtl','text','textPosition','theme','width'];

        const options = {} as ILoaderProps;

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

export default JqxLoader;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface ILoaderOptions {
    autoOpen?: boolean;
    height?: string | number;
    html?: string;
    isModal?: boolean;
    imagePosition?: 'center' | 'top' | 'bottom';
    rtl?: boolean;
    text?: number | string;
    textPosition?: 'top' | 'bottom' | 'left' | 'right';
    theme?: string;
    width?: string | number;
}

export interface ILoaderProps extends ILoaderOptions {
    className?: string; 
    style?: React.CSSProperties; 
}
