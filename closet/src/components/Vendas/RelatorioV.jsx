/* eslint-disable no-undef */
import style from './RelatorioV.module.css'
import Nav from "../NavBar/Nav"
import Footer from "../Footer/Footer"
import React, { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function RelatorioV() {
    const data = [
        {
          name: 'Page A',
        //   uv: 4000,
          Masculino: 2400,
        //   amt: 2400,
        },
        {
          name: 'Page B',
        //   uv: 3000,
          PlusSize: 1398,
        //   amt: 2210,
        },
        {
          name: 'Page C',
        //   uv: 2000,
          Vintage: 9800,
        //   amt: 2290,
        },
        {
          name: 'Page D',
        //   uv: 2780,
          Casual: 3908,
        //   amt: 2000,
        },
        {
          name: 'Page E',
        //   uv: 1890,
          Infantil: 4800,
        //   amt: 2181,
        },
        {
          name: 'Page F',
        //   uv: 2390,
          Feminino: 3800,
        //   amt: 2500,
        },
        {
          name: 'Page G',
        //   uv: 3490,
          Esportivo: 4300,
        //   amt: 2100,
        },
        {
          name: 'Page H',
            // uv: 3490,
            Lingerie: 4300,
            // amt: 2100,
          },
          {
            name: 'Page I',
            // uv: 3490,
            Jeans: 4300,
            // amt: 2100,
          },
      ];

     const [vendasVisivel, setVendasVisivel] = useState(false);
      
  return (
    <>
    <Nav/>
    <div className={style.Topo}>
        <button onClick={()=> setVendasVisivel(true)}>Vendas</button>
        <button>Usuários</button>
    </div>
    { vendasVisivel && 
    <ResponsiveContainer className={style.Grafico1} width="100%" height={700}>
        <div className={style.Espaço}></div>
        <h1>Categoria</h1>
        <icon onClick={()=> setVendasVisivel(false)} className={style.X}><IoClose/></icon>
     <BarChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 60,
            right: 30,
            left: 20,
            bottom: 130,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
            <Bar dataKey="Masculino" fill="#8884d8"></Bar>
            <Bar dataKey="PlusSize" fill="#438282"></Bar>
            <Bar dataKey="Vintage" fill="#D2A3A3"></Bar>
            <Bar dataKey="Casual" fill="#DBB4B4"></Bar>
            <Bar dataKey="Infantil" fill="#A3D2B0"></Bar>
            <Bar dataKey="Feminino" fill="#D2C8A3"></Bar>
            <Bar dataKey="Esportivo" fill="#CCA3D2"></Bar>
            <Bar dataKey="Lingerie" fill="#A3B6D2"></Bar>
            <Bar dataKey="Jeans" fill="#7d9fa6"></Bar>
        </BarChart>
    </ResponsiveContainer>
}
          <Footer/>
    </>
  );
};

export default RelatorioV;
