import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip,
 } from 'recharts';


function BarChart_eeau() {

    const data = [
        { date: "Matemáticas", calif: 8 },
        { date: "Español", calif: 9 },
        { date: "Pensamiento analítico", calif: 7 },
        { date: "Ingles", calif: 8 },
        { date: "Modulos específicos", calif: 6 },
    ]

  return (
        <BarChart width={300} height={200} data={data}>
            <Tooltip />
            <Bar type="monotone" dataKey="calif" stroke="#5115bc" fill='#5115bc' barSize={30} />
            <XAxis dataKey='date' />
            <YAxis domain={[1, 10]} />
        </BarChart>
  )
}

export default BarChart_eeau