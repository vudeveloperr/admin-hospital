import { Avatar, Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';


const AvatarWrapper = styled.div`
    width: fit-content;
    float:right;
`


function CustomHeader(props) {
    const history = useHistory();

    const Logout = () => {
        history.push("/login");
    }

    const menu = (
        <Menu>
            <Menu.Item
                onClick={Logout}
            >
                Logout
            </Menu.Item>
        </Menu>
    )
    

    return (
        <Dropdown
            overlay={menu}
            trigger={['click']}
        >
            <AvatarWrapper>
                <Avatar
                    icon={<UserOutlined />}
                    size="large"
                />
            </AvatarWrapper>
        </Dropdown>
    );
}

export default CustomHeader;