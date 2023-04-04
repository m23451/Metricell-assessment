import React, { useState, useEffect } from 'react';

export default function () {

    async function getEmployees() {
        return fetch("/employees").then(response => response.json());
    }

    async function createEmployee(name, value) {
        return fetch("/employees", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, value: value })
        });
    }

    async function updateEmployee(name, value) {
        return fetch("/employees", {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: name, value: value })
        });
    }

    return (
    <div>
          <h2>List of employees</h2>
          <ul>
            {getEmployees.map((employee, index) => (
              <li key={index}>{employee.name} - {employee.value}</li>
        ))}
      </ul>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name={employee.name} onChange={createEmployee} />
      </div>
      <div>
        <label htmlFor="value">Value:</label>
        <input type="number" id="value" value={employee.value} onChange={createEmployee} />
      </div>
      <button onClick={createEmployee}>Add Employee</button>
      <button onClick={updateEmployee}>Update Employee</button>
    </div>
    );
}
