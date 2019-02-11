
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxTooltip extends React.PureComponent<ITooltipProps, IState> {
    protected static getDerivedStateFromProps(props: ITooltipProps, state: IState): null | IState {
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

    constructor(props: ITooltipProps) {
        super(props);

        this._id = 'JqxTooltip' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as ITooltipProps;
        this._jqx(this._componentSelector).jqxTooltip(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as ITooltipProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: ITooltipProps): void {
        this._jqx(this._componentSelector).jqxTooltip(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxTooltip(option);
    }

    public close(index?: number): void {
        this._jqx(this._componentSelector).jqxTooltip('close' , index);
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxTooltip('destroy' );
    };

    public open(left?: number, top?: number): void {
        this._jqx(this._componentSelector).jqxTooltip('open' , left, top);
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxTooltip('refresh' );
    };

    private _manageProps(): ITooltipProps {
        const widgetProps: string[] = ['absolutePositionX','absolutePositionY','autoHide','autoHideDelay','animationShowDelay','animationHideDelay','content','closeOnClick','disabled','enableBrowserBoundsDetection','height','left','name','opacity','position','rtl','showDelay','showArrow','top','trigger','theme','width'];

        const options = {} as ITooltipProps;

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

export default JqxTooltip;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface ITooltipOptions {
    absolutePositionX?: number;
    absolutePositionY?: number;
    autoHide?: boolean;
    autoHideDelay?: number;
    animationShowDelay?: number | string;
    animationHideDelay?: number | string;
    content?: string;
    closeOnClick?: boolean;
    disabled?: boolean;
    enableBrowserBoundsDetection?: boolean;
    height?: number | string;
    left?: number;
    name?: string;
    opacity?: number;
    position?: 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right' | 'absolute' | 'mouse' | 'mouseenter' | 'default';
    rtl?: boolean;
    showDelay?: number;
    showArrow?: boolean;
    top?: number | string;
    trigger?: 'hover' | 'click' | 'none';
    theme?: string;
    width?: number | string;
}

export interface ITooltipProps extends ITooltipOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onClose?: (e?: Event) => void;
    onClosing?: (e?: Event) => void;
    onOpen?: (e?: Event) => void;
    onOpening?: (e?: Event) => void;
}
