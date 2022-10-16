import { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../../services/cryptoApi';

const { Text, Title } = Typography;
const { Option } = Select;

const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const News = ({ simplifield }) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const count = simplifield ? 6 : 12;
    const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({ newsCategory, count });
    const { data } = useGetCryptosQuery(100);

    const newCryptoNewsArrayWithIds = cryptoNews?.value?.map((news, idx) => ({ ...news, id: idx + 1 }));

    if (isFetching) return "Loading ...";

    return (
        <Row gutter={[24, 24]} className='routes'>
            {
                !simplifield && (
                    <Col span={24}>
                        <Select
                            showSearch
                            className='select-news'
                            placeholder='Select a Crypto'
                            optionFilterProp='children'
                            onChange={(value) => setNewsCategory(value)}
                            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLocaleLowerCase()) >= 0}
                        >
                            <Option value="Cryptocurrency">Cryptocurrency</Option>
                            {
                                data?.data?.coins.map((coin) => {
                                    return <Option key={coin.uuid} value={coin.name}>{coin.name}</Option>
                                })
                            }
                        </Select>
                    </Col>
                )
            }
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
                                        news.description.length < 100 ? `${news.description.substring(0, 100)}...` : news.description
                                    }
                                </p>
                                <div className="provider-container">
                                    <div>
                                        <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="news" />
                                        <Text className="provider-name">{news.provider[0]?.name}</Text>
                                    </div>
                                    <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
                                </div>
                            </a>
                        </Card>
                    </Col>
                })
            }
        </Row>
    )
}

export default News