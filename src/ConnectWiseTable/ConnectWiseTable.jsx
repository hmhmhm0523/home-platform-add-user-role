import React from 'react';
// import styled from 'styled-components'
import { useTable, usePagination, useRowSelect } from 'react-table'
import './ConnectWiseTable.styles.scss';
// import makeData from './makeData'
import PropTypes from 'prop-types';
//import { Test } from './ConnectWiseTable.styles';


const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    )
  }
)

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    selectedFlatRows,
    state: { pageIndex, pageSize, selectedRowIds },
  } = useTable(
    {
      columns,
      data,
    },
    usePagination,
    useRowSelect,
    hooks => {
      hooks.visibleColumns.push(columns => [
        // Let's make a column for selection
        {
          id: 'selection',
          // The header can use the table's getToggleAllRowsSelectedProps method
          // to render a checkbox
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllPageRowsSelectedProps()} />
            </div>
          ),
          // The cell can use the individual row's getToggleRowSelectedProps method
          // to the render a checkbox
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  )

  // Render the UI for your table
  return (
    <>
      {/* <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage,
            },
            null,
            2
          )}
        </code>
      </pre> */}
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      {/* 
        Pagination can be built however you'd like. 
        This is just a very basic UI implementation:
      */}
      <div className="Pagination">
<span className='Pageination-description'>1 - 10 of 15 items</span>
<div className="Spacer"></div>

        {/* <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>{' '} */}

        <a className='PageButton PreviousPageButton' onClick={() => previousPage()} disabled={!canPreviousPage}>
          {''}
        </a>{' '}
        <span className='Pagination-bookmarks'>
          Page{' '}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
        <a className='PageButton NextPageButton' onClick={() => nextPage()} disabled={!canNextPage}>
          {''}
        </a>{' '}
        {/* <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>{' '} */}
        
        <span className='Hidden'>
          | Go to page:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0
              gotoPage(page)
            }}
            style={{ width: '100px' }}
          />
        </span>{' '}
        <select
        className='Hidden'
          value={pageSize}
          onChange={e => {
            setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        {/* <pre>
          <code>
            {JSON.stringify(
              {
                selectedRowIds: selectedRowIds,
                'selectedFlatRows[].original': selectedFlatRows.map(
                  d => d.original
                ),
              },
              null,
              2
            )}
          </code>
        </pre> */}
      </div>
    </>
  )
}


function ConnectWiseTable() {

  const columns = React.useMemo(() => [
    {
      Header: 'NAME',
      accessor: 'name',
    },
    {
      Header: 'EMAIL',
      accessor: 'email',
    },
    {
      Header: 'ROLE',
      accessor: 'role',
    },
    {
      Header: 'CONNECTED APPS',
      accessor: 'connectedApps',
    },
  ],
    []
  );

  const data = React.useMemo(() => [
    {
      name: "Marguerite McBride", 
      email: "ashtyn_larkin@gmail.com",
      role: "IAM Admin, Product Admin",
      connectedApps: "AutoMate, Control, Manage, Sell, Command",
    }, {
      name: "Jared Leonard",
      email: "jo.schimmel@yahoo.com",
      role: "Product Admin",
      connectedApps: "AutoMate, Control, Manage, Sell, Command",
    }, {
      name: "Harriet Hart",
      email: "rylee.langosh@yahoo.com",
      role: "Manage",
      connectedApps: "AutoMate, Control, Manage, Sell, Command",
    }, {
      name: "Lettie Washington",
      email: "terry_bernie@hagg.biz",
      role: "Service Desk Tech 1",
      connectedApps: "AutoMate, Control, Manage, Sell, Command",
    }, {
      name: "Minerva Hart",
      email: "sponer_judge@jakubowski.tv",
      role: "Service Tech 1",
      connectedApps: "AutoMate, Control, Manage, Sell, Command",
    }, {
      name: "Earl Burke",
      email: "harris.melissa@hotmail.com",
      role: "Office Staff",
      connectedApps: "AutoMate, Control, Manage, Sell, Command",
    }, {
      name: "Julia Willis",
      email: "brendon_dare@hotmai.com",
      role: "Sales, Manage",
      connectedApps: "AutoMate, Control, Manage, Sell, Command",
    }, {
      name: "Nathaniel Brewer",
      email: "audreanne.wiegarnd@cooper.biz",
      role: "Client Site Manager",
      connectedApps: "AutoMate, Control, Manage, Sell, Command",
    }, {
      name: "Isabelle Anderson",
      email: "zemlak.rachael@hotmail.com",
      role: "MP User Management",
      connectedApps: "AutoMate, Control, Manage, Sell, Command",
    }, {
      name: "Erik Brvan",
      email: "leilani_kerluke@gmail.com",
      role: "MP Standard User",
      connectedApps: "AutoMate, Control, Manage, Sell, Command",
    }, {
      name: "Marguerite McBride",
      email: "ashtyn_larkin@gmail.com",
      role: "IAM Admin, Product Admin",
      connectedApps: "AutoMate, Control, Manage, Sell, Command",
    }, {
      name: "Nathaniel Brewer",
      email: "audreanne.wiegarnd@cooper.biz",
      role: "Client Site Manager",
      connectedApps: "AutoMate, Control, Manage, Sell, Command",
    }, {
      name: "Isabelle Anderson",
      email: "zemlak.rachael@hotmail.com",
      role: "MP User Management",
      connectedApps: "AutoMate, Control, Manage, Sell, Command",
    }, {
      name: "Earl Burke",
      email: "harris.melissa@hotmail.com",
      role: "Office Staff",
      connectedApps: "AutoMate, Control, Manage, Sell, Command",
    }, {
      name: "Julia Willis",
      email: "brendon_dare@hotmai.com",
      role: "Sales, Manage",
      connectedApps: "AutoMate, Control, Manage, Sell, Command",
    },

  ], []);

  return (<div className="ConnectWiseTableWrapper">
    <Table columns={columns} data={data} />
  </div>
  )
};

ConnectWiseTable.propTypes = {
  // bla: PropTypes.string,
};

ConnectWiseTable.defaultProps = {
  // bla: 'test',
};

export default ConnectWiseTable;
