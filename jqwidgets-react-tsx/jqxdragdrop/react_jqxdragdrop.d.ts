import * as React from 'react';
declare class JqxDragDrop extends React.PureComponent<IDragDropProps> {
    private _jqx;
    private _id;
    private _componentSelector;
    private _rendered;
    private _host;
    private _appliedOptions;
    private _eventHandlers;
    private _eventElement;
    private _teardownPending;
    private _mounting;
    private _hostParent;
    private _hostNext;
    private _widgetPlace;
    private _hostChildren;
    private _changedInARow;
    private _warned;
    constructor(props: IDragDropProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: IDragDropProps): void;
    getOptions(option: string): any;
    cancelDrag(): void;
    destroy(): void;
    disable(): void;
    enable(): void;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxDragDrop;
export declare const jqx: any;
export declare const JQXLite: any;
export interface IDragDropOnDrag {
    data: object;
    position: {
        left: number;
        top: number;
    };
}
export interface IDragDropOnDragStart {
    position: {
        left: number;
        top: number;
    };
}
export interface IDragDropOnTargetDrop {
    data: object;
}
export interface IDragDropOnDropTargetLeave {
    data: object;
}
interface IDragDropOptions {
    appendTo?: string;
    cursor?: string;
    disabled?: boolean;
    distance?: number;
    data?: any;
    dropAction?: 'default' | 'none';
    dropTarget?: any;
    dragZIndex?: number;
    feedback?: 'clone' | 'original';
    handle?: string | boolean;
    initFeedback?: (feedback: any) => void;
    opacity?: number;
    onDragEnd?: () => void;
    onDrag?: (data: IDragDropOnDrag['data'], position: IDragDropOnDrag['position']) => void;
    onDragStart?: (position: IDragDropOnDragStart['position']) => void;
    onTargetDrop?: (data: IDragDropOnTargetDrop['data']) => void;
    onDropTargetEnter?: () => void;
    onDropTargetLeave?: (data: IDragDropOnDropTargetLeave['data']) => void;
    restricter?: string | object;
    revert?: boolean;
    revertDuration?: number;
    theme?: string;
    tolerance?: 'fit' | 'intersect';
}
export interface IDragDropProps extends IDragDropOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onDragStart?: (e?: any) => void;
    onDragEnd?: (e?: any) => void;
    onDragging?: (e?: any) => void;
    onDropTargetEnter?: (e?: any) => void;
    onDropTargetLeave?: (e?: any) => void;
}
