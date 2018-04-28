import React, {Component} from 'react';
import { Layout, Menu, Icon,Breadcrumb} from 'antd';
import './main.less'
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

class Main extends React.Component{
    constructor (props) {
        super(props)
        this.state = {
            collapsed: false,
        }
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render () {
        return(
            <div className="my_main">
                <Layout>
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                    >
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <SubMenu
                                key="sub1"
                                title={<span><Icon type="database" /><span>商品管理</span></span>}
                            >
                                <Menu.Item key="1">home</Menu.Item>
                                <Menu.Item key="2">Bill</Menu.Item>
                                <Menu.Item key="3">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub2"
                                title={<span><Icon type="trademark" /><span>商家管理</span></span>}
                            >
                                <Menu.Item key="4">Tom</Menu.Item>
                                <Menu.Item key="5">Bill</Menu.Item>
                                <Menu.Item key="6">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub3"
                                title={<span><Icon type="calculator" /><span>订单管理</span></span>}
                            >
                                <Menu.Item key="7">Tom</Menu.Item>
                                <Menu.Item key="8">Bill</Menu.Item>
                                <Menu.Item key="9">Alex</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub4"
                                title={<span><Icon type="team" /><span>广告管理</span></span>}
                            >
                                <Menu.Item key="10">Team 1</Menu.Item>
                                <Menu.Item key="11">Team 2</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub5"
                                title={<span><Icon type="team" /><span>会员管理</span></span>}
                            >
                                <Menu.Item key="13">Team 1</Menu.Item>
                                <Menu.Item key="14">Team 2</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub6"
                                title={<span><Icon type="team" /><span>权限管理</span></span>}
                            >
                                <Menu.Item key="15">Team 1</Menu.Item>
                                <Menu.Item key="16">Team 2</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub7"
                                title={<span><Icon type="team" /><span>员工管理</span></span>}
                            >
                                <Menu.Item key="17">Team 1</Menu.Item>
                                <Menu.Item key="18">Team 2</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub8"
                                title={<span><Icon type="team" /><span>员工考勤</span></span>}
                            >
                                <Menu.Item key="19">Team 1</Menu.Item>
                                <Menu.Item key="20">Team 2</Menu.Item>
                            </SubMenu>
                            <SubMenu
                                key="sub9"
                                title={<span><Icon type="team" /><span>报表统计</span></span>}
                            >
                                <Menu.Item key="21">Team 1</Menu.Item>
                                <Menu.Item key="22">Team 2</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Header style={{ background: '#fff',borderBottom: '1px solid #D6D6D6'}}>
                            <Icon type="environment-o" style={{fontSize: '24px',float:'left'}}></Icon>
                            <Breadcrumb style={{float:'left'}}>
                                <Breadcrumb.Item>当前位置:</Breadcrumb.Item>
                                <Breadcrumb.Item><a href="">home</a></Breadcrumb.Item>
                                <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
                                <Breadcrumb.Item>An Application</Breadcrumb.Item>
                            </Breadcrumb>
                            <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                                style={{float: 'right', fontSize: '24px'}}
                            />

                        </Header>
                        <Content style={{background: '#fff'}}>

                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }

}

export default Main