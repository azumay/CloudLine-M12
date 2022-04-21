import * as React from "react";

import { DataGrid } from "@mui/x-data-grid";


/*ICONOS*/
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function DataGridMui(props) {
  const [selectionModel, setSelectionModel] = React.useState([]);

  const { data, rowId, ...altres } = props;

 

  return (
    /**
     *  param1 data -> Datos para agregar a la tabla "rows"
     *  param2 col -> Cabeceras de la tabla "columns"
     **/
    <div style={{ height: 500 }} className="boxEditDB">
      <DataGrid
        rows={data}
        columns={props.col}
        getRowId={rowId}
        {...altres}
        sx={{
          boxShadow: 2,
          padding: 2,
        }}
        pageSize={10}
        editMode="row"
        style={{ fontSize: 15 }}
        rowsPerPageOptions={[10]}
        checkboxSelection={true} //Checks Rows
       
        disableSelectionOnClick
        localeText={{
          noRowsLabel: "No s'han trobat dades.",
          noResultsOverlayLabel: "No s'ha trobat cap resultat",
          //
          columnMenuLabel: "Menú",
          columnMenuUnsort: "Desordena",
          columnMenuSortAsc: "Ordenar ASC",
          columnMenuSortDesc: "Ordenar DESC",
          columnMenuFilter: "Filtre",
          columnMenuHideColumn: "Amaga",
          columnMenuShowColumns: "Mostra les columnes",
          //
          filterPanelColumns: "Columnes",
          filterPanelOperators: "Operadors",
          filterPanelInputLabel: "Valor",
          //
          filterOperatorContains: "conté",
          filterOperatorEquals: "igual",
          filterOperatorStartsWith: "comença amb",
          filterOperatorEndsWith: "acaba amb",
          filterOperatorIs: "és",
          filterOperatorNot: "no és",
          filterOperatorAfter: "és posterior",
          filterOperatorOnOrAfter: "està a sobre o després",
          filterOperatorBefore: "és anterior",
          filterOperatorOnOrBefore: "és a o abans",
          filterOperatorIsEmpty: "està buit",
          filterOperatorIsNotEmpty: "no està buit",
          //
          columnsPanelTextFieldLabel: "Cerca la columna",
          columnsPanelTextFieldPlaceholder: "Títol de la columna",
          columnsPanelShowAllButton: "Mostra-ho tot",
          columnsPanelHideAllButton: "Amaga-ho tot",
          //
          filterPanelInputPlaceholder: "Valor del filtre",
          //
          toolbarColumns: "Columnes",
          toolbarColumnsLabel: "Seleccionar columnes",
          toolbarFilters: "Filtres",
          toolbarFiltersLabel: "Veure filtres",
          toolbarFiltersTooltipHide: "Amaga filtres",
          toolbarFiltersTooltipShow: "Veure filtres",
          toolbarFiltersTooltipActive: (count) =>
            count !== 1 ? `${count} filtres actius` : `${count} Filtre actiu`,

          toolbarDensity: "Size",
          toolbarDensityLabel: "Densitat",
          toolbarDensityCompact: "Compacte",
          toolbarDensityStandard: "Estàndard",
          toolbarDensityComfortable: "Còmode",
          toolbarExport: "Exportar",
          toolbarExportLabel: "Exportar",
          toolbarExportCSV: "Descarrega com a CSV",
          toolbarExportPrint: "Imprimir",

          // Rows selected footer text
          footerRowSelected: (count) =>
            count !== 1
              ? `${count.toLocaleString()} cel·les seleccionades`
              : `${count.toLocaleString()} cel·la seleccionada`,

          // Total rows footer text
          footerTotalRows: "Total cel·les:",

          // Total visible rows footer text
          footerTotalVisibleRows: (visibleCount, totalCount) =>
            `${visibleCount.toLocaleString()} de ${totalCount.toLocaleString()}`,
        }}
      />
    </div>
  );
}
