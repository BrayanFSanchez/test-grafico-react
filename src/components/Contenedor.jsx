import { useEffect, useRef, useState } from "react";
import styled from '@emotion/styled';
import Chart from 'chart.js/auto';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  
  justify-content: space-evenly;
`;

export const Contenedor = () => {

    const categories = {
        category1: ['Categoría 1A', 'Categoría 1B', 'Categoría 1C'],
        category2: {
          'Categoría 1A': ['Categoría 2A1', 'Categoría 2A2', 'Categoría 2A3'],
          'Categoría 1B': ['Categoría 2B1', 'Categoría 2B2', 'Categoría 2B3'],
          'Categoría 1C': ['Categoría 2C1', 'Categoría 2C2', 'Categoría 2C3'],
        },
        category3: {
          'Categoría 2A1': ['Categoría 3A1', 'Categoría 3A2', 'Categoría 3A3'],
          'Categoría 2A2': ['Categoría 3B1', 'Categoría 3B2', 'Categoría 3B3'],
          'Categoría 2A3': ['Categoría 3C1', 'Categoría 3C2', 'Categoría 3C3'],
          'Categoría 2B1': ['Categoría 3D1', 'Categoría 3D2', 'Categoría 3D3'],
          'Categoría 2B2': ['Categoría 3E1', 'Categoría 3E2', 'Categoría 3E3'],
          'Categoría 2B3': ['Categoría 3F1', 'Categoría 3F2', 'Categoría 3F3'],
          'Categoría 2C1': ['Categoría 3G1', 'Categoría 3G2', 'Categoría 3G3'],
          'Categoría 2C2': ['Categoría 3H1', 'Categoría 3H2', 'Categoría 3H3'],
          'Categoría 2C3': ['Categoría 3I1', 'Categoría 3I2', 'Categoría 3I3'],
        },
    };

    const [category1, setCategory1] = useState('');
    const [category2, setCategory2] = useState('');
    const [category3, setCategory3] = useState('');
    const chartRef = useRef(null);
    const chartInstanceRef = useRef(null);

    const handleCategory1Change = (e) => {
        setCategory1(e.target.value);
        setCategory2('');
        setCategory3('');
    };

    const handleCategory2Change = (e) => {
        setCategory2(e.target.value);
        setCategory3('');
    };

    const handleCategory3Change = (e) => {
        setCategory3(e.target.value);
    };

    const category1Options = categories.category1.map((category) => (
        <option value={category} key={category}>
        {category}
        </option>
    ));

    const category2Options = categories.category2[category1]?.map((category) => (
        <option value={category} key={category}>
        {category}
        </option>
    ));

    const category3Options = categories.category3[category2]?.map((category) => (
        <option value={category} key={category}>
        {category}
        </option>
    ));

    useEffect(() => {
        if (chartRef.current) {
          // Destroy existing chart if it exists
          if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
          }
    
          const ctx = chartRef.current.getContext('2d');
    
          // Código para generar el gráfico
          const labels = ['Enero', 'Febrero', 'Marzo', 'Abril'];
          const data = {
            labels: labels,
            datasets: [
              {
                label: 'Sales by Month for:',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1,
              },
            ],
          };

          chartInstanceRef.current = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            },
          });
        }
    }, [category1, category2, category3]);

  return (
    <>
        <Container>

    <div>
        <label htmlFor="category1">Comida:</label>
        <select id="category1" value={category1} onChange={handleCategory1Change}>
            {category1Options}
        </select>
    </div>

      <div>
        <label htmlFor="category2">Productos:</label>
        <select id="category2" value={category2} onChange={handleCategory2Change} disabled={!category1}>
            {category2Options || <option value="">No hay opciones disponibles</option>}
        </select>
      </div>

      <div>
        <label htmlFor="category3">Marcas:</label>
        <select id="category3" value={category3} onChange={handleCategory3Change} disabled={!category2}>
            {category3Options || <option value="">No hay opciones disponibles</option>}
        </select>
      </div>

        </Container>

        <canvas ref={chartRef}></canvas>
    </>
  )
}