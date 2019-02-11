
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxListMenu extends React.PureComponent<IListMenuProps, IState> {
    protected static getDerivedStateFromProps(props: IListMenuProps, state: IState): null | IState {
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

    constructor(props: IListMenuProps) {
        super(props);

        this._id = 'JqxListMenu' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IListMenuProps;
        this._jqx(this._componentSelector).jqxListMenu(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IListMenuProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IListMenuProps): void {
        this._jqx(this._componentSelector).jqxListMenu(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxListMenu(option);
    }

    public back(): void {
        this._jqx(this._componentSelector).jqxListMenu('back' );
    };

    public changePage(Item: any): void {
        this._jqx(this._componentSelector).jqxListMenu('changePage' , Item);
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxListMenu('destroy' );
    };

    private _manageProps(): IListMenuProps {
        const widgetProps: string[] = ['alwaysShowNavigationArrows','animationType','animationDuration','autoSeparators','backLabel','disabled','enableScrolling','filterCallback','height','headerAnimationDuration','placeHolder','readOnly','rtl','roundedCorners','showNavigationArrows','showFilter','showHeader','showBackButton','theme','width'];

        const options = {} as IListMenuProps;

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

export default JqxListMenu;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IListMenuFilterCallback {
    text?: string;
    searchValue?: string | number;
}

interface IListMenuOptions {
    alwaysShowNavigationArrows?: boolean;
    animationType?: 'slide' | 'fade';
    animationDuration?: number | string;
    autoSeparators?: boolean;
    backLabel?: number | string;
    disabled?: boolean;
    enableScrolling?: boolean;
    filterCallback?: (text:IListMenuFilterCallback['text'], searchValue:IListMenuFilterCallback['searchValue']) => boolean;
    height?: number | string;
    headerAnimationDuration?: number | string;
    placeHolder?: number | string;
    readOnly?: boolean;
    rtl?: boolean;
    roundedCorners?: boolean;
    showNavigationArrows?: boolean;
    showFilter?: boolean;
    showHeader?: boolean;
    showBackButton?: boolean;
    theme?: string;
    width?: string | number;
}

export interface IListMenuProps extends IListMenuOptions {
    className?: string; 
    style?: React.CSSProperties; 
}
