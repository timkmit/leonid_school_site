import React from 'react';
import { Layout, Typography } from 'antd';

const { Footer } = Layout;
const { Text } = Typography;

const AppFooter: React.FC = () => {
  return (
    <Footer style={{ textAlign: 'center', padding: '20px', backgroundColor: '#333', color: '#fff' }}>
      <Text style={{ color: '#fff' }}>&copy; 2024 museum21.ru - Все права защищены.</Text>
      <br />
      <Text style={{ color: '#fff' }}>Свяжитесь с нами: museum@museum21.ru</Text>
      <br />
      <Text style={{ color: '#fff' }}>Иващенко Леонид</Text>
    </Footer>
  );
}

export default AppFooter;
