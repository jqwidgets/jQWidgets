
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxValidator extends React.PureComponent<IValidatorProps, IState> {
    protected static getDerivedStateFromProps(props: IValidatorProps, state: IState): null | IState {
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

    constructor(props: IValidatorProps) {
        super(props);

        this._id = 'JqxValidator' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IValidatorProps;
        this._jqx(this._componentSelector).jqxValidator(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IValidatorProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IValidatorProps): void {
        this._jqx(this._componentSelector).jqxValidator(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxValidator(option);
    }

    public hideHint(id: string): void {
        this._jqx(this._componentSelector).jqxValidator('hideHint' , id);
    };

    public hide(): void {
        this._jqx(this._componentSelector).jqxValidator('hide' );
    };

    public updatePosition(): void {
        this._jqx(this._componentSelector).jqxValidator('updatePosition' );
    };

    public validate(htmlElement?: any): void {
        this._jqx(this._componentSelector).jqxValidator('validate' , htmlElement);
    };

    public validateInput(id: string): void {
        this._jqx(this._componentSelector).jqxValidator('validateInput' , id);
    };

    private _manageProps(): IValidatorProps {
        const widgetProps: string[] = ['arrow','animation','animationDuration','closeOnClick','focus','hintType','onError','onSuccess','position','rules','rtl'];

        const options = {} as IValidatorProps;

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

export default JqxValidator;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IValidatorRule {
    input?: string;
    message?: string;
    action?: string;
    rule?: string | any;
    position?: string;
    hintRender?: any;
}

interface IValidatorOptions {
    arrow?: boolean;
    animation?: 'fade' | 'none';
    animationDuration?: number;
    closeOnClick?: boolean;
    focus?: boolean;
    hintType?: 'tooltip' | 'label';
    onError?: () => void;
    onSuccess?: () => void;
    position?: string;
    rules?: IValidatorRule[];
    rtl?: boolean;
}

export interface IValidatorProps extends IValidatorOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onValidationError?: (e?: Event) => void;
    onValidationSuccess?: (e?: Event) => void;
}
