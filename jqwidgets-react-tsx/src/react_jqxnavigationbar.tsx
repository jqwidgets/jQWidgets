
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxNavigationBar extends React.PureComponent<INavigationBarProps, IState> {
    protected static getDerivedStateFromProps(props: INavigationBarProps, state: IState): null | IState {
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

    constructor(props: INavigationBarProps) {
        super(props);

        this._id = 'JqxNavigationBar' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as INavigationBarProps;
        this._jqx(this._componentSelector).jqxNavigationBar(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as INavigationBarProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: INavigationBarProps): void {
        this._jqx(this._componentSelector).jqxNavigationBar(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxNavigationBar(option);
    }

    public add(header: number | string, content: number | string): void {
        this._jqx(this._componentSelector).jqxNavigationBar('add' , header, content);
    };

    public collapseAt(index: number | string): void {
        this._jqx(this._componentSelector).jqxNavigationBar('collapseAt' , index);
    };

    public disableAt(index: number | string): void {
        this._jqx(this._componentSelector).jqxNavigationBar('disableAt' , index);
    };

    public disable(): void {
        this._jqx(this._componentSelector).jqxNavigationBar('disable' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxNavigationBar('destroy' );
    };

    public expandAt(index: number | string): void {
        this._jqx(this._componentSelector).jqxNavigationBar('expandAt' , index);
    };

    public enableAt(index: number | string): void {
        this._jqx(this._componentSelector).jqxNavigationBar('enableAt' , index);
    };

    public enable(): void {
        this._jqx(this._componentSelector).jqxNavigationBar('enable' );
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxNavigationBar('focus' );
    };

    public getHeaderContentAt(index: number | string): string {
        return this._jqx(this._componentSelector).jqxNavigationBar('getHeaderContentAt' , index);
    };

    public getContentAt(index: number | string): string {
        return this._jqx(this._componentSelector).jqxNavigationBar('getContentAt' , index);
    };

    public hideArrowAt(index: number | string): void {
        this._jqx(this._componentSelector).jqxNavigationBar('hideArrowAt' , index);
    };

    public invalidate(): void {
        this._jqx(this._componentSelector).jqxNavigationBar('invalidate' );
    };

    public insert(Index: number, header: number | string, content: number | string): void {
        this._jqx(this._componentSelector).jqxNavigationBar('insert' , Index, header, content);
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxNavigationBar('refresh' );
    };

    public renderWidget(): void {
        this._jqx(this._componentSelector).jqxNavigationBar('render' );
    };

    public remove(index: number | string): void {
        this._jqx(this._componentSelector).jqxNavigationBar('remove' , index);
    };

    public setContentAt(index: number, item: number | string): void {
        this._jqx(this._componentSelector).jqxNavigationBar('setContentAt' , index, item);
    };

    public setHeaderContentAt(index: number, item: number | string): void {
        this._jqx(this._componentSelector).jqxNavigationBar('setHeaderContentAt' , index, item);
    };

    public showArrowAt(index: number | string): void {
        this._jqx(this._componentSelector).jqxNavigationBar('showArrowAt' , index);
    };

    public update(index: number, header: number | string, content: number | string): void {
        this._jqx(this._componentSelector).jqxNavigationBar('update' , index, header, content);
    };

    public val(value?: number | string): string | number {
        return this._jqx(this._componentSelector).jqxNavigationBar('val' , value);
    };

    private _manageProps(): INavigationBarProps {
        const widgetProps: string[] = ['animationType','arrowPosition','collapseAnimationDuration','disabled','expandAnimationDuration','expandMode','expandedIndexes','height','initContent','rtl','showArrow','theme','toggleMode','width'];

        const options = {} as INavigationBarProps;

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

export default JqxNavigationBar;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface INavigationBarOptions {
    animationType?: 'none' | 'slide' | 'fade';
    arrowPosition?: 'left' | 'right';
    collapseAnimationDuration?: number;
    disabled?: boolean;
    expandAnimationDuration?: number;
    expandMode?: 'single' | 'singleFitHeight' | 'multiple' | 'toggle' | 'none';
    expandedIndexes?: number[];
    height?: string | number;
    initContent?: (index:number) => void;
    rtl?: boolean;
    showArrow?: boolean;
    theme?: string;
    toggleMode?: 'click' | 'dblclick' | 'none';
    width?: string | number;
}

export interface INavigationBarProps extends INavigationBarOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onCollapsingItem?: (e?: Event) => void;
    onCollapsedItem?: (e?: Event) => void;
    onExpandingItem?: (e?: Event) => void;
    onExpandedItem?: (e?: Event) => void;
}
