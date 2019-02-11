
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxScrollView extends React.PureComponent<IScrollViewProps, IState> {
    protected static getDerivedStateFromProps(props: IScrollViewProps, state: IState): null | IState {
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

    constructor(props: IScrollViewProps) {
        super(props);

        this._id = 'JqxScrollView' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IScrollViewProps;
        this._jqx(this._componentSelector).jqxScrollView(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IScrollViewProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IScrollViewProps): void {
        this._jqx(this._componentSelector).jqxScrollView(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxScrollView(option);
    }

    public back(): void {
        this._jqx(this._componentSelector).jqxScrollView('back' );
    };

    public changePage(index: number): void {
        this._jqx(this._componentSelector).jqxScrollView('changePage' , index);
    };

    public forward(): void {
        this._jqx(this._componentSelector).jqxScrollView('forward' );
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxScrollView('refresh' );
    };

    private _manageProps(): IScrollViewProps {
        const widgetProps: string[] = ['animationDuration','bounceEnabled','buttonsOffset','currentPage','disabled','height','moveThreshold','showButtons','slideShow','slideDuration','theme','width'];

        const options = {} as IScrollViewProps;

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

export default JqxScrollView;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface IScrollViewOptions {
    animationDuration?: number;
    bounceEnabled?: boolean;
    buttonsOffset?: number[];
    currentPage?: number;
    disabled?: boolean;
    height?: string | number;
    moveThreshold?: number;
    showButtons?: boolean;
    slideShow?: boolean;
    slideDuration?: number;
    theme?: string;
    width?: string | number;
}

export interface IScrollViewProps extends IScrollViewOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onPageChanged?: (e?: Event) => void;
}
