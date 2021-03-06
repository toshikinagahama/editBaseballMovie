import React from 'react';
import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import MaterialTable from "material-table";
import "./ResultTimeTable.css"

import { useDispatch, useSelector } from "react-redux";
import { resultTimeTableAdd, resultTimeTableUpdate, resultTimeTableDelete, resultTimeTableSelect } from '../actions'
import { Hidden } from '@material-ui/core';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};


function ResultTimeTable() {

    const dispatch = useDispatch();
    let data = useSelector(state => state.data);
    console.log(data);

    return (
        <div style={{height: "400px", overflow: "scroll"}}>
            <MaterialTable icons={tableIcons} className="MaterialTable"
                columns={[
                    {
                        title: "UserID", field: "UserID", cellStyle: {
                            fontSize: 12,
                            padding: 0
                        }},
                    {
                        title: "Event1", field: "Event1", cellStyle: {
                            fontSize: 12,
                            padding: 0
                        }},
                    {
                        title: "Event2", field: "Event2", cellStyle: {
                            fontSize: 12,
                            padding: 0
                        }},
                    {
                        title: "RBI", field: "RBI", cellStyle: {
                            fontSize: 12,
                            padding: 0
                        }},
                    {
                        title: "Time", field: "Time", cellStyle: {
                            fontSize: 12,
                            padding: 0
                        }},
                ]}
                data={data}
                title=""
                editable={{
                    onRowAdd: newData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    dispatch(resultTimeTableAdd(newData));
                                }
                                resolve();
                            }, 10);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    const index = data.indexOf(oldData);
                                    dispatch(resultTimeTableUpdate(index, newData));
                                }
                                resolve();
                            }, 10);
                        }),
                    onRowDelete: oldData =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    const index = data.indexOf(oldData);
                                    console.log(index);
                                    dispatch(resultTimeTableDelete(index));
                                }
                                resolve();
                            }, 10);
                        })
                }}
                onRowClick={(e, row) => { dispatch(resultTimeTableSelect(row))}}
                options={{
                    search: false,
                    headerStyle: {
                        fontSize: 12,
                        minWidth: 20,
                        width: 10,
                        margin: 0,
                        padding: 0
                    },
                    rowStyle: {
                        fontSize: 12,
                        minWidth: 20,
                        width: 10,
                        margin: 0,
                        padding: 0
                    },
                    exportButton: true,
                    pageSize: 100,
                    pageSizeOptions: [20, 50, 100, 200, 500, 1000]
                }}
            />
        </div>
    );
}

export default ResultTimeTable;
