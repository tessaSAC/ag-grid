import {Module, ModuleNames, Grid} from "ag-grid-community";
import {ClientSideRowModel} from "./clientSideRowModel/clientSideRowModel";
import {FilterStage} from "./clientSideRowModel/filterStage";
import {SortStage} from "./clientSideRowModel/sortStage";
import {FlattenStage} from "./clientSideRowModel/flattenStage";
import {SortService} from "./clientSideRowModel/sortService";
import {FilterService} from "./clientSideRowModel/filterService";
import {ImmutableService} from "./clientSideRowModel/immutableService";

export const ClientSideRowModelModule: Module = {
    moduleName: ModuleNames.ClientSideRowModelModule,
    beans: [FilterStage, SortStage, FlattenStage, SortService, FilterService, ImmutableService],
    rowModels: { clientSide: ClientSideRowModel }
};

Grid.addModule([ClientSideRowModelModule]);