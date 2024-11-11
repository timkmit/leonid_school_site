import React, { useState } from 'react';
import { Card, Button, Space } from 'antd';

const SurveyCard: React.FC = () => {
  const [rating, setRating] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleRating = (value: string) => {
    setRating(value);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <Card
      bordered={false}
      style={{
        height: '19rem',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        width: '20rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      {
        submitted ?
        '' :
        <p style={{ marginBottom: '0.1rem', fontWeight: 'bold' }}>
          Оцените наш сайт
        </p>
      }
        
      {!submitted ? (
        <>
          <div style={{ marginBottom: '0.1rem' }}>
            <p style={{ marginBottom: '0.3rem' }}>Пожалуйста, выберите вашу оценку:</p>
          </div>
          <Space direction="vertical" size="middle">
            <Button type={rating === 'Отлично' ? 'primary' : 'default'} onClick={() => handleRating('Отлично')}>
              Отлично
            </Button>
            <Button type={rating === 'Хорошо' ? 'primary' : 'default'} onClick={() => handleRating('Хорошо')}>
              Хорошо
            </Button>
            <Button type={rating === 'Неплохо' ? 'primary' : 'default'} onClick={() => handleRating('Неплохо')}>
              Неплохо
            </Button>
            <Button type={rating === 'Плохо' ? 'primary' : 'default'} onClick={() => handleRating('Плохо')}>
              Плохо
            </Button>
            <Button
              type="primary"
              onClick={handleSubmit}
              disabled={!rating}
            >
              Отправить
            </Button>
          </Space>
        </>
      ) : (
        <div>
          <p>Спасибо за вашу оценку!</p>
          <p>Вы выбрали: {rating}</p>
        </div>
      )}
    </Card>
  );
};

export default SurveyCard;
