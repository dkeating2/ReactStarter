import CircularProgress from "@mui/material/CircularProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import useData from "../../hooks/useData/useData";
import { DataTableProps } from "./DataTable.interfaces";

const DataTable = (props: DataTableProps) => {
  const { url, columns } = props;

  const { data, isLoading, nRecords } = useData(url);
  return (
    <>
      {isLoading ? (
        <div>
          <CircularProgress /> Loading...
        </div>
      ) : (
        <>
          <span>Displaying {nRecords} records</span>
          <TableContainer>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  {columns.map((column) => {
                    return <TableCell>{column.label}</TableCell>;
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {data?.map((row: Record<string, any>) => {
                  return (
                    <TableRow>
                      {columns.map((column) => {
                        return <TableCell>{row[column.accessor]}</TableCell>;
                      })}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </>
  );
};
export default DataTable;
