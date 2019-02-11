
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxMenu extends React.PureComponent<IMenuProps, IState> {
    protected static getDerivedStateFromProps(props: IMenuProps, state: IState): null | IState {
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

    constructor(props: IMenuProps) {
        super(props);

        this._id = 'JqxMenu' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IMenuProps;
        this._jqx(this._componentSelector).jqxMenu(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IMenuProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IMenuProps): void {
        this._jqx(this._componentSelector).jqxMenu(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxMenu(option);
    }

    public closeItem(itemID: number | string): void {
        this._jqx(this._componentSelector).jqxMenu('closeItem' , itemID);
    };

    public close(): void {
        this._jqx(this._componentSelector).jqxMenu('close' );
    };

    public disable(itemID: number | string, value: boolean): void {
        this._jqx(this._componentSelector).jqxMenu('disable' , itemID, value);
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxMenu('destroy' );
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxMenu('focus' );
    };

    public minimize(): void {
        this._jqx(this._componentSelector).jqxMenu('minimize' );
    };

    public open(left: number, top: number): void {
        this._jqx(this._componentSelector).jqxMenu('open' , left, top);
    };

    public openItem(itemID: number | string): void {
        this._jqx(this._componentSelector).jqxMenu('openItem' , itemID);
    };

    public restore(): void {
        this._jqx(this._componentSelector).jqxMenu('restore' );
    };

    public setItemOpenDirection(item: number | string, horizontaldirection: string, verticaldirection: string): void {
        this._jqx(this._componentSelector).jqxMenu('setItemOpenDirection' , item, horizontaldirection, verticaldirection);
    };

    private _manageProps(): IMenuProps {
        const widgetProps: string[] = ['animationShowDuration','animationHideDuration','animationHideDelay','animationShowDelay','autoCloseInterval','autoSizeMainItems','autoCloseOnClick','autoOpenPopup','autoOpen','autoCloseOnMouseLeave','clickToOpen','disabled','enableHover','easing','height','keyboardNavigation','minimizeWidth','mode','popupZIndex','rtl','showTopLevelArrows','source','theme','width'];

        const options = {} as IMenuProps;

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

export default JqxMenu;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface IMenuOptions {
    animationShowDuration?: number;
    animationHideDuration?: number;
    animationHideDelay?: number;
    animationShowDelay?: number;
    autoCloseInterval?: number;
    autoSizeMainItems?: boolean;
    autoCloseOnClick?: boolean;
    autoOpenPopup?: boolean;
    autoOpen?: boolean;
    autoCloseOnMouseLeave?: boolean;
    clickToOpen?: boolean;
    disabled?: boolean;
    enableHover?: boolean;
    easing?: string;
    height?: string | number;
    keyboardNavigation?: boolean;
    minimizeWidth?: number | string;
    mode?: 'horizontal' | 'vertical' | 'popup';
    popupZIndex?: number | string;
    rtl?: boolean;
    showTopLevelArrows?: boolean;
    source?: any;
    theme?: string;
    width?: string | number;
}

export interface IMenuProps extends IMenuOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onClosed?: (e?: Event) => void;
    onItemclick?: (e?: Event) => void;
    onShown?: (e?: Event) => void;
}
