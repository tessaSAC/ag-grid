import { AfterViewInit, ComponentFactoryResolver, ElementRef, EventEmitter, QueryList, ViewContainerRef } from "@angular/core";
import { ColumnApi, GridApi, GridOptions, Module } from "ag-grid-community";
import { AngularFrameworkOverrides } from "./angularFrameworkOverrides";
import { AgGridColumn } from "./agGridColumn";
import { AngularFrameworkComponentWrapper } from "./angularFrameworkComponentWrapper";
export declare class AgGridAngular implements AfterViewInit {
    private viewContainerRef;
    private angularFrameworkOverrides;
    private frameworkComponentWrapper;
    private _componentFactoryResolver;
    private _nativeElement;
    private _initialised;
    private _destroyed;
    private gridParams;
    private _fullyReady;
    api: GridApi;
    columnApi: ColumnApi;
    columns: QueryList<AgGridColumn>;
    constructor(elementDef: ElementRef, viewContainerRef: ViewContainerRef, angularFrameworkOverrides: AngularFrameworkOverrides, frameworkComponentWrapper: AngularFrameworkComponentWrapper, _componentFactoryResolver: ComponentFactoryResolver);
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    private checkForDeprecatedEvents;
    private globalEventListener;
    gridOptions: GridOptions;
    modules: Module[];
    slaveGrids: any;
    alignedGrids: any;
    rowData: any;
    columnDefs: any;
    excelStyles: any;
    pinnedTopRowData: any;
    pinnedBottomRowData: any;
    components: any;
    frameworkComponents: any;
    rowStyle: any;
    context: any;
    autoGroupColumnDef: any;
    groupColumnDef: any;
    localeText: any;
    icons: any;
    datasource: any;
    serverSideDatasource: any;
    viewportDatasource: any;
    groupRowRendererParams: any;
    aggFuncs: any;
    fullWidthCellRendererParams: any;
    defaultColGroupDef: any;
    defaultColDef: any;
    defaultExportParams: any;
    columnTypes: any;
    rowClassRules: any;
    detailGridOptions: any;
    detailCellRendererParams: any;
    loadingCellRendererParams: any;
    loadingOverlayComponentParams: any;
    noRowsOverlayComponentParams: any;
    popupParent: any;
    colResizeDefault: any;
    reduxStore: any;
    statusBar: any;
    sideBar: any;
    sortingOrder: any;
    rowClass: any;
    rowSelection: any;
    overlayLoadingTemplate: any;
    overlayNoRowsTemplate: any;
    quickFilterText: any;
    rowModelType: any;
    editType: any;
    domLayout: any;
    clipboardDeliminator: any;
    rowGroupPanelShow: any;
    multiSortKey: any;
    pivotColumnGroupTotals: any;
    pivotRowTotals: any;
    pivotPanelShow: any;
    rowHeight: any;
    detailRowHeight: any;
    rowBuffer: any;
    colWidth: any;
    headerHeight: any;
    groupHeaderHeight: any;
    floatingFiltersHeight: any;
    pivotHeaderHeight: any;
    pivotGroupHeaderHeight: any;
    groupDefaultExpanded: any;
    minColWidth: any;
    maxColWidth: any;
    viewportRowModelPageSize: any;
    viewportRowModelBufferSize: any;
    autoSizePadding: any;
    maxBlocksInCache: any;
    maxConcurrentDatasourceRequests: any;
    cacheOverflowSize: any;
    paginationPageSize: any;
    cacheBlockSize: any;
    infiniteInitialRowCount: any;
    scrollbarWidth: any;
    paginationStartPage: any;
    infiniteBlockSize: any;
    batchUpdateWaitMillis: any;
    blockLoadDebounceMillis: any;
    keepDetailRowsCount: any;
    localeTextFunc: any;
    groupRowInnerRenderer: any;
    groupRowInnerRendererFramework: any;
    dateComponent: any;
    dateComponentFramework: any;
    groupRowRenderer: any;
    groupRowRendererFramework: any;
    isExternalFilterPresent: any;
    getRowHeight: any;
    doesExternalFilterPass: any;
    getRowClass: any;
    getRowStyle: any;
    getRowClassRules: any;
    traverseNode: any;
    getContextMenuItems: any;
    getMainMenuItems: any;
    processRowPostCreate: any;
    processCellForClipboard: any;
    getNodeChildDetails: any;
    groupRowAggNodes: any;
    getRowNodeId: any;
    isFullWidthCell: any;
    fullWidthCellRenderer: any;
    fullWidthCellRendererFramework: any;
    doesDataFlower: any;
    processSecondaryColDef: any;
    processSecondaryColGroupDef: any;
    getBusinessKeyForNode: any;
    sendToClipboard: any;
    navigateToNextCell: any;
    tabToNextCell: any;
    getDetailRowData: any;
    processCellFromClipboard: any;
    getDocument: any;
    postProcessPopup: any;
    getChildCount: any;
    getDataPath: any;
    loadingCellRenderer: any;
    loadingCellRendererFramework: any;
    loadingOverlayComponent: any;
    loadingOverlayComponentFramework: any;
    noRowsOverlayComponent: any;
    noRowsOverlayComponentFramework: any;
    detailCellRenderer: any;
    detailCellRendererFramework: any;
    defaultGroupSortComparator: any;
    isRowMaster: any;
    isRowSelectable: any;
    postSort: any;
    processHeaderForClipboard: any;
    paginationNumberFormatter: any;
    processDataFromClipboard: any;
    getServerSideGroupKey: any;
    isServerSideGroup: any;
    suppressKeyboardEvent: any;
    createChartContainer: any;
    processChartOptions: any;
    getChartToolbarItems: any;
    fillOperation: any;
    toolPanelSuppressRowGroups: any;
    toolPanelSuppressValues: any;
    toolPanelSuppressPivots: any;
    toolPanelSuppressPivotMode: any;
    toolPanelSuppressSideButtons: any;
    toolPanelSuppressColumnFilter: any;
    toolPanelSuppressColumnSelectAll: any;
    toolPanelSuppressColumnExpandAll: any;
    suppressMakeColumnVisibleAfterUnGroup: any;
    suppressRowClickSelection: any;
    suppressCellSelection: any;
    suppressHorizontalScroll: any;
    alwaysShowVerticalScroll: any;
    debug: any;
    enableBrowserTooltips: any;
    enableColResize: any;
    enableCellExpressions: any;
    enableSorting: any;
    enableServerSideSorting: any;
    enableFilter: any;
    enableServerSideFilter: any;
    angularCompileRows: any;
    angularCompileFilters: any;
    angularCompileHeaders: any;
    groupSuppressAutoColumn: any;
    groupSelectsChildren: any;
    groupIncludeFooter: any;
    groupIncludeTotalFooter: any;
    groupUseEntireRow: any;
    groupSuppressRow: any;
    groupSuppressBlankHeader: any;
    forPrint: any;
    suppressMenuHide: any;
    rowDeselection: any;
    unSortIcon: any;
    suppressMultiSort: any;
    singleClickEdit: any;
    suppressLoadingOverlay: any;
    suppressNoRowsOverlay: any;
    suppressAutoSize: any;
    suppressParentsInRowNodes: any;
    showToolPanel: any;
    suppressColumnMoveAnimation: any;
    suppressMovableColumns: any;
    suppressFieldDotNotation: any;
    enableRangeSelection: any;
    enableRangeHandle: any;
    enableFillHandle: any;
    suppressClearOnFillReduction: any;
    deltaSort: any;
    suppressTouch: any;
    suppressAsyncEvents: any;
    allowContextMenuWithControlKey: any;
    suppressContextMenu: any;
    suppressMenuFilterPanel: any;
    suppressMenuMainPanel: any;
    suppressMenuColumnPanel: any;
    rememberGroupStateWhenNewData: any;
    enableCellChangeFlash: any;
    suppressDragLeaveHidesColumns: any;
    suppressMiddleClickScrolls: any;
    suppressPreventDefaultOnMouseWheel: any;
    suppressUseColIdForGroups: any;
    suppressCopyRowsToClipboard: any;
    copyHeadersToClipboard: any;
    pivotMode: any;
    suppressAggFuncInHeader: any;
    suppressColumnVirtualisation: any;
    suppressAggAtRootLevel: any;
    suppressFocusAfterRefresh: any;
    functionsPassive: any;
    functionsReadOnly: any;
    animateRows: any;
    groupSelectsFiltered: any;
    groupRemoveSingleChildren: any;
    groupRemoveLowestSingleChildren: any;
    enableRtl: any;
    suppressClickEdit: any;
    rowDragManaged: any;
    suppressRowDrag: any;
    enableGroupEdit: any;
    embedFullWidthRows: any;
    deprecatedEmbedFullWidthRows: any;
    suppressTabbing: any;
    suppressPaginationPanel: any;
    floatingFilter: any;
    groupHideOpenParents: any;
    groupMultiAutoColumn: any;
    pagination: any;
    stopEditingWhenGridLosesFocus: any;
    paginationAutoPageSize: any;
    suppressScrollOnNewData: any;
    purgeClosedRowNodes: any;
    cacheQuickFilter: any;
    deltaRowDataMode: any;
    ensureDomOrder: any;
    accentedSort: any;
    pivotTotals: any;
    suppressChangeDetection: any;
    valueCache: any;
    valueCacheNeverExpires: any;
    aggregateOnlyChangedColumns: any;
    suppressAnimationFrame: any;
    suppressExcelExport: any;
    suppressCsvExport: any;
    treeData: any;
    masterDetail: any;
    suppressMultiRangeSelection: any;
    enterMovesDownAfterEdit: any;
    enterMovesDown: any;
    suppressPropertyNamesCheck: any;
    rowMultiSelectWithClick: any;
    contractColumnSelection: any;
    suppressEnterpriseResetOnNewColumns: any;
    enableOldSetFilterModel: any;
    suppressRowHoverHighlight: any;
    gridAutoHeight: any;
    suppressRowTransform: any;
    suppressClipboardPaste: any;
    serverSideSortingAlwaysResets: any;
    reactNext: any;
    suppressSetColumnStateEvents: any;
    enableCharts: any;
    deltaColumnMode: any;
    suppressMaintainUnsortedOrder: any;
    enableCellTextSelection: any;
    suppressBrowserResizeObserver: any;
    suppressMaxRenderedRowRestriction: any;
    excludeChildrenWhenTreeDataFiltering: any;
    keepDetailRows: any;
    paginateChildRows: any;
    preventDefaultOnContextMenu: any;
    columnEverythingChanged: EventEmitter<any>;
    newColumnsLoaded: EventEmitter<any>;
    columnPivotModeChanged: EventEmitter<any>;
    columnRowGroupChanged: EventEmitter<any>;
    expandOrCollapseAll: EventEmitter<any>;
    columnPivotChanged: EventEmitter<any>;
    gridColumnsChanged: EventEmitter<any>;
    columnValueChanged: EventEmitter<any>;
    columnMoved: EventEmitter<any>;
    columnVisible: EventEmitter<any>;
    columnPinned: EventEmitter<any>;
    columnGroupOpened: EventEmitter<any>;
    columnResized: EventEmitter<any>;
    displayedColumnsChanged: EventEmitter<any>;
    virtualColumnsChanged: EventEmitter<any>;
    rowGroupOpened: EventEmitter<any>;
    rowDataChanged: EventEmitter<any>;
    rowDataUpdated: EventEmitter<any>;
    pinnedRowDataChanged: EventEmitter<any>;
    rangeSelectionChanged: EventEmitter<any>;
    chartRangeSelectionChanged: EventEmitter<any>;
    chartOptionsChanged: EventEmitter<any>;
    toolPanelVisibleChanged: EventEmitter<any>;
    modelUpdated: EventEmitter<any>;
    pasteStart: EventEmitter<any>;
    pasteEnd: EventEmitter<any>;
    cellClicked: EventEmitter<any>;
    cellDoubleClicked: EventEmitter<any>;
    cellMouseDown: EventEmitter<any>;
    cellContextMenu: EventEmitter<any>;
    cellValueChanged: EventEmitter<any>;
    rowValueChanged: EventEmitter<any>;
    cellFocused: EventEmitter<any>;
    rowSelected: EventEmitter<any>;
    selectionChanged: EventEmitter<any>;
    cellKeyDown: EventEmitter<any>;
    cellKeyPress: EventEmitter<any>;
    cellMouseOver: EventEmitter<any>;
    cellMouseOut: EventEmitter<any>;
    filterChanged: EventEmitter<any>;
    filterModified: EventEmitter<any>;
    filterOpened: EventEmitter<any>;
    sortChanged: EventEmitter<any>;
    virtualRowRemoved: EventEmitter<any>;
    rowClicked: EventEmitter<any>;
    rowDoubleClicked: EventEmitter<any>;
    gridReady: EventEmitter<any>;
    gridSizeChanged: EventEmitter<any>;
    viewportChanged: EventEmitter<any>;
    firstDataRendered: EventEmitter<any>;
    dragStarted: EventEmitter<any>;
    dragStopped: EventEmitter<any>;
    rowEditingStarted: EventEmitter<any>;
    rowEditingStopped: EventEmitter<any>;
    cellEditingStarted: EventEmitter<any>;
    cellEditingStopped: EventEmitter<any>;
    bodyScroll: EventEmitter<any>;
    animationQueueEmpty: EventEmitter<any>;
    heightScaleChanged: EventEmitter<any>;
    paginationChanged: EventEmitter<any>;
    componentStateChanged: EventEmitter<any>;
    bodyHeightChanged: EventEmitter<any>;
    displayedColumnsWidthChanged: EventEmitter<any>;
    scrollVisibilityChanged: EventEmitter<any>;
    columnHoverChanged: EventEmitter<any>;
    flashCells: EventEmitter<any>;
    rowDragEnter: EventEmitter<any>;
    rowDragMove: EventEmitter<any>;
    rowDragLeave: EventEmitter<any>;
    rowDragEnd: EventEmitter<any>;
    popupToFront: EventEmitter<any>;
    columnRowGroupChangeRequest: EventEmitter<any>;
    columnPivotChangeRequest: EventEmitter<any>;
    columnValueChangeRequest: EventEmitter<any>;
    columnAggFuncChangeRequest: EventEmitter<any>;
}
