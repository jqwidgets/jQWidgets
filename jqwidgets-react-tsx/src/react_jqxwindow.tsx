
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxWindow extends React.PureComponent<IWindowProps, IState> {
    protected static getDerivedStateFromProps(props: IWindowProps, state: IState): null | IState {
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

    constructor(props: IWindowProps) {
        super(props);

        this._id = 'JqxWindow' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as IWindowProps;
        this._jqx(this._componentSelector).jqxWindow(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as IWindowProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: IWindowProps): void {
        this._jqx(this._componentSelector).jqxWindow(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxWindow(option);
    }

    public bringToFront(): void {
        this._jqx(this._componentSelector).jqxWindow('bringToFront' );
    };

    public close(): void {
        this._jqx(this._componentSelector).jqxWindow('close' );
    };

    public collapse(): void {
        this._jqx(this._componentSelector).jqxWindow('collapse' );
    };

    public closeAll(): void {
        this._jqx(this._componentSelector).jqxWindow('closeAll' );
    };

    public disable(): void {
        this._jqx(this._componentSelector).jqxWindow('disable' );
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxWindow('destroy' );
    };

    public enable(): void {
        this._jqx(this._componentSelector).jqxWindow('enable' );
    };

    public expand(): void {
        this._jqx(this._componentSelector).jqxWindow('expand' );
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxWindow('focus' );
    };

    public isOpen(): boolean {
        return this._jqx(this._componentSelector).jqxWindow('isOpen' );
    };

    public move(top: number, left: number): void {
        this._jqx(this._componentSelector).jqxWindow('move' , top, left);
    };

    public open(): void {
        this._jqx(this._componentSelector).jqxWindow('open' );
    };

    public hide(): void {
        this._jqx(this._componentSelector).jqxWindow('hide' );
    };

    public resize(top: number, left: number): void {
        this._jqx(this._componentSelector).jqxWindow('resize' , top, left);
    };

    public setTitle(title: string): void {
        this._jqx(this._componentSelector).jqxWindow('setTitle' , title);
    };

    public setContent(content: string): void {
        this._jqx(this._componentSelector).jqxWindow('setContent' , content);
    };

    private _manageProps(): IWindowProps {
        const widgetProps: string[] = ['autoOpen','animationType','collapsed','collapseAnimationDuration','content','closeAnimationDuration','closeButtonSize','closeButtonAction','cancelButton','dragArea','draggable','disabled','height','initContent','isModal','keyboardCloseKey','keyboardNavigation','minHeight','maxHeight','minWidth','maxWidth','modalOpacity','modalZIndex','modalBackgroundZIndex','okButton','position','rtl','resizable','showAnimationDuration','showCloseButton','showCollapseButton','theme','title','width','zIndex'];

        const options = {} as IWindowProps;

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

export default JqxWindow;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface IWindowDragArea {
    left?: number;
    top?: number;
    width?: number | string;
    height?: number | string;
}

interface IWindowOptions {
    autoOpen?: boolean;
    animationType?: 'none' | 'fade' | 'slide' | 'combined';
    collapsed?: boolean;
    collapseAnimationDuration?: number;
    content?: string;
    closeAnimationDuration?: number;
    closeButtonSize?: number;
    closeButtonAction?: 'hide' | 'close';
    cancelButton?: any;
    dragArea?: IWindowDragArea;
    draggable?: boolean;
    disabled?: boolean;
    height?: string | number;
    initContent?: () => void;
    isModal?: boolean;
    keyboardCloseKey?: number | string;
    keyboardNavigation?: boolean;
    minHeight?: string | number;
    maxHeight?: string | number;
    minWidth?: number | string;
    maxWidth?: number | string;
    modalOpacity?: number | string;
    modalZIndex?: number;
    modalBackgroundZIndex?: number;
    okButton?: any;
    position?: string | any;
    rtl?: boolean;
    resizable?: boolean;
    showAnimationDuration?: number;
    showCloseButton?: boolean;
    showCollapseButton?: boolean;
    theme?: string;
    title?: string;
    width?: string | number;
    zIndex?: number;
}

export interface IWindowProps extends IWindowOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onClose?: (e?: Event) => void;
    onCollapse?: (e?: Event) => void;
    onExpand?: (e?: Event) => void;
    onMoving?: (e?: Event) => void;
    onMoved?: (e?: Event) => void;
    onOpen?: (e?: Event) => void;
    onResizing?: (e?: Event) => void;
    onResized?: (e?: Event) => void;
}
