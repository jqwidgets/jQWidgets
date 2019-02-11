
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxPopover extends React.PureComponent<IPopoverProps, IState> {
    protected static getDerivedStateFromProps(props: IPopoverProps, state: IState): null | IState {
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

    constructor(props: IPopoverProps) {
        super(props);

        this._id = 'JqxPopover' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IPopoverProps;
        this._jqx(this._componentSelector).jqxPopover(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IPopoverProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IPopoverProps): void {
        this._jqx(this._componentSelector).jqxPopover(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxPopover(option);
    }

    public close(): void {
        this._jqx(this._componentSelector).jqxPopover('close' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxPopover('destroy' );
    };

    public open(): void {
        this._jqx(this._componentSelector).jqxPopover('open' );
    };

    private _manageProps(): IPopoverProps {
        const widgetProps: string[] = ['arrowOffsetValue','animationOpenDelay','animationCloseDelay','autoClose','animationType','height','initContent','isModal','offset','position','rtl','selector','showArrow','showCloseButton','width','title','theme'];

        const options = {} as IPopoverProps;

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

export default JqxPopover;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface IPopoverOptions {
    arrowOffsetValue?: number;
    animationOpenDelay?: number | string;
    animationCloseDelay?: number | string;
    autoClose?: boolean;
    animationType?: 'none' | 'fade';
    height?: number | string;
    initContent?: () => void;
    isModal?: boolean;
    offset?: any;
    position?: 'top' | 'bottom' | 'left' | 'right';
    rtl?: boolean;
    selector?: string;
    showArrow?: boolean;
    showCloseButton?: boolean;
    width?: number | string;
    title?: string | number;
    theme?: string;
}

export interface IPopoverProps extends IPopoverOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onClose?: (e?: Event) => void;
    onOpen?: (e?: Event) => void;
}
