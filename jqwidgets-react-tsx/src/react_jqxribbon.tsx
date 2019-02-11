
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxRibbon extends React.PureComponent<IRibbonProps, IState> {
    protected static getDerivedStateFromProps(props: IRibbonProps, state: IState): null | IState {
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

    constructor(props: IRibbonProps) {
        super(props);

        this._id = 'JqxRibbon' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IRibbonProps;
        this._jqx(this._componentSelector).jqxRibbon(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IRibbonProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IRibbonProps): void {
        this._jqx(this._componentSelector).jqxRibbon(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxRibbon(option);
    }

    public addAt(index: number, item: object): void {
        this._jqx(this._componentSelector).jqxRibbon('addAt' , index, item);
    };

    public clearSelection(): void {
        this._jqx(this._componentSelector).jqxRibbon('clearSelection' );
    };

    public disableAt(index: number): void {
        this._jqx(this._componentSelector).jqxRibbon('disableAt' , index);
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxRibbon('destroy' );
    };

    public enableAt(index: number): void {
        this._jqx(this._componentSelector).jqxRibbon('enableAt' , index);
    };

    public hideAt(index: number): void {
        this._jqx(this._componentSelector).jqxRibbon('hideAt' , index);
    };

    public removeAt(index: number): void {
        this._jqx(this._componentSelector).jqxRibbon('removeAt' , index);
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxRibbon('render' );
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxRibbon('refresh' );
    };

    public selectAt(index: number): void {
        this._jqx(this._componentSelector).jqxRibbon('selectAt' , index);
    };

    public showAt(index: number): void {
        this._jqx(this._componentSelector).jqxRibbon('showAt' , index);
    };

    public setPopupLayout(index: number, layout: any, width: number | string, height: number | string): void {
        this._jqx(this._componentSelector).jqxRibbon('setPopupLayout' , index, layout, width, height);
    };

    public updateAt(index: number, item: object): void {
        this._jqx(this._componentSelector).jqxRibbon('updateAt' , index, item);
    };

    public val(value?: string): string {
        return this._jqx(this._componentSelector).jqxRibbon('val' , value);
    };

    private _manageProps(): IRibbonProps {
        const widgetProps: string[] = ['animationType','animationDelay','disabled','height','initContent','mode','popupCloseMode','position','reorder','rtl','selectedIndex','selectionMode','scrollPosition','scrollStep','scrollDelay','theme','width'];

        const options = {} as IRibbonProps;

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

export default JqxRibbon;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface IRibbonOptions {
    animationType?: 'fade' | 'slide' | 'none';
    animationDelay?: number | string;
    disabled?: boolean;
    height?: number | string;
    initContent?: (index: any) => void;
    mode?: 'default' | 'popup';
    popupCloseMode?: 'click' | 'mouseLeave' | 'none';
    position?: 'top' | 'bottom' | 'left' | 'right';
    reorder?: boolean;
    rtl?: boolean;
    selectedIndex?: number;
    selectionMode?: 'click' | 'hover' | 'none';
    scrollPosition?: 'both' | 'near' | 'far';
    scrollStep?: number;
    scrollDelay?: number;
    theme?: string;
    width?: string | number;
}

export interface IRibbonProps extends IRibbonOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onChange?: (e?: Event) => void;
    onReorder?: (e?: Event) => void;
    onSelect?: (e?: Event) => void;
    onUnselect?: (e?: Event) => void;
}
