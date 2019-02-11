
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxTabs extends React.PureComponent<ITabsProps, IState> {
    protected static getDerivedStateFromProps(props: ITabsProps, state: IState): null | IState {
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

    constructor(props: ITabsProps) {
        super(props);

        this._id = 'JqxTabs' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as ITabsProps;
        this._jqx(this._componentSelector).jqxTabs(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as ITabsProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: ITabsProps): void {
        this._jqx(this._componentSelector).jqxTabs(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxTabs(option);
    }

    public addAt(index: number, title: string, content: string): void {
        this._jqx(this._componentSelector).jqxTabs('addAt' , index, title, content);
    };

    public addFirst(htmlElement1: any, htmlElement2: any): void {
        this._jqx(this._componentSelector).jqxTabs('addFirst' , htmlElement1, htmlElement2);
    };

    public addLast(htmlElement1: any, htmlElement2?: any): void {
        this._jqx(this._componentSelector).jqxTabs('addLast' , htmlElement1, htmlElement2);
    };

    public collapse(): void {
        this._jqx(this._componentSelector).jqxTabs('collapse' );
    };

    public disable(): void {
        this._jqx(this._componentSelector).jqxTabs('disable' );
    };

    public disableAt(index: number): void {
        this._jqx(this._componentSelector).jqxTabs('disableAt' , index);
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxTabs('destroy' );
    };

    public ensureVisible(index: number): void {
        this._jqx(this._componentSelector).jqxTabs('ensureVisible' , index);
    };

    public enableAt(index: number): void {
        this._jqx(this._componentSelector).jqxTabs('enableAt' , index);
    };

    public expand(): void {
        this._jqx(this._componentSelector).jqxTabs('expand' );
    };

    public enable(): void {
        this._jqx(this._componentSelector).jqxTabs('enable' );
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxTabs('focus' );
    };

    public getTitleAt(index: number): string {
        return this._jqx(this._componentSelector).jqxTabs('getTitleAt' , index);
    };

    public getContentAt(index: number): any {
        return this._jqx(this._componentSelector).jqxTabs('getContentAt' , index);
    };

    public getDisabledTabsCount(): any {
        return this._jqx(this._componentSelector).jqxTabs('getDisabledTabsCount' );
    };

    public hideCloseButtonAt(index: number): void {
        this._jqx(this._componentSelector).jqxTabs('hideCloseButtonAt' , index);
    };

    public hideAllCloseButtons(): void {
        this._jqx(this._componentSelector).jqxTabs('hideAllCloseButtons' );
    };

    public length(): number {
        return this._jqx(this._componentSelector).jqxTabs('length' );
    };

    public removeAt(index: number): void {
        this._jqx(this._componentSelector).jqxTabs('removeAt' , index);
    };

    public removeFirst(): void {
        this._jqx(this._componentSelector).jqxTabs('removeFirst' );
    };

    public removeLast(): void {
        this._jqx(this._componentSelector).jqxTabs('removeLast' );
    };

    public select(index: number): void {
        this._jqx(this._componentSelector).jqxTabs('select' , index);
    };

    public setContentAt(index: number, htmlElement: string): void {
        this._jqx(this._componentSelector).jqxTabs('setContentAt' , index, htmlElement);
    };

    public setTitleAt(index: number, htmlElement: string): void {
        this._jqx(this._componentSelector).jqxTabs('setTitleAt' , index, htmlElement);
    };

    public showCloseButtonAt(index: number): void {
        this._jqx(this._componentSelector).jqxTabs('showCloseButtonAt' , index);
    };

    public showAllCloseButtons(): void {
        this._jqx(this._componentSelector).jqxTabs('showAllCloseButtons' );
    };

    public val(value?: string): string {
        return this._jqx(this._componentSelector).jqxTabs('val' , value);
    };

    private _manageProps(): ITabsProps {
        const widgetProps: string[] = ['animationType','autoHeight','closeButtonSize','collapsible','contentTransitionDuration','disabled','enabledHover','enableScrollAnimation','enableDropAnimation','height','initTabContent','keyboardNavigation','next','previous','position','reorder','rtl','scrollAnimationDuration','selectedItem','selectionTracker','scrollable','scrollPosition','scrollStep','showCloseButtons','toggleMode','theme','width'];

        const options = {} as ITabsProps;

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

export default JqxTabs;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

interface ITabsOptions {
    animationType?: 'none' | 'fade';
    autoHeight?: boolean;
    closeButtonSize?: number;
    collapsible?: boolean;
    contentTransitionDuration?: number;
    disabled?: boolean;
    enabledHover?: boolean;
    enableScrollAnimation?: boolean;
    enableDropAnimation?: boolean;
    height?: string | number;
    initTabContent?: (tab?: number) => void;
    keyboardNavigation?: boolean;
    next?: any;
    previous?: any;
    position?: 'top' | 'bottom';
    reorder?: boolean;
    rtl?: boolean;
    scrollAnimationDuration?: number;
    selectedItem?: number;
    selectionTracker?: boolean;
    scrollable?: boolean;
    scrollPosition?: 'left' | 'right' | 'both';
    scrollStep?: number;
    showCloseButtons?: boolean;
    toggleMode?: 'click' | 'dblclick' | 'mouseenter' | 'none';
    theme?: string;
    width?: string | number;
}

export interface ITabsProps extends ITabsOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onAdd?: (e?: Event) => void;
    onCollapsed?: (e?: Event) => void;
    onDragStart?: (e?: Event) => void;
    onDragEnd?: (e?: Event) => void;
    onExpanded?: (e?: Event) => void;
    onRemoved?: (e?: Event) => void;
    onSelecting?: (e?: Event) => void;
    onSelected?: (e?: Event) => void;
    onTabclick?: (e?: Event) => void;
    onUnselecting?: (e?: Event) => void;
    onUnselected?: (e?: Event) => void;
}
