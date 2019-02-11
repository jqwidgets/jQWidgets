
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxSortable extends React.PureComponent<ISortableProps, IState> {
    protected static getDerivedStateFromProps(props: ISortableProps, state: IState): null | IState {
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

    constructor(props: ISortableProps) {
        super(props);

        this._id = 'JqxSortable' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as ISortableProps;
        this._jqx(this._componentSelector).jqxSortable(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as ISortableProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: ISortableProps): void {
        this._jqx(this._componentSelector).jqxSortable(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxSortable(option);
    }

    public cancelMethod(): void {
        this._jqx(this._componentSelector).jqxSortable('cancelMethod' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxSortable('destroy' );
    };

    public disable(): void {
        this._jqx(this._componentSelector).jqxSortable('disable' );
    };

    public enable(): void {
        this._jqx(this._componentSelector).jqxSortable('enable' );
    };

    public refresh(): void {
        this._jqx(this._componentSelector).jqxSortable('refresh' );
    };

    public refreshPositions(): void {
        this._jqx(this._componentSelector).jqxSortable('refreshPositions' );
    };

    public serialize(object: any): string {
        return this._jqx(this._componentSelector).jqxSortable('serialize' , object);
    };

    public toArray(): any[] {
        return this._jqx(this._componentSelector).jqxSortable('toArray' );
    };

    private _manageProps(): ISortableProps {
        const widgetProps: string[] = ['appendTo','axis','cancel','connectWith','containment','cursor','cursorAt','delay','disabled','distance','dropOnEmpty','forceHelperSize','forcePlaceholderSize','grid','handle','helper','items','opacity','placeholderShow','revert','scroll','scrollSensitivity','scrollSpeed','tolerance','zIndex'];

        const options = {} as ISortableProps;

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

export default JqxSortable;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface ISortableCursorAt {
    left?: number;
    top?: number;
    right?: number;
    bottom?: number;
}

interface ISortableOptions {
    appendTo?: string;
    axis?: number | string;
    cancel?: string;
    connectWith?: string | boolean;
    containment?: string | boolean;
    cursor?: string;
    cursorAt?: ISortableCursorAt;
    delay?: number;
    disabled?: boolean;
    distance?: number;
    dropOnEmpty?: boolean;
    forceHelperSize?: boolean;
    forcePlaceholderSize?: boolean;
    grid?: number[];
    handle?: string | boolean;
    helper?: (originalEvent?: any, content?: any) => void | 'original' | 'clone';
    items?: string;
    opacity?: number | boolean;
    placeholderShow?: string | boolean;
    revert?: number | boolean;
    scroll?: boolean;
    scrollSensitivity?: number;
    scrollSpeed?: number;
    tolerance?: 'intersect' | 'pointer';
    zIndex?: number;
}

export interface ISortableProps extends ISortableOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onActivate?: (e?: Event) => void;
    onBeforeStop?: (e?: Event) => void;
    onChange?: (e?: Event) => void;
    onDeactivate?: (e?: Event) => void;
    onOut?: (e?: Event) => void;
    onOver?: (e?: Event) => void;
    onReceive?: (e?: Event) => void;
    onRemove?: (e?: Event) => void;
    onSort?: (e?: Event) => void;
    onStart?: (e?: Event) => void;
    onStop?: (e?: Event) => void;
    onUpdate?: (e?: Event) => void;
}
