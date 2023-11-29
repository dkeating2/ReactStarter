type ColumnT = {
  accessor: string;
  label: string;
};

export interface DataTableProps {
  columns: ColumnT[];
  url: string;
}
