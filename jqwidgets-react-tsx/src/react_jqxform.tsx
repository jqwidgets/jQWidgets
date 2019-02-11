
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxForm extends React.PureComponent<IFormProps, IState> {
    protected static getDerivedStateFromProps(props: IFormProps, state: IState): null | IState {
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

    constructor(props: IFormProps) {
        super(props);

        this._id = 'JqxForm' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IFormProps;
        this._jqx(this._componentSelector).jqxForm(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IFormProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IFormProps): void {
        this._jqx(this._componentSelector).jqxForm(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxForm(option);
    }

    public getInstance(): any {
        return this._jqx(this._componentSelector).jqxForm('getInstance' );
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxForm('refresh' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxForm('destroy' );
    };

    public hideComponent(name?: string): void {
        this._jqx(this._componentSelector).jqxForm('hideComponent' , name);
    };

    public showComponent(name?: string): void {
        this._jqx(this._componentSelector).jqxForm('showComponent' , name);
    };

    public val(value?: any): any {
        return this._jqx(this._componentSelector).jqxForm('val' , value);
    };

    public submit(action?: string, target?: string, method?: string): void {
        this._jqx(this._componentSelector).jqxForm('submit' , action, target, method);
    };

    public getComponentByName(name?: string): any {
        return this._jqx(this._componentSelector).jqxForm('getComponentByName' , name);
    };

    private _manageProps(): IFormProps {
        const widgetProps: string[] = ['padding','backgroundColor','borderColor','value','template'];

        const options = {} as IFormProps;

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

export default JqxForm;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IFormPadding {
    left?: number | string;
    right?: number | string;
    top?: number | string;
    bottom?: number | string;
}

export interface IFormTemplateItem {
    type?: string;
    bind?: string;
    submit?: boolean;
    required?: boolean;
    requiredPosition?: string;
    info?: string;
    infoPosition?: string;
    component?: string;
    init?: (value: any) => void;
    label?: string;
    labelPosition?: string;
    labelAlign?: string;
    align?: string;
    valign?: string;
    labelValign?: string;
    height?: number | string;
    rowHeight?: number | string;
    width?: number | string;
    columnWidth?: number | string;
    labelWidth?: number | string;
    labelHeight?: number | string;
    padding?: IFormPadding;
    labelPadding?: IFormPadding;
    columns?: IFormTemplateItem[];
    optionsLayout?: string;
    options?: any[];
}

interface IFormOptions {
    padding?: IFormPadding;
    backgroundColor?: string;
    borderColor?: string;
    value?: any;
    template?: IFormTemplateItem[];
}

export interface IFormProps extends IFormOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onFormDataChange?: (e?: Event) => void;
    onButtonClick?: (e?: Event) => void;
}
