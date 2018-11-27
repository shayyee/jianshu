import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import * as actionCreators from '../../store/modules/header/actionCreator';
import { 
    HeaderWrapper, 
    Logo, 
    Nav, 
    NavItem,
    SearchWrapper,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    NavSrearch,
    Addition,
    Button
} from './style';
class Header extends Component {
    render() {
        const { focused, handleInputFocus, handleInputBlur } = this.props;
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <SearchWrapper>
                        <CSSTransition 
                            in={focused}
                            timeout={500}
                            classNames="slide"
                        >
                            <NavSrearch 
                                className={focused ? 'focused':''}
                                onFocus={handleInputFocus}
                                onBlur={handleInputBlur}
                            ></NavSrearch>
                        </CSSTransition>
                        <i 
                            className={focused ? 'focused iconfont':'iconfont'}
                        >&#xe637;</i>
                        <SearchInfo>
                            <SearchInfoTitle>热门搜索
                                <SearchInfoSwitch>换一批</SearchInfoSwitch>
                            </SearchInfoTitle>
                            <SearchInfoList>
                                <SearchInfoItem>教育</SearchInfoItem>
                                <SearchInfoItem>图书</SearchInfoItem>
                                <SearchInfoItem>教育</SearchInfoItem>
                                <SearchInfoItem>教育</SearchInfoItem>
                                <SearchInfoItem>教育</SearchInfoItem>
                                <SearchInfoItem>教育</SearchInfoItem>
                                <SearchInfoItem>教育</SearchInfoItem>
                                <SearchInfoItem>教育</SearchInfoItem>
                                <SearchInfoItem>教育</SearchInfoItem>
                            </SearchInfoList>
                        </SearchInfo>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writting">
                        <i className="iconfont icon-write">&#xe62d;</i>写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header','focused'])
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
