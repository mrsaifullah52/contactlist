import React from 'react';

const List =({data})=>{
  return(
    <tr>
      <td>{data.name}</td>
      <td>{data.phone}</td>
      <td>{data.email}</td>
      <td><button className="btn btn-small btn-danger">x</button></td>
    </tr>
  )
}

export default List;