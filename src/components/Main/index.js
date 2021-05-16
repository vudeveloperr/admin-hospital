import { Layout } from 'antd';
import { SiderMenu, CustomHeader } from '../';
import { Home, Product, Order, Import, Discounts, UserControl, Statistic, Vendors, Sale, Categoty} from '../../screens';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const { Header, Sider, Content } = Layout;

const ContentWrapper = styled.div`
    margin: 10px;
    padding: 16px;
    background-color: #FFFFFF;
`
const HeaderWrapper = styled.div`
    width:100%;
    height 100%;
`

const Logo = styled.div`
    margin: 20px 0px;
    display: flex;
    justify-content:center;
    font-weight: 800;
    font-size: 20px;
    text-transform: uppercase;
    color: #0d63b3;
`

function Main(props) {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider theme='light' width='15%' style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
                <Logo>Truyền Nhiễm</Logo>
                <SiderMenu />
            </Sider>
            <Layout>
                <Header>
                    <HeaderWrapper>
                        <CustomHeader />
                    </HeaderWrapper>
                </Header>
                <Content>
                    <ContentWrapper>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/product" component={Product} />
                        <Route exact path="/order" component={Order} />
                        <Route exact path="/import" component={Import} />
                        <Route exact path="/discount" component={Discounts} />
                        <Route exact path="/user-control" component={UserControl}/>
                        <Route exact path="/statistic" component={Statistic}/>
                        <Route exact path="/vendors" component={Vendors}/>
                    </ContentWrapper>
                </Content>
            </Layout>
        </Layout>);
}

export default Main;