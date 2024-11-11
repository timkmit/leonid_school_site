import React from 'react';
import { Card, Col, Row, Typography } from 'antd';

const { Title } = Typography;

interface GalleryItem {
  title: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  { title: 'Наши ученики', image: './img/2.webp' },
  { title: 'Синий платочек', image: './img/1.webp' },
  { title: 'Уроки химии', image: './img/3.webp' },
];

const Gallery: React.FC = () => {
  return (
    <div style={{ padding: '0.8rem', backgroundColor: '#f5f5f5c3', borderRadius: '0.5rem' }}>
      <Title level={2} style={{ textAlign: 'center' }}>Коллекция фотографий</Title>
      <Row gutter={[16, 16]} justify="center">
        {galleryItems.map((item, index) => (
          <Col xs={24} sm={12} md={8} lg={6} key={index}>
            <Card
              hoverable
              cover={<img alt={item.title} src={item.image} />}
            >
              <Card.Meta title={item.title} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Gallery;
