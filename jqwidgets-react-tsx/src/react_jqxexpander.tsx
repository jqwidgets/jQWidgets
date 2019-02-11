
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxExpander extends React.PureComponent<IExpanderProps, IState> {
    protected static getDerivedStateFromProps(props: IExpanderProps, state: IState): null | IState {
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

    constructor(props: IExpanderProps) {
        super(props);

        this._id = 'JqxExpander' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IExpanderProps;
        this._jqx(this._componentSelector).jqxExpander(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IExpanderProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IExpanderProps): void {
        this._jqx(this._componentSelector).jqxExpander(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxExpander(option);
    }

    public collapse(): void {
        this._jqx(this._componentSelector).jqxExpander('collapse' );
    };

    public disable(): void {
        this._jqx(this._componentSelector).jqxExpander('disable' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxExpander('destroy' );
    };

    public enable(): void {
        this._jqx(this._componentSelector).jqxExpander('enable' );
    };

    public expand(): void {
        this._jqx(this._componentSelector).jqxExpander('expand' );
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxExpander('focus' );
    };

    public getContent(): string {
        return this._jqx(this._componentSelector).jqxExpander('getContent' );
    };

    public getHeaderContent(): string {
        return this._jqx(this._componentSelector).jqxExpander('getHeaderContent' );
    };

    public invalidate(): void {
        this._jqx(this._componentSelector).jqxExpander('invalidate' );
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxExpander('refresh' );
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxExpander('render' );
    };

    public setHeaderContent(headerContent: string): void {
        this._jqx(this._componentSelector).jqxExpander('setHeaderContent' , headerContent);
    };

    public setContent(content: string): void {
        this._jqx(this._componentSelector).jqxExpander('setContent' , content);
    };

    private _manageProps(): IExpanderProps {
        const widgetProps: string[] = ['animationType','arrowPosition','collapseAnimationDuration','disabled','expanded','expandAnimationDuration','height','headerPosition','initContent','rtl','showArrow','theme','toggleMode','width'];

        const options = {} as IExpanderProps;

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

export default JqxExpander;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface IExpanderOptions {
    animationType?: 'none' | 'slide' | 'fade';
    arrowPosition?: 'left' | 'right';
    collapseAnimationDuration?: number;
    disabled?: boolean;
    expanded?: boolean;
    expandAnimationDuration?: number;
    height?: number | string;
    headerPosition?: 'top' | 'bottom';
    initContent?: () => void;
    rtl?: boolean;
    showArrow?: boolean;
    theme?: string;
    toggleMode?: 'click' | 'dblclick' | 'none';
    width?: number | string;
}

export interface IExpanderProps extends IExpanderOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onCollapsing?: (e?: Event) => void;
    onCollapsed?: (e?: Event) => void;
    onExpanding?: (e?: Event) => void;
    onExpanded?: (e?: Event) => void;
}
