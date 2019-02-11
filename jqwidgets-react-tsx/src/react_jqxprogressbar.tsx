
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxProgressBar extends React.PureComponent<IProgressBarProps, IState> {
    protected static getDerivedStateFromProps(props: IProgressBarProps, state: IState): null | IState {
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

    constructor(props: IProgressBarProps) {
        super(props);

        this._id = 'JqxProgressBar' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IProgressBarProps;
        this._jqx(this._componentSelector).jqxProgressBar(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IProgressBarProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IProgressBarProps): void {
        this._jqx(this._componentSelector).jqxProgressBar(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxProgressBar(option);
    }

    public actualValue(value: number | string): void {
        this._jqx(this._componentSelector).jqxProgressBar('actualValue' , value);
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxProgressBar('destroy' );
    };

    public val(value?: number | string): number {
        return this._jqx(this._componentSelector).jqxProgressBar('val' , value);
    };

    private _manageProps(): IProgressBarProps {
        const widgetProps: string[] = ['animationDuration','colorRanges','disabled','height','layout','max','min','orientation','rtl','renderText','showText','template','theme','value','width'];

        const options = {} as IProgressBarProps;

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

export default JqxProgressBar;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IProgressBarColorRanges {
    stop?: number | string;
    color?: string;
}

export interface IProgressBarRenderText {
    text?: string;
    value?: number;
}

interface IProgressBarOptions {
    animationDuration?: number;
    colorRanges?: IProgressBarColorRanges[];
    disabled?: boolean;
    height?: string  | number;
    layout?: 'normal' | 'reverse';
    max?: string  | number;
    min?: number | string;
    orientation?: 'vertical' | 'horizontal';
    rtl?: boolean;
    renderText?: (text?: IProgressBarRenderText['text'], value?: IProgressBarRenderText['value']) => string;
    showText?: boolean;
    template?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    theme?: string;
    value?: string | number;
    width?: string | number;
}

export interface IProgressBarProps extends IProgressBarOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onComplete?: (e?: Event) => void;
    onInvalidValue?: (e?: Event) => void;
    onValueChanged?: (e?: Event) => void;
}
