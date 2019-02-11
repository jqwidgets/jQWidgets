
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxDropDownButton extends React.PureComponent<IDropDownButtonProps, IState> {
    protected static getDerivedStateFromProps(props: IDropDownButtonProps, state: IState): null | IState {
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

    constructor(props: IDropDownButtonProps) {
        super(props);

        this._id = 'JqxDropDownButton' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IDropDownButtonProps;
        this._jqx(this._componentSelector).jqxDropDownButton(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IDropDownButtonProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IDropDownButtonProps): void {
        this._jqx(this._componentSelector).jqxDropDownButton(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxDropDownButton(option);
    }

    public close(): void {
        this._jqx(this._componentSelector).jqxDropDownButton('close' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxDropDownButton('destroy' );
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxDropDownButton('focus' );
    };

    public getContent(): any {
        return this._jqx(this._componentSelector).jqxDropDownButton('getContent' );
    };

    public isOpened(): boolean {
        return this._jqx(this._componentSelector).jqxDropDownButton('isOpened' );
    };

    public open(): void {
        this._jqx(this._componentSelector).jqxDropDownButton('open' );
    };

    public setContent(content: string): void {
        this._jqx(this._componentSelector).jqxDropDownButton('setContent' , content);
    };

    private _manageProps(): IDropDownButtonProps {
        const widgetProps: string[] = ['animationType','arrowSize','autoOpen','closeDelay','disabled','dropDownHorizontalAlignment','dropDownVerticalAlignment','dropDownWidth','enableBrowserBoundsDetection','height','initContent','openDelay','popupZIndex','rtl','template','theme','width'];

        const options = {} as IDropDownButtonProps;

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

export default JqxDropDownButton;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface IDropDownButtonOptions {
    animationType?: 'none' | 'slide' | 'fade';
    arrowSize?: number;
    autoOpen?: boolean;
    closeDelay?: number;
    disabled?: boolean;
    dropDownHorizontalAlignment?: 'left' | 'right';
    dropDownVerticalAlignment?: 'top' | 'bottom';
    dropDownWidth?: number | string;
    enableBrowserBoundsDetection?: boolean;
    height?: string | number;
    initContent?: () => void;
    openDelay?: number;
    popupZIndex?: number;
    rtl?: boolean;
    template?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
    theme?: string;
    width?: string | number;
}

export interface IDropDownButtonProps extends IDropDownButtonOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onClose?: (e?: Event) => void;
    onOpen?: (e?: Event) => void;
}
