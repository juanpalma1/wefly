import React, { useState } from 'react';
import './App.css';
import Table from './components/Table';
import DATA from './data';

const App = () => {
  const [ airline, setAirline ] = useState('all');
  const [ airport, setAirport ] = useState('all');
  
  const {
    routes,
    airlines,
    airports,
    getAirlineById,
    getAirportByCode
  } = DATA;
  
  const filteredRoutes = routes.filter(route => {
    return (airline === 'all') && (airport === 'all');
  });
  
  const columns = [
    {name: 'Airline', property: 'airline'},
    {name: 'Source Airport', property: 'src'},
    {name: 'Destination Airport', property: 'dest'},
  ];
  
  const formatValue = (property, value) => {
    return property === 'airline' ?
      getAirlineById(value) : getAirportByCode(value);
  };
  
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Airline Routes</h1>
      </header>
      <section>
        <Table
          className="routes-table"
          columns={columns}
          rows={filteredRoutes}
          format={formatValue}
        />
      </section>
    </div>
  );
};

export default App;