import React from 'react'

const TableHeader= () =>
{
  return(
    <thead>
                    <tr>
                        <th>Name</th>
                        <th>No_of_PlacedCompanies</th>
                        <th>CompanyType</th>
                        <th>Salary_per_month</th>
                        <th>Remove</th>
                    </tr>
    </thead>)
}

const TableBody= (props) =>
{
    const studentDetails=props.PlacedData.map((row,index)=>
    {
      return(
        <tr key={index}>
          <td>{row.Name}</td>
          <td>{row.No_of_PlacedCompanies}</td>
          <td>{row.CompanyType}</td>
          <td>{row.Salary_per_month}</td>
          <td>
            <button onClick={() => props.removeCharacter(index)}>Delete</button>
          </td>
        </tr>
      )
    })
    return(
        <tbody>{studentDetails}</tbody>
    )
}
const Table=(props)=>
{
    const {PlacedData,removeCharacter}=props
    return(
            <table>
                <TableHeader />
                <TableBody PlacedData={PlacedData} removeCharacter={removeCharacter} />
            </table>
        );
      
}

export default Table;