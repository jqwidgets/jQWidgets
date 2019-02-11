
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxRepeatButton extends React.PureComponent<IRepeatButtonProps, IState> {
    protected static getDerivedStateFromProps(props: IRepeatButtonProps, state: IState): null | IState {
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

    constructor(props: IRepeatButtonProps) {
        super(props);

        this._id = 'JqxRepeatButton' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IRepeatButtonProps;
        this._jqx(this._componentSelector).jqxRepeatButton(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IRepeatButtonProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IRepeatButtonProps): void {
        this._jqx(this._componentSelector).jqxRepeatButton(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxRepeatButton(option);
    }

    public destroy(): void {
        this._jqx(this._componentSelector).jqxRepeatButton('destroy' );
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxRepeatButton('focus' );
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxRepeatButton('render' );
    };

    public val(value?: string): string {
        return this._jqx(this._componentSelector).jqxRepeatButton('val' , value);
    };

    private _manageProps(): IRepeatButtonProps {
        const widgetProps: string[] = ['delay','disabled','height','imgSrc','imgWidth','imgHeight','imgPosition','roundedCorners','rtl','textPosition','textImageRelation','theme','template','toggled','width','value'];

        const options = {} as IRepeatButtonProps;

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

export default JqxRepeatButton;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface IRepeatButtonOptions {
    delay?: number;
    disabled?: boolean;
    height?: number | string;
    imgSrc?: string;
    imgWidth?: number | string;
    imgHeight?: number | string;
    imgPosition?: 'left' | 'center' | 'right' | 'top' | 'bottom' | 'topLeft' | 'bottomLeft' | 'topRight' | 'bottomRight';
    roundedCorners?: 'top' | 'bottom' | 'all' | 'left' | 'right' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
    rtl?: boolean;
    textPosition?: 'left' | 'center' | 'right' | 'top' | 'bottom' | 'topLeft' | 'bottomLeft' | 'topRight' | 'bottomRight';
    textImageRelation?: 'imageBeforeText' | 'imageAboveText' | 'textAboveImage' | 'textBeforeImage' | 'overlay';
    theme?: string;
    template?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'inverse' | 'info' | 'link';
    toggled?: boolean;
    width?: string | number;
    value?: string;
}

export interface IRepeatButtonProps extends IRepeatButtonOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onClick?: (e?: Event) => void;
}
