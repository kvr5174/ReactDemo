
import React, { Component } from 'react';
import { data, employeeData } from './Data'

function EmployeeDetails(props) {
    let secondaryDataList = [];
    return (
        <table>
            <thead>
                <tr>
                    {
                        Object.keys(data).map(function (index) {
                            if (data[index].Table == props.valueType1 || data[index].Table == props.valueType2) {
                                secondaryDataList.push(data[index].Label);
                                return (
                                    <th key={index}>{data[index].Label}</th>
                                )
                            }
                        }.bind(this))
                    }
                </tr>
            </thead>
            <tbody>
                {Object.keys(employeeData).map(function (id) {
                    if (!(props.isPrimary) && props.selectedID == employeeData[id].Id) {
                        return (
                            <tr key={id} id={id}>{
                                props.selectedFields.map(function (value) {
                                    return (
                                        <td key={value} id={employeeData[id].Id}>{employeeData[id][value]}</td>
                                    )
                                }.bind(this))
                            }
                            </tr>
                        )
                    } else if (props.isPrimary) {
                        return (
                            <tr onClick={props.handleClick} key={id} id={id}>{
                                props.selectedFields.map(function (value) {
                                    return (
                                        <td key={value} id={employeeData[id].Id}>{employeeData[id][value]}</td>
                                    )
                                }.bind(this))
                            }
                            </tr>
                        )
                    }

                }.bind(this))}
            </tbody>
        </table>

    )
}


export default EmployeeDetails;

