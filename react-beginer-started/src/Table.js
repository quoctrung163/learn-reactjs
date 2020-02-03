import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = props => {
  const rows = props.characterData.map(function(row, index){
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    )
  })

  return <tbody>{rows}</tbody>
}

export default class Table extends Component {
  render() {
    const { chacracterData } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody chacracterData={chacracterData} />
      </table>
    );
  }
}