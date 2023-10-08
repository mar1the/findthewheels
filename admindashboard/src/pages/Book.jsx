import React from 'react';
import "../styles/book.css";
import Axios from 'axios';
const TableComponent = () => {
  const data = [
    {
      firstName: 'Joeshua',
      lastName: 'Villarosa',
      email: 'juswamarit@gmail.com',
      phoneNumber: '09664355094',
      fromAddress: 'Dagupan',
      toAddress: 'Manila',
      date: '01/26/23',
      time: '15:30:00',
      message: 'Kuya, stop the car!'
    },

  ];

  const getData = () => {
      Axios.get("http://localhost:8800/api/book/get").then(
        (response)=>{
        console.log(response)
      }
      );
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>From Address</th>
            <th>To Address</th>
            <th>Date</th>
            <th>Time</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.phoneNumber}</td>
              <td>{item.fromAddress}</td>
              <td>{item.toAddress}</td>
              <td>{item.date}</td>
              <td>{item.time}</td>
              <td>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;