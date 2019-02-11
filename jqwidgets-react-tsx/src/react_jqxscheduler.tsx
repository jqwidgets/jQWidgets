
/* tslint:disable:ordered-imports */
import * as React from 'react';

class JqxScheduler extends React.PureComponent<ISchedulerProps, IState> {
    protected static getDerivedStateFromProps(props: ISchedulerProps, state: IState): null | IState {
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

    constructor(props: ISchedulerProps) {
        super(props);

        this._id = 'JqxScheduler' + this._jqx.generateID();
        this._componentSelector = '#' + this._id;

        this.state = { lastProps: props };
    }

    public componentDidMount(): void {
        const widgetOptions = this._manageProps() as ISchedulerProps;
        this._jqx(this._componentSelector).jqxScheduler(widgetOptions);
        this._wireEvents();
    }

    public componentDidUpdate(): void {
        const widgetOptions = this._manageProps() as ISchedulerProps;
        this.setOptions(widgetOptions);
    }

    public render(): React.ReactNode {
        return (
            <div id={this._id} className={this.props.className} style={this.props.style}>
                {this.props.children}
            </div>
        );
    }

    public setOptions(options: ISchedulerProps): void {
        this._jqx(this._componentSelector).jqxScheduler(options);
    }

    public getOptions(option: string): any {
        return this._jqx(this._componentSelector).jqxScheduler(option);
    }

    public addAppointment(item: ISchedulerAppointmentDataFields): void {
        this._jqx(this._componentSelector).jqxScheduler('addAppointment' , item);
    };

    public beginAppointmentsUpdate(): void {
        this._jqx(this._componentSelector).jqxScheduler('beginAppointmentsUpdate' );
    };

    public clearAppointmentsSelection(): void {
        this._jqx(this._componentSelector).jqxScheduler('clearAppointmentsSelection' );
    };

    public clearSelection(): void {
        this._jqx(this._componentSelector).jqxScheduler('clearSelection' );
    };

    public closeMenu(): void {
        this._jqx(this._componentSelector).jqxScheduler('closeMenu' );
    };

    public closeDialog(): void {
        this._jqx(this._componentSelector).jqxScheduler('closeDialog' );
    };

    public deleteAppointment(appointmenId: string): void {
        this._jqx(this._componentSelector).jqxScheduler('deleteAppointment' , appointmenId);
    };

    public destroy(): void {
        this._jqx(this._componentSelector).jqxScheduler('destroy' );
    };

    public endAppointmentsUpdate(): void {
        this._jqx(this._componentSelector).jqxScheduler('endAppointmentsUpdate' );
    };

    public ensureAppointmentVisible(id: string): void {
        this._jqx(this._componentSelector).jqxScheduler('ensureAppointmentVisible' , id);
    };

    public ensureVisible(item: any, resourceId: string): void {
        this._jqx(this._componentSelector).jqxScheduler('ensureVisible' , item, resourceId);
    };

    public exportData(format: string): any {
        return this._jqx(this._componentSelector).jqxScheduler('exportData' , format);
    };

    public focus(): void {
        this._jqx(this._componentSelector).jqxScheduler('focus' );
    };

    public getAppointmentProperty(appointmentId: string, name: string): any {
        return this._jqx(this._componentSelector).jqxScheduler('getAppointmentProperty' , appointmentId, name);
    };

    public getSelection(): ISchedulerGetSelection {
        return this._jqx(this._componentSelector).jqxScheduler('getSelection' );
    };

    public getAppointments(): ISchedulerAppointmentDataFields[] {
        return this._jqx(this._componentSelector).jqxScheduler('getAppointments' );
    };

    public getDataAppointments(): any[] {
        return this._jqx(this._componentSelector).jqxScheduler('getDataAppointments' );
    };

    public hideAppointmentsByResource(resourcesId: string): void {
        this._jqx(this._componentSelector).jqxScheduler('hideAppointmentsByResource' , resourcesId);
    };

    public openMenu(left: number, top: number): void {
        this._jqx(this._componentSelector).jqxScheduler('openMenu' , left, top);
    };

    public openDialog(left: number, top: number): void {
        this._jqx(this._componentSelector).jqxScheduler('openDialog' , left, top);
    };

    public selectAppointment(appointmentId: string): void {
        this._jqx(this._componentSelector).jqxScheduler('selectAppointment' , appointmentId);
    };

    public setAppointmentProperty(appointmentId: string, name: string, value: any): void {
        this._jqx(this._componentSelector).jqxScheduler('setAppointmentProperty' , appointmentId, name, value);
    };

    public selectCell(date: any, allday: boolean, resourceId: string): void {
        this._jqx(this._componentSelector).jqxScheduler('selectCell' , date, allday, resourceId);
    };

    public showAppointmentsByResource(resourceId: string): void {
        this._jqx(this._componentSelector).jqxScheduler('showAppointmentsByResource' , resourceId);
    };

    public scrollWidth(): number {
        return this._jqx(this._componentSelector).jqxScheduler('scrollWidth' );
    };

    public scrollHeight(): number {
        return this._jqx(this._componentSelector).jqxScheduler('scrollHeight' );
    };

    public scrollLeft(left: number): void {
        this._jqx(this._componentSelector).jqxScheduler('scrollLeft' , left);
    };

    public scrollTop(top: number): void {
        this._jqx(this._componentSelector).jqxScheduler('scrollTop' , top);
    };

    private _manageProps(): ISchedulerProps {
        const widgetProps: string[] = ['appointmentOpacity','appointmentsMinHeight','appointmentDataFields','appointmentTooltips','columnsHeight','contextMenu','contextMenuOpen','contextMenuClose','contextMenuItemClick','contextMenuCreate','changedAppointments','disabled','date','dayNameFormat','enableHover','editDialog','editDialogDateTimeFormatString','editDialogDateFormatString','editDialogOpen','editDialogCreate','editDialogKeyDown','editDialogClose','exportSettings','height','legendPosition','legendHeight','localization','min','max','ready','renderAppointment','rendering','rendered','rtl','resources','rowsHeight','showToolbar','showLegend','scrollBarSize','source','statuses','touchRowsHeight','theme','touchAppointmentsMinHeight','touchScrollBarSize','timeZone','touchDayNameFormat','toolBarRangeFormat','toolBarRangeFormatAbbr','toolbarHeight','views','view','width'];

        const options = {} as ISchedulerProps;

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

export default JqxScheduler;

interface IWindow { jqx: any;  JQXLite: any; }
declare const window: IWindow;
export const jqx = window.jqx;
export const JQXLite = window.JQXLite;

interface IState {
    lastProps: object;
}

export interface ISchedulerAppointmentDataFields {
    allDay?: boolean;
    background?: string;
    borderColor?: string;
    color?: string;
    description?: string;
    draggable?: boolean;
    from?: string;
    hidden?: boolean;
    id?: number | string;
    location?: string;
    recurrencePattern?: ISchedulerRecurrencePattern;
    recurrenceException?: string;
    resizable?: boolean;
    resourceId?: number | string;
    readOnly?: boolean;
    subject?: string;
    style?: string;
    status?: string;
    to?: string;
    tooltip?: string;
    timeZone?: string;
}

export interface ISchedulerRecurrencePattern {
    FREQ?: 'DAILY' | 'WEEKLY' | 'MONTHLY' | 'YEARLY';
    COUNT?: number;
    UNTIL?: string;
    BYDAY?: string;
    BYMONTHDAY?: string;
    BYMONTH?: number;
    INTERVAL?: number;
}

export interface ISchedulerChangedAppointments {
    type?: 'Update' | 'Delete' | 'Add';
    appointment?: ISchedulerAppointmentDataFields;
}

export interface ISchedulerContextMenuOpen {
    menu?: any;
    appointment?: any;
    event?: any;
}

export interface ISchedulerContextMenuClose {
    menu?: any;
    appointment?: any;
    event?: any;
}

export interface ISchedulerContextMenuItemClick {
    menu?: any;
    appointment?: any;
    event?: any;
}

export interface ISchedulerContextMenuCreate {
    menu?: any;
    settings?: any;
}

export interface ISchedulerEditDialogCreate {
    dialog?: any;
    fields?: any;
    editAppointment?: any;
}

export interface ISchedulerEditDialogOpen {
    dialog?: any;
    fields?: any;
    editAppointment?: any;
}

export interface ISchedulerEditDialogClose {
    dialog?: any;
    fields?: any;
    editAppointment?: any;
}

export interface ISchedulerEditDialogKeyDown {
    dialog?: any;
    fields?: any;
    editAppointment?: any;
    event?: any;
}

export interface ISchedulerExportSettings {
    serverURL?: string;
    characterSet?: string;
    fileName?: string;
    dateTimeFormatString?: string;
    resourcesInMultipleICSFiles?: boolean;
}

export interface ISchedulerRenderAppointment {
    data?: any;
}

export interface ISchedulerResources {
    source?: string;
    colorScheme?: string;
    orientation?: 'none' | 'horizontal' | 'vertical';
    dataField?: string;
    resourceColumnWidth?: number;
    resourceRowHeight?: number;
}

export interface ISchedulerStatuses {
    free?: string;
    tentative?: string;
    busy?: string;
    doNotDisturb?: string;
    outOfOffice?: string;
}

export interface ISchedulerGetSelection {
    from?: any;
    to?: any;
    ResourceId?: any;
}

interface ISchedulerOptions {
    appointmentOpacity?: number;
    appointmentsMinHeight?: number;
    appointmentDataFields?: ISchedulerAppointmentDataFields;
    appointmentTooltips?: boolean;
    columnsHeight?: number;
    contextMenu?: boolean;
    contextMenuOpen?: (menu: ISchedulerContextMenuOpen['menu'], appointment: ISchedulerContextMenuOpen['appointment'], event: ISchedulerContextMenuOpen['event']) => void;
    contextMenuClose?: (menu: ISchedulerContextMenuClose['menu'], appointment: ISchedulerContextMenuClose['appointment'], event: ISchedulerContextMenuClose['event']) => void;
    contextMenuItemClick?: (menu: ISchedulerContextMenuItemClick['menu'], appointment: ISchedulerContextMenuItemClick['appointment'], event: ISchedulerContextMenuItemClick['event']) => boolean;
    contextMenuCreate?: (menu: ISchedulerContextMenuCreate['menu'], settings: ISchedulerContextMenuCreate['settings']) => void;
    changedAppointments?: ISchedulerChangedAppointments[];
    disabled?: boolean;
    date?: any;
    dayNameFormat?: string;
    enableHover?: boolean;
    editDialog?: boolean;
    editDialogDateTimeFormatString?: string;
    editDialogDateFormatString?: string;
    editDialogOpen?: (dialog?: ISchedulerEditDialogOpen['dialog'], fields?: ISchedulerEditDialogOpen['fields'], editAppointment?: ISchedulerEditDialogOpen['editAppointment']) => void;
    editDialogCreate?: (dialog?: ISchedulerEditDialogCreate['dialog'], fields?: ISchedulerEditDialogCreate['fields'], editAppointment?: ISchedulerEditDialogCreate['editAppointment']) => void;
    editDialogKeyDown?: (dialog?: ISchedulerEditDialogKeyDown['dialog'], fields?: ISchedulerEditDialogKeyDown['fields'], editAppointment?: ISchedulerEditDialogKeyDown['editAppointment'], event?: ISchedulerEditDialogKeyDown['event']) => boolean;
    editDialogClose?: (dialog?: ISchedulerEditDialogClose['dialog'], fields?: ISchedulerEditDialogClose['fields'], editAppointment?: ISchedulerEditDialogClose['editAppointment']) => void;
    exportSettings?: ISchedulerExportSettings;
    height?: number | string;
    legendPosition?: string;
    legendHeight?: number;
    localization?: any;
    min?: any;
    max?: any;
    ready?: () => void;
    renderAppointment?: (data: ISchedulerRenderAppointment['data']) => any;
    rendering?: () => void;
    rendered?: () => void;
    rtl?: boolean;
    resources?: ISchedulerResources;
    rowsHeight?: number;
    showToolbar?: boolean;
    showLegend?: boolean;
    scrollBarSize?: number;
    source?: any;
    statuses?: ISchedulerStatuses;
    touchRowsHeight?: number;
    theme?: string;
    touchAppointmentsMinHeight?: number;
    touchScrollBarSize?: number;
    timeZone?: string;
    touchDayNameFormat?: 'shortest' | 'firstTwoLetters' | 'firstLetter' | 'abbr' | 'full';
    toolBarRangeFormat?: string;
    toolBarRangeFormatAbbr?: string;
    toolbarHeight?: number;
    views?: any[];
    view?: 'dayView' | 'weekView' | 'monthView' | 'timelineDayView' | 'timelineWeekView' | 'timelineMonthView';
    width?: number | string;
}

export interface ISchedulerProps extends ISchedulerOptions {
    className?: string; 
    style?: React.CSSProperties; 
    onAppointmentChange?: (e?: Event) => void;
    onAppointmentClick?: (e?: Event) => void;
    onAppointmentDoubleClick?: (e?: Event) => void;
    onAppointmentDelete?: (e?: Event) => void;
    onAppointmentAdd?: (e?: Event) => void;
    onBindingComplete?: (e?: Event) => void;
    onCellClick?: (e?: Event) => void;
    onCellDoubleClick?: (e?: Event) => void;
    onContextMenuOpen?: (e?: Event) => void;
    onContextMenuClose?: (e?: Event) => void;
    onContextMenuItemClick?: (e?: Event) => void;
    onContextMenuCreate?: (e?: Event) => void;
    onDateChange?: (e?: Event) => void;
    onEditRecurrenceDialogOpen?: (e?: Event) => void;
    onEditRecurrenceDialogClose?: (e?: Event) => void;
    onEditDialogCreate?: (e?: Event) => void;
    onEditDialogOpen?: (e?: Event) => void;
    onEditDialogClose?: (e?: Event) => void;
    onViewChange?: (e?: Event) => void;
}
