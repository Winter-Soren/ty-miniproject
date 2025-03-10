// import React from 'react'
// import { Line } from 'react-chartjs-2'
// import { Typography, Row, Col, Select } from 'antd'
// import { useGetCryptoHistoryQuery } from '../services/cryptoApi'


// const { Title } = Typography
// const LineChart = ({ coinHistory, currentPrice, coinName }) => {
//     const coinprice = []
//     const coinTimestamp = []

//     for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
//         coinprice.push(coinHistory?.data?.history[i].price)
//         coinTimestamp.push(new Date(coinHistory?.data?.history[i].timestamp).toLocaleDateString())
//     } 

//     const data = {
//         labels: coinTimestamp,
//         datasets: [
//             {
//                 label: 'Price In USD',
//                 data: coinprice,
//                 fill: false,
//                 backgroundColor: '#0071bd',
//                 borderColor: '#0071bd',
//             },
//         ],
//     }

//     const options = {
//         scales: {
//             yAxis: [
//                 {
//                     ticks: {
//                         beginAtZero: true,
//                     },
//                 },
//             ],
//         },
//     }



//   return (
//     <>
//         <Row className="chart-header">
//             <Title level={2} className="chart-title">{coinName} Price Chart</Title>
//             <Col className="price-container">
//                 <Title level={5} className="price-change">Change:{coinHistory?.data?.change}%</Title>
//                 <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
//             </Col>
//         </Row>
//         <Line data={data} options={options}  />
//     </>
//   )
// }

// export default LineChart


import React from 'react';
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = coinHistory?.data?.history?.length-1; i >= 0; i -= 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  for (let i = coinHistory?.data?.history?.length-1; i >= 0; i -= 1) {
    coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp*1000).toLocaleDateString());
  }

    const data = {  
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: document.body.className === 'light-mode' ? 'rgba(110, 111, 119, 1)' : 'rgba(96, 148, 197, 1)',
                borderColor: document.body.className === 'light-mode' ? 'rgba(110, 111, 119, 1)': 'rgba(96, 148, 197, 1)',
            },
        ],
    };

    const options = {};





  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title coin-details-heading">{coinName} Price Chart </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">Change: {coinHistory?.data?.change}%</Title>
          <Title level={5} className="current-price">Current {coinName} Price: $ {currentPrice}</Title>
        </Col>
      </Row>
      <div className="graph">
        <Line className="line-chart" data={data} options={options}/>
      </div>
    </>
  );
};

export default LineChart;