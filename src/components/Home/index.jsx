import React from 'react';
import { Link } from 'react-router-dom';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { useGetCryptosQuery } from '../../services/cryptoApi';
import { Cryptocurrencies, News } from '../../components';

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return "Loading..."

  return (
    <div className='routes'>
      <Typography.Title level={2} className="heading">Global Crypto Stats</Typography.Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
      </Row>
      <div className='home-heading-container'>
        <Typography.Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Typography.Title>
        <Typography.Title level={3} className="show-more"><Link to='/cryptocurrencies'>Show More</Link></Typography.Title>
      </div>
      <Cryptocurrencies simplifield />
      <div className='home-heading-container'>
        <Typography.Title level={2} className="home-title">Latest Crypto News</Typography.Title>
        <Typography.Title level={3} className="show-more"><Link to='/news'>Show More</Link></Typography.Title>
      </div>
      <News simplifield />
    </div>
  )
}

export default Home