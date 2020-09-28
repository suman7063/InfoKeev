import React, { useEffect } from 'react';
import { makeStyles, Button, Table, TableBody, TableCell, TableContainer, TablePagination, TableRow, Paper } from '@material-ui/core';
import axios from "axios";

import { TablePaginationActions, StyledTableCell } from './Pagination'

import TableHead from '@material-ui/core/TableHead';

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

export const TableForPrice = () => {
  const classes = useStyles2();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [tableData, setData] = React.useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    axios.get('stockData.json').then(res => {
      setData(res.data)
    });
  });


  return (
    <TableContainer component={Paper}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell colSpan={5} style={{borderBottom: 'none'}}>
              <p className="boxOneBtnPrice">Total Profit</p>
            </TableCell>
          </TableRow>
          <TableRow style={{ height: '20px' }}>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>User Type</StyledTableCell>
            <StyledTableCell>Joined</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : tableData
          ).map(row => {
            return (
              // {tableData.map((row) => (
              <TableRow>
                <TableCell>
                  {row.name}
                </TableCell>
                <TableCell>
                  {row.email}
                </TableCell>
                <TableCell>
                  {row.userType}
                </TableCell>
                <TableCell>
                  {row.join}
                </TableCell>
                <TableCell>
                  {
                    row.status === "pending" ?
                      <Button className="kiPendingBtn" style={{ background: 'transparent linear-gradient(180deg, #C694F9 0%, #AB64F4 100%) 0% 0% no-repeat padding-box' }}>{row.status}</Button>
                      :
                      <Button className="kiPendingBtn" style={{ background: 'transparent linear-gradient(180deg, #6AA5E3 0%, #6866E9 100%) 0% 0% no-repeat padding-box' }}>{row.status}</Button>
                  }
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15, { label: 'All', value: -1 }]}
          colSpan={5}
          count={tableData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          SelectProps={{
            inputProps: { 'aria-label': 'rows per page' },
            native: true,
          }}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          ActionsComponent={TablePaginationActions}
          style={{borderBottom: 'none'}}
        />
      </Table>
    </TableContainer>
  );
}
