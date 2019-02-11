
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxSplitter extends React.PureComponent<ISplitterProps, IState> {
    protected static getDerivedStateFromProps(props: ISplitterProps, state: IState): null | IState {
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

    constructor(props: ISplitterProps) {
        super(props);

        this._id = 'JqxSplitter' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as ISplitterProps;
        this._jqx(this._componentSelector).jqxSplitter(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as ISplitterProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: ISplitterProps): void {
        this._jqx(this._componentSelector).jqxSplitter(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxSplitter(option);
    }

    public collapse(): void {
        this._jqx(this._componentSelector).jqxSplitter('collapse' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxSplitter('destroy' );
    };

    public disable(): void {
        this._jqx(this._componentSelector).jqxSplitter('disable' );
    };

    public enable(): void {
        this._jqx(this._componentSelector).jqxSplitter('enable' );
    };

    public expand(): void {
        this._jqx(this._componentSelector).jqxSplitter('expand' );
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxSplitter('render' );
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxSplitter('refresh' );
    };

    private _manageProps(): ISplitterProps {
        const widgetProps: string[] = ['disabled','height','orientation','panels','resizable','splitBarSize','showSplitBar','theme','width'];

        const options = {} as ISplitterProps;

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

export default JqxSplitter;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface ISplitterPanel {
    size?: number | string;
    min?: number | string;
    collapsible?: boolean;
    collapsed?: boolean;
}

interface ISplitterOptions {
    disabled?: boolean;
    height?: string | number;
    orientation?: 'horizontal' | 'vertical';
    panels?: ISplitterPanel[];
    resizable?: boolean;
    splitBarSize?: number;
    showSplitBar?: boolean;
    theme?: string;
    width?: string | number;
}

export interface ISplitterProps extends ISplitterOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onCollapsed?: (e?: Event) => void;
    onExpanded?: (e?: Event) => void;
    onResize?: (e?: Event) => void;
    onResizeStart?: (e?: Event) => void;
}
