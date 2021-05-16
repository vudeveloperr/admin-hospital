import { Menu } from 'antd';
import {Link} from 'react-router-dom';

function SiderMenu(props) {
    return (
        <Menu
            defaultSelectedKeys={[window.location.pathname]}
            mode="inline"
        >
           <Menu.Item key='/'><Link to='/'>Trang Chủ</Link></Menu.Item>
           <Menu.Item key='/order'><Link to='/order'>Order Manager</Link></Menu.Item>
           <Menu.Item key='/product'><Link to='/product'>Người Dùng</Link></Menu.Item>
           <Menu.Item key='/import'><Link to='/import'>Import Manager</Link></Menu.Item>
           <Menu.Item key='/user-control'><Link to='/user-control'>Người Dùng</Link></Menu.Item>
           <Menu.Item key='/discounts'><Link to='/discount'>Vật Tư</Link></Menu.Item>
           <Menu.Item key='/statistic'><Link to='/statistic'>Statistic</Link></Menu.Item>
           <Menu.Item key='/vendors'><Link to='/vendors'>Tin Tức</Link></Menu.Item>
        </Menu>
    );
}

export default SiderMenu;