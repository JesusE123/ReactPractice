import React from 'react'
import Table from 'react-bootstrap/Table';

const Tablet = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Header</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark Craig</td>
          <td>@Useless</td>
          <td>@Canada</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>@Thornton</td>
          <td>@Siberia</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Larry the Bird</td>
          <td>@UmanUnited</td>
          <td>@United </td>
        </tr>
      </tbody>
    </Table>
    )
};

export {Tablet}