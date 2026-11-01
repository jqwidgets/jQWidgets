import * as React from 'react';
declare class JqxScheduler extends React.PureComponent<ISchedulerProps> {
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
    private _readyHandler;
    constructor(props: ISchedulerProps);
    componentDidMount(): void;
    componentDidUpdate(): void;
    private _warnRebuiltProps;
    private _onReady;
    componentWillUnmount(): void;
    private _target;
    render(): React.ReactNode;
    setOptions(options: ISchedulerProps): void;
    getOptions(option: string): any;
    aiConfig(config?: object): object;
    aiCommand(text: string, callback?: Function): Promise<any>;
    aiScheduleAppointment(text: string, callback?: Function): Promise<any>;
    aiFindSlot(text: string, callback?: Function): Promise<any>;
    aiBookSlot(slot: object, details?: object): Object;
    aiResolveConflicts(options?: object, callback?: Function): Promise<any>;
    aiApplyResolution(proposals: Array<{
        id: number | string;
        proposedFrom: Date | string;
        proposedTo: Date | string;
    }>): Number;
    aiAsk(text: string, callback?: Function): Promise<any>;
    aiSummarize(callback?: Function): Promise<any>;
    aiExplainAppointment(key: string, callback?: Function): Promise<any>;
    aiClassifyAppointments(options: object, callback?: Function): Promise<any>;
    addAppointment(item: ISchedulerAppointmentDataFields): boolean;
    beginAppointmentsUpdate(): void;
    clearAppointmentsSelection(): void;
    clearSelection(): void;
    closeMenu(): void;
    closeDialog(): void;
    deleteAppointment(appointmenId: string): boolean;
    destroy(): void;
    endAppointmentsUpdate(): void;
    ensureAppointmentVisible(id: string): void;
    ensureVisible(item: any, resourceId?: string): void;
    findAvailableSlots(options?: object): any[];
    filterAppointments(text: string): void;
    importData(data: string, options?: object): object;
    exportData(format: string): any;
    focus(): void;
    getAppointmentProperty(appointmentId: string, name: string): any;
    getSelection(): ISchedulerGetSelection;
    getAppointments(): ISchedulerAppointmentDataFields[];
    getDataAppointments(): any[];
    hideAppointmentsByResource(resourcesId: string): void;
    navigateTo(date: any): void;
    navigateForward(): void;
    navigateBackward(): void;
    openMenu(left: number, top: number): void;
    openDialog(left: number, top: number): void;
    selectAppointment(appointmentId: string): void;
    setAppointmentProperty(appointmentId: string, name: string, value: any): void;
    selectCell(date: any, allday: boolean, resourceId: string | null): void;
    showAppointmentsByResource(resourceId: string): void;
    scrollWidth(): number;
    scrollHeight(): number;
    scrollLeft(left: number): void;
    scrollTop(top: number): void;
    scrollOffset(top?: number, left?: number): any;
    scrollToTime(time: any): boolean;
    undo(): boolean;
    redo(): boolean;
    canUndo(): boolean;
    canRedo(): boolean;
    clearUndoRedo(): void;
    private _manageProps;
    private _hostAttributes;
    private _applyHostAttributes;
    private _wireEvents;
    private _eventHandler;
    private _teardown;
}
export default JqxScheduler;
export declare const jqx: any;
export declare const JQXLite: any;
export interface ISchedulerAppointmentDataFields {
    allDay?: boolean | string;
    background?: string;
    borderColor?: string;
    color?: string;
    description?: string;
    draggable?: boolean | string;
    from?: string;
    hidden?: boolean | string;
    id?: number | string;
    location?: string;
    recurrencePattern?: ISchedulerRecurrencePattern | string;
    recurrenceException?: string;
    resizable?: boolean | string;
    resourceId?: number | string;
    readOnly?: boolean | string;
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
    menu: any;
    appointment: any;
    event: any;
}
export interface ISchedulerContextMenuClose {
    menu: any;
    appointment: any;
    event: any;
}
export interface ISchedulerContextMenuItemClick {
    menu: any;
    appointment: any;
    event: any;
}
export interface ISchedulerContextMenuCreate {
    menu: any;
    settings: any;
}
export interface ISchedulerEditDialogCreate {
    dialog: any;
    fields: any;
    editAppointment: any;
}
export interface ISchedulerEditDialogOpen {
    dialog: any;
    fields: any;
    editAppointment: any;
}
export interface ISchedulerEditDialogClose {
    dialog: any;
    fields: any;
    editAppointment: any;
}
export interface ISchedulerEditDialogKeyDown {
    dialog: any;
    fields: any;
    editAppointment: any;
    event: any;
}
export interface ISchedulerExportSettings {
    serverURL?: string | null;
    characterSet?: string | null;
    fileName?: string | null;
    dateTimeFormatString?: string;
    resourcesInMultipleICSFiles?: boolean;
}
export interface ISchedulerRenderAppointment {
    data: any;
}
export interface ISchedulerResources {
    source?: any;
    colorScheme?: string;
    orientation?: 'none' | 'horizontal' | 'vertical';
    dataField?: string;
    resourceColumnWidth?: number | string;
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
    aiProvider?: string;
    aiKey?: string;
    aiModel?: string;
    aiProxyUrl?: string;
    aiHeaders?: object;
    aiSendRequest?: (request: any, owner: any) => any;
    aiMaxRows?: number;
    allowOverlap?: boolean;
    blockedTimes?: any[];
    maxDuration?: number;
    minDuration?: number;
    appointmentOpacity?: number;
    appointmentsMinHeight?: number;
    appointmentDataFields?: ISchedulerAppointmentDataFields;
    appointmentTooltips?: boolean;
    columnsHeight?: number;
    contextMenu?: boolean;
    contextMenuOpen?: (menu: ISchedulerContextMenuOpen['menu'], appointment: ISchedulerContextMenuOpen['appointment'], event: ISchedulerContextMenuOpen['event']) => void;
    contextMenuClose?: (menu: ISchedulerContextMenuClose['menu'], appointment: ISchedulerContextMenuClose['appointment'], event: ISchedulerContextMenuClose['event']) => void;
    contextMenuItemClick?: (menu: ISchedulerContextMenuItemClick['menu'], appointment: ISchedulerContextMenuItemClick['appointment'], event: ISchedulerContextMenuItemClick['event']) => boolean | void;
    contextMenuCreate?: (menu: ISchedulerContextMenuCreate['menu'], settings: ISchedulerContextMenuCreate['settings']) => void;
    changedAppointments?: ISchedulerChangedAppointments[];
    disabled?: boolean;
    date?: any;
    dayNameFormat?: string;
    enableHover?: boolean;
    editDialog?: boolean;
    editDialogDateTimeFormatString?: string;
    editDialogDateFormatString?: string;
    editDialogOpen?: (dialog: ISchedulerEditDialogOpen['dialog'], fields: ISchedulerEditDialogOpen['fields'], editAppointment: ISchedulerEditDialogOpen['editAppointment']) => void;
    editDialogCreate?: (dialog: ISchedulerEditDialogCreate['dialog'], fields: ISchedulerEditDialogCreate['fields'], editAppointment: ISchedulerEditDialogCreate['editAppointment']) => void;
    editDialogKeyDown?: (dialog: ISchedulerEditDialogKeyDown['dialog'], fields: ISchedulerEditDialogKeyDown['fields'], editAppointment: ISchedulerEditDialogKeyDown['editAppointment'], event: ISchedulerEditDialogKeyDown['event']) => boolean | void;
    editDialogClose?: (dialog: ISchedulerEditDialogClose['dialog'], fields: ISchedulerEditDialogClose['fields'], editAppointment: ISchedulerEditDialogClose['editAppointment']) => void;
    exportSettings?: ISchedulerExportSettings;
    height?: number | string;
    legendPosition?: string;
    legendHeight?: number;
    localization?: any;
    maxAppointmentsPerDay?: number;
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
    showCurrent?: boolean;
    showAllDayRow?: boolean;
    showCurrentAppointment?: boolean;
    scrollBarSize?: number;
    source?: any;
    statuses?: ISchedulerStatuses;
    touchRowsHeight?: number;
    theme?: string;
    touchAppointmentsMinHeight?: number;
    touchScrollBarSize?: number;
    timeZone?: string;
    timeRulerWidth?: number;
    touchDayNameFormat?: 'shortest' | 'firstTwoLetters' | 'firstLetter' | 'abbr' | 'full';
    toolBarRangeFormat?: string;
    toolBarRangeFormatAbbr?: string;
    toolbarHeight?: number;
    undoRedo?: boolean;
    undoRedoLimit?: number;
    views?: any[];
    view?: 'dayView' | 'weekView' | 'monthView' | 'timelineDayView' | 'timelineWeekView' | 'timelineMonthView' | 'agendaView' | 'yearView' | 'timelineYearView';
    width?: number | string;
}
export interface ISchedulerProps extends ISchedulerOptions, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onScheduleraiResult?: (e?: any) => void;
    onScheduleraiError?: (e?: any) => void;
    onAppointmentChange?: (e?: any) => void;
    onAppointmentClick?: (e?: any) => void;
    onAppointmentDoubleClick?: (e?: any) => void;
    onAppointmentDelete?: (e?: any) => void;
    onAppointmentAdd?: (e?: any) => void;
    onAppointmentAdding?: (e?: any) => void;
    onAppointmentChanging?: (e?: any) => void;
    onAppointmentDeleting?: (e?: any) => void;
    onUndoRedoChange?: (e?: any) => void;
    onBindingComplete?: (e?: any) => void;
    onCellClick?: (e?: any) => void;
    onCellDoubleClick?: (e?: any) => void;
    onContextMenuOpen?: (e?: any) => void;
    onContextMenuClose?: (e?: any) => void;
    onContextMenuItemClick?: (e?: any) => void;
    onContextMenuCreate?: (e?: any) => void;
    onDateChange?: (e?: any) => void;
    onEditRecurrenceDialogOpen?: (e?: any) => void;
    onEditRecurrenceDialogClose?: (e?: any) => void;
    onEditDialogCreate?: (e?: any) => void;
    onEditDialogOpen?: (e?: any) => void;
    onEditDialogClose?: (e?: any) => void;
    onViewChange?: (e?: any) => void;
}
