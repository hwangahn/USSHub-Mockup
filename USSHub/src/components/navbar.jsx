import { Menu, Affix, Space } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { UserOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import { AuthContext } from '../contexts/authContext';

export default function NavBar() {
    let navigate = useNavigate();

    let { setLoggedIn, getProfile, clearProfile } = useContext(AuthContext);

    let handleLogout = () => {
        setLoggedIn(false);
        clearProfile();
        navigate('/');
    }

    return (
        <Affix offsetTop={10}>
            <div>
                <Menu mode="horizontal" defaultSelectedKeys={[]} style={{width: "100%", display: 'flex'}}>
                    <Menu.Item key={"home"}>
                        <Link to={`/`}>
                            <img src="usshub-no-text.png" style={{ width: "50px", height: "70px" }} />
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={"News"}>
                        <Link to={`/news`}>
                            <h2>Bảng tin</h2>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={"Syllabus"}>
                        <Link to={`/syllabus`}>
                            <h2>Đề cương</h2>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={"Books"}>
                        <Link to={`/book`}>
                            <h2>Siêu thị sách</h2>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={"Chat"}>
                        <Link to={`/chat`}>
                            <h2>Trò chuyện</h2>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={"Games"}>
                        <Link to={`/game`}>
                            <h2>Trò chơi</h2>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={"Connect"}>
                        <Link to={`/connect`}>
                            <h2>Kết nối</h2>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={"Report"}>
                        <Link to={`/report`}>
                            <h2>Phản hồi</h2>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key={"User"} disabled={true} style={{ marginLeft: 'auto' }}>
                        <h2>Xin chào, <UserOutlined />{getProfile()}!</h2>
                    </Menu.Item>
                    <Menu.Item key={"Logout"} onClick={handleLogout}>
                        <h2 style={{color: "red"}}>Đăng xuất</h2>
                    </Menu.Item>
                </Menu>
            </div>
        </ Affix>
    );
}