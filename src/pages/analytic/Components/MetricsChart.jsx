import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart, { animator } from 'chart.js/auto';

const MetricsChart = ({ chartValues, heading }) => {
  console.log(chartValues)
  // [{label:'',value:''}] separate both labels and values in an array
  const data = {
    labels: chartValues.map((item) => item.name),
    datasets: [
      {
        data: chartValues.map((item) => item.value),
        backgroundColor: ['red', '#2D18CB', '#11ACE0'],
        hoverBackgroundColor: ['#ff5d5d', '#5d5dff', '#5de4ff'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}`;
          },
        },
      },
    },
    cutout: '70%', // Adjusts the donut chart's cutout
    maintainAspectRatio: false,
  };

  // Central text plugin

  const total = chartValues.reduce((acc, val) => {
    return parseInt(acc, 10) + parseInt(val.value, 10);
  }, 0);
  Chart.register({
    id: 'centerText',
    beforeDraw(chart) {
      const { width, height } = chart;
      const ctx = chart.ctx;
      ctx.restore();

      const fontSize = (height / 114).toFixed(2);
      ctx.font = `${fontSize}em sans-serif`;
      ctx.textBaseline = 'middle';

      const text = total;
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2;

      ctx.fillStyle = 'white';
      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  });

  return (
    <div className='bg-theme-dark p-5 rounded-lg'>
      <div className='flex gap-[50px]'>
        <div>
          <h2 className='text-2xl mb-4 capitalize'>{heading}</h2>
          <p className='text-xl'>Total = {total}</p>
          <div className='flex flex-col gap-4 mt-4'>
            {data.labels.map((label, index) => (
              <div key={index} className='flex items-center gap-4'>
                <div className={`bg-[${data.datasets[0].backgroundColor[index]}]  p-3 rounded-lg`}></div>
                <div className=''>
                  <h1 className='text-sm opacity-50 capitalize'>{label}</h1>
                  <p className='text-2xl'>{data.datasets[0].data[index]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='h-[300px]'>
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default MetricsChart;
