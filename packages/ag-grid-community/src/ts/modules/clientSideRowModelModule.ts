import {Module} from "../interfaces/iModule";
import {ModuleNames} from "./moduleNames";
import {Grid} from "../grid";
import {ClientSideRowModel} from "./clientSideRowModel/clientSideRowModel";
import {FilterStage} from "./clientSideRowModel/filterStage";
import {SortStage} from "./clientSideRowModel/sortStage";
import {FlattenStage} from "./clientSideRowModel/flattenStage";
import {SortService} from "./clientSideRowModel/sortService";
import {FilterService} from "./clientSideRowModel/filterService";
import {ImmutableService} from "./clientSideRowModel/immutableService";

export const ClientSideRowModelModule: Module = {
    moduleName: ModuleNames.ClientSideRowModelModule,
    beans: [FilterStage, SortStage, FlattenStage, SortService, FilterService, ImmutableService]
};

Grid.addModule([ClientSideRowModelModule]);
Grid.addRowModelClass('clientSide', ClientSideRowModel);