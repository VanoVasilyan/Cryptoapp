import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplifield }) => {
    const count = simplifield ? 6 : 12
    const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count });

    const newCryptoNewsArrayWithIds = cryptoNews?.value?.map((news, idx) => ({ ...news, id: idx + 1 }));

    if (isFetching) return "Loading ...";

    return (
        <Row gutter={[24, 24]} className='routes'>
            {
                newCryptoNewsArrayWithIds?.map((news) => {
                    return <Col xs={24} sm={8} lg={8} key={news.id}>
                        <Card hoverable className='news-card'>
                            <a href={news.url} target="_blank" rel="noreferrer">
                                <div className="news-image-container">
                                    <Title className='news-title' level={4}>{news.name}</Title>
                                    <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt={news.name} />
                                </div>
                                <p>
                                    {
                                        news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description
                                    }
                                </p>
                            </a>
                        </Card>
                    </Col>
                })
            }
        </Row>
    )
}

export default News