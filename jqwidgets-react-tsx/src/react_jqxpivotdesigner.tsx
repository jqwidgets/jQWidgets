
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxPivotDesigner extends React.PureComponent<IPivotDesignerProps, IState> {
    protected static getDerivedStateFromProps(props: IPivotDesignerProps, state: IState): null | IState {
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

    constructor(props: IPivotDesignerProps) {
        super(props);

        this._id = 'JqxPivotDesigner' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IPivotDesignerProps;
        this._jqx(this._componentSelector).jqxPivotDesigner(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IPivotDesignerProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IPivotDesignerProps): void {
        this._jqx(this._componentSelector).jqxPivotDesigner(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxPivotDesigner(option);
    }

    public refresh(): void {
        this._jqx(this._componentSelector).jqxPivotDesigner('refresh' );
    };

    private _manageProps(): IPivotDesignerProps {
        const widgetProps: string[] = ['type','target'];

        const options = {} as IPivotDesignerProps;

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

export default JqxPivotDesigner;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface IPivotDesignerOptions {
    type?: string;
    target?: any;
}

export interface IPivotDesignerProps extends IPivotDesignerOptions {
    className?: string; 
    style?: React.CSSProperties; 
}
