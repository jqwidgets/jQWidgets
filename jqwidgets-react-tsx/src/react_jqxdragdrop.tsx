
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxDragDrop extends React.PureComponent<IDragDropProps, IState> {
    protected static getDerivedStateFromProps(props: IDragDropProps, state: IState): null | IState {
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

    constructor(props: IDragDropProps) {
        super(props);

        this._id = 'JqxDragDrop' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IDragDropProps;
        this._jqx(this._componentSelector).jqxDragDrop(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IDragDropProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IDragDropProps): void {
        this._jqx(this._componentSelector).jqxDragDrop(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxDragDrop(option);
    }

    private _manageProps(): IDragDropProps {
        const widgetProps: string[] = ['appendTo','disabled','distance','data','dropAction','dropTarget','dragZIndex','feedback','initFeedback','opacity','onDragEnd','onDrag','onDragStart','onTargetDrop','onDropTargetEnter','onDropTargetLeave','restricter','revert','revertDuration','tolerance'];

        const options = {} as IDragDropProps;

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

export default JqxDragDrop;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IDragDropOnDrag {
    data?: object;
    position?: object;
}

export interface IDragDropOnDragStart {
    position?: object;
}

export interface IDragDropOnTargetDrop {
    data?: object;
}

export interface IDragDropOnDropTargetLeave {
    data?: object;
}

interface IDragDropOptions {
    appendTo?: string;
    disabled?: boolean;
    distance?: number;
    data?: any;
    dropAction?: 'default' | 'none';
    dropTarget?: any;
    dragZIndex?: number;
    feedback?: 'clone' | 'original';
    initFeedback?: (feedback?:any) => void;
    opacity?: number;
    onDragEnd?: () => void;
    onDrag?: (data?: IDragDropOnDrag['data'], position?: IDragDropOnDrag['position']) => void;
    onDragStart?: (position?: IDragDropOnDragStart['position']) => void;
    onTargetDrop?: (data?: IDragDropOnTargetDrop['data']) => void;
    onDropTargetEnter?: () => void;
    onDropTargetLeave?: (data?: IDragDropOnDropTargetLeave['data']) => void;
    restricter?: object | 'body' | 'document' | 'parent';
    revert?: boolean;
    revertDuration?: number;
    tolerance?: 'fit' | 'intersect';
}

export interface IDragDropProps extends IDragDropOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onDragStart?: (e?: Event) => void;
    onDragEnd?: (e?: Event) => void;
    onDragging?: (e?: Event) => void;
    onDropTargetEnter?: (e?: Event) => void;
    onDropTargetLeave?: (e?: Event) => void;
}
