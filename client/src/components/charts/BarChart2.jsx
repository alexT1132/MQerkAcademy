import React, { PureComponent } from 'react';
import {
  ComposedChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: '1er',
    pv: 80,
  },
  {
    name: '2do',
    pv: 96,
  },
  {
    name: '3er',
    pv: 100,
  },
  {
    name: '4to',
    pv: 60,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/vertical-composed-chart-6r8xmw';

  render() {
    return (
      <ResponsiveContainer width="95%" height="90%">
        <ComposedChart
          layout="vertical"
          width={300}
          height={200}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" domain={[10, 100]} />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Bar dataKey="pv" barSize={15} fill="#413ea0" />
        </ComposedChart>
      </ResponsiveContainer>
    );
  }
}