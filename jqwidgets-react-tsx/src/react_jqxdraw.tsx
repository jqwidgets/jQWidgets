
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxDraw extends React.PureComponent<IDrawProps, IState> {
    protected static getDerivedStateFromProps(props: IDrawProps, state: IState): null | IState {
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

    constructor(props: IDrawProps) {
        super(props);

        this._id = 'JqxDraw' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IDrawProps;
        this._jqx(this._componentSelector).jqxDraw(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IDrawProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IDrawProps): void {
        this._jqx(this._componentSelector).jqxDraw(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxDraw(option);
    }

    public attr(element?: any, attributes?: any): void {
        this._jqx(this._componentSelector).jqxDraw('attr' , element, attributes);
    };

    public circle(cx?: number, cy?: number, r?: number, attributes?: any): any {
        return this._jqx(this._componentSelector).jqxDraw('circle' , cx, cy, r, attributes);
    };

    public clear(): void {
        this._jqx(this._componentSelector).jqxDraw('clear' );
    };

    public getAttr(element?: any, attributes?: any): string {
        return this._jqx(this._componentSelector).jqxDraw('getAttr' , element, attributes);
    };

    public getSize(): any {
        return this._jqx(this._componentSelector).jqxDraw('getSize' );
    };

    public line(x1?: number, y1?: number, x2?: number, y2?: number, attributes?: any): any {
        return this._jqx(this._componentSelector).jqxDraw('line' , x1, y1, x2, y2, attributes);
    };

    public measureText(text?: string, angle?: number, attributes?: any): any {
        return this._jqx(this._componentSelector).jqxDraw('measureText' , text, angle, attributes);
    };

    public on(element?: any, event?: string, func?: any): void {
        this._jqx(this._componentSelector).jqxDraw('on' , element, event, func);
    };

    public off(element?: any, event?: string, func?: any): void {
        this._jqx(this._componentSelector).jqxDraw('off' , element, event, func);
    };

    public path(path?: string, attributes?: any): any {
        return this._jqx(this._componentSelector).jqxDraw('path' , path, attributes);
    };

    public pieslice(cx?: number, xy?: number, innerRadius?: any, outerRadius?: any, fromAngle?: number, endAngle?: number, centerOffset?: number, attributes?: any): any {
        return this._jqx(this._componentSelector).jqxDraw('pieslice' , cx, xy, innerRadius, outerRadius, fromAngle, endAngle, centerOffset, attributes);
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxDraw('refresh' );
    };

    public rect(x?: number, y?: number, width?: number | string, height?: number | string, attributes?: any): any {
        return this._jqx(this._componentSelector).jqxDraw('rect' , x, y, width, height, attributes);
    };

    public saveAsJPEG(image?: string, url?: string): void {
        this._jqx(this._componentSelector).jqxDraw('saveAsJPEG' , image, url);
    };

    public saveAsPNG(image?: string, url?: string): void {
        this._jqx(this._componentSelector).jqxDraw('saveAsPNG' , image, url);
    };

    public text(text?: string, x?: number, y?: number, width?: number | string, height?: number | string, angle?: number, attributes?: any, clip?: boolean, halign?: string, valign?: string, rotateAround?: string): any {
        return this._jqx(this._componentSelector).jqxDraw('text' , text, x, y, width, height, angle, attributes, clip, halign, valign, rotateAround);
    };

    private _manageProps(): IDrawProps {
        const widgetProps: string[] = ['renderEngine'];

        const options = {} as IDrawProps;

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

export default JqxDraw;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface IDrawOptions {
    renderEngine?: 'SVG' | 'VML' | 'HTML5';
}

export interface IDrawProps extends IDrawOptions {
    className?: string; 
    style?: React.CSSProperties; 
}
