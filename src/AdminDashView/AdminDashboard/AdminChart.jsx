import { Bar, BarChart, ResponsiveContainer, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts";


const AdminChart = () => {
     
  const data = [
    {
      name: "20",
      Employee: 20,
      Employer: 20,
      Total_Interest: 20,  
    },
    {
      name: "40",
      Employee: 25,
      Employer: 25,
      Total_Interest: 25,  
    },
    {
      name: "60",
      Employee: 30,
      Employer: 30,
      Total_Interest: 30,  
    },
    {
      name: "80",
      Employee: 35,
      Employer: 35,
      Total_Interest: 35,  
    } 
    // Add more data entries as needed
  ];
  
    return (
        <div className="">
       <ResponsiveContainer aspect={1.2}>
       <BarChart
       // 400, 320
      width={320}
      height={300}
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
     <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip /> 
      <Bar dataKey="Employer" stackId="a" fill="#0800A3" />
      <Bar dataKey="Employee" stackId="a" fill="#4935FF" />
      <Bar dataKey="Total_Interest" stackId="a" fill="#85AFFF" />  
      <Legend  />
      </BarChart>
      </ResponsiveContainer>
        </div>
    );
};

export default AdminChart;