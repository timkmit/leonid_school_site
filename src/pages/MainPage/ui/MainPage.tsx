import { lazy, memo } from "react";
import { Layout } from "antd";
import AppHeader from "@/widgets/Header/ui/Header";
import Banner from "@/widgets/Banner/ui/Banner";
import Gallery from "@/widgets/Gallery/ui/Gallery";
import AppFooter from "@/widgets/Footer/ui/Footer";
import { Page } from "@/widgets/Page";
const EducationResources = lazy(() => import('@/widgets/EducationResources/ui/EducationResources'));
const CalendarComponent = lazy(() => import('@/widgets/Calendar/ui/Calendar'));
const SurveyCard = lazy(() => import('@/widgets/SurveyCard/ui/SurveyCard'));
import styled from 'styled-components';

const { Content } = Layout;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 769px) {
    flex-direction: row;
  }
`;

const BackgroundLayout = styled(Layout)`
  background-image: url('/img/bg.jpg');  
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  min-height: 100vh; 
`;

const MainPage = memo(() => {
  return (
    <Page>
      <BackgroundLayout>
        <AppHeader />
        <Content style={{ padding: '0 1rem', marginTop: 64 }}>
          <Banner />
          <Gallery />
        </Content>
        <Content style={{ padding: '0 0 1rem', marginTop: '2rem', alignItems: 'center' }}>
          <ContentWrapper>
            <EducationResources />
            <CalendarComponent />
            <SurveyCard />
          </ContentWrapper>
        </Content>
        <AppFooter />
      </BackgroundLayout>
    </Page>
  );
});

export default MainPage;
