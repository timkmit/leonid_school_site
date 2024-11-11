import React from 'react';
import { Card } from 'antd';

const resources = [
  "Образовательные ресурсы Управление образования города Таганрога",
  "Летописи.ру",
  "Музеи России",
  "Сайт музей школы",
  "Газета школы №21 'Школьный экспресс'",
  "История Сталинградской битвы"
];

const EducationResources: React.FC = () => {
  return (
    <Card
      title="Образовательные ресурсы"
      bordered={false}
      style={{ height: '19rem', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', width: '20rem'}}
    >
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>{resource}</li>
        ))}
      </ul>
    </Card>
  );
};

export default EducationResources;
