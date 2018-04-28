import React, {Component} from 'react'
import { Row, Col, Icon} from 'antd';
import './header.less';



class Header extends React.Component{
    constructor (props) {
        super(props)
        this.state ={
            imgUrl: '',
            headerListData: [],
            contIconList: [
                    {icon: 'user', title: '用户'},
                    {icon: 'home', title: '系统首页'},
                    {icon: 'reload', title: '刷新'},
                    {icon: 'delete', title: '清除缓存'},
                    {icon: 'message', title: '信息'},
                    {icon: 'setting', title: '个人设置'},
                ]
        }

    }
    render () {
        return(
            <div className="my_header">
                <Row>
                    <Col xs={24} sm={5} md={8} lg={8} xl={12}>
                        <div className="header-l-info">
                            <div className="logo">
                                <img src={this.state.imgUrl} alt=""/>
                            </div>
                            <p className="logo-content"></p>
                        </div>

                    </Col>
                    <Col xs={0} sm={19} md={16} lg={16} xl={12}>
                        <div className="nav-menu">
                            <ul>
                                {
                                    this.state.contIconList.map((item, index) => {
                                        return <li key={index}>
                                                    <a href="javascript:;">
                                                        <Icon type={item.icon} />
                                                        <p>{item.title}</p>
                                                    </a>
                                                </li>
                                    })
                                }
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }

}

export default Header