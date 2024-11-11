import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

const { Header: AntHeader } = Layout;

const StyledHeader = styled(AntHeader)<{ scrolled: boolean }>`
  position: fixed;
  z-index: 1;
  width: 100%;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ scrolled }) => (scrolled ? 'rgba(0, 110, 255, 0.7)' : 'transparent')};
  box-shadow: ${({ scrolled }) =>
    scrolled ? '0 2px 10px rgba(0, 110, 255, 0.7)' : 'none'};
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  color: ${({ scrolled }) => (scrolled ? 'white' : 'black')};
`;


const Logo = styled.div`
  color: inherit;
  font-size: 24px;
  font-weight: bold;
  margin-left: 20px;
`;

const StyledMenu = styled(Menu)<{ scrolled: boolean }>`
  background-color: transparent;
  transition: background-color 0.3s ease;
  border: none;

  .ant-menu-item {
    color: ${({ scrolled }) => (scrolled ? 'white' : 'black')};
    transition: color 0.3s ease, background-color 0.3s ease;
  }

  .ant-menu-item-selected {
    color: black !important;
    background-color: rgba(0, 0, 0, 0.15) !important;
  }

  .ant-menu-item:hover {
    color: ${({ scrolled }) => (scrolled ? 'white' : 'black')};
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const AppHeader: React.FC = () => {
  const [isDrawerVisible, setDrawerVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Главная', key: '1' },
    { label: 'Новости', key: '2' },
    { label: 'Каталог статей', key: '3' },
    { label: 'Фотоальбомы', key: '4' },
    { label: 'Наши ветераны', key: '5' },
  ];

  return (
    <StyledHeader scrolled={scrolled}>
      <Logo>Мой Музей</Logo>

      {!isMobile && (
        <StyledMenu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          scrolled={scrolled}
          items={menuItems}
          style={{ flex: 1, justifyContent: 'center', display: 'flex' }}
        />
      )}

      {isMobile && (
        <Button
          type="text"
          icon={<MenuOutlined style={{ color: '#006eff', fontSize: '24px' }} />}
          onClick={showDrawer}
          style={{ marginRight: '20px' }}
        />
      )}

      <Drawer
        title="Меню"
        placement="right"
        closable={true}
        onClose={closeDrawer}
        open={isDrawerVisible}
        styles={{ body: { padding: 0 } }}
      >
        <Menu mode="vertical" items={menuItems} onClick={closeDrawer} />
      </Drawer>
    </StyledHeader>
  );
};

export default AppHeader;
