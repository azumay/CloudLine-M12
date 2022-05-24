import * as React from "react";

/* DATAGRID - MUI */
import { DataGrid } from "@mui/x-data-grid";


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
          noRowsLabel: "Cargando datos...",
          //
          columnMenuLabel: "Menú",
          columnMenuUnsort: "Desordenar",
          columnMenuSortAsc: "Ordenar ASC",
          columnMenuSortDesc: "Ordenar DESC",
          columnMenuFilter: "Filtros",
          columnMenuHideColumn: "Esconde",
          columnMenuShowColumns: "Mostrar columnas",
          //
          filterPanelColumns: "Columnas",
          filterPanelOperators: "Operadores",
          filterPanelInputLabel: "Valores",
          //
          filterOperatorContains: "contiene",
          filterOperatorEquals: "igual",
          filterOperatorStartsWith: "comienza con",
          filterOperatorEndsWith: "acaba con",
          filterOperatorIs: "es",
          filterOperatorNot: "no es",
          filterOperatorAfter: "es posterior",
          filterOperatorOnOrAfter: "está a sobre o després",
          filterOperatorBefore: "és anterior",
          filterOperatorOnOrBefore: "es a o antes",
          filterOperatorIsEmpty: "está vacío",
          filterOperatorIsNotEmpty: "no está vacío",
          //
          columnsPanelTextFieldLabel: "Busqueda de la columna",
          columnsPanelTextFieldPlaceholder: "Titulo de la columna",
          columnsPanelShowAllButton: "Mostrar todo",
          columnsPanelHideAllButton: "Esconder todo",
          //
          filterPanelInputPlaceholder: "Valor del filtro",
          //
          toolbarColumns: "Columnas",
          toolbarColumnsLabel: "Seleccionar columnas",
          toolbarFilters: "Filtros",
          toolbarFiltersLabel: "Ver filtros",
          toolbarFiltersTooltipHide: "Quitar filtros",
          toolbarFiltersTooltipShow: "Ver filtros",
          toolbarFiltersTooltipActive: (count) =>
            count !== 1
              ? `${count} filtros activos`
              : `${count} filtros activos`,

          toolbarDensity: "Size",
          toolbarDensityLabel: "Densitat",
          toolbarDensityCompact: "Compacte",
          toolbarDensityStandard: "Estàndard",
          toolbarDensityComfortable: "Còmode",
          toolbarExport: "Exportar",
          toolbarExportLabel: "Exportar",
          toolbarExportCSV: "Descargar como CSV",
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
