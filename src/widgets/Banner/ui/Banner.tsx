import React from 'react';
import { Button, Typography, Space } from 'antd';

const { Title, Paragraph } = Typography;

const Banner: React.FC = () => {
  return (
    <div style={{
      height: '400px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'url("/path/to/banner-image.jpg")',
      backgroundSize: 'cover',
      color: '#fff',
      textAlign: 'center'
    }}>
      <Space direction="vertical" size="middle">
        <Title style={{ color: '#000000' }}>Изучите часть истории</Title>
        <Paragraph style={{ color: '#000000', fontSize: '1.3rem' }}>
          Уникальные военно-исторические события собраны в одном месте!
        </Paragraph>
        <Button type="primary" size="large">Перейти в музей</Button>
      </Space>
    </div>
  );
}

export default Banner;
