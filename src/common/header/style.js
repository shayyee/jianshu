import styled from 'styled-components';
import logoImg from '../../statics/images/logo.png';

export const HeaderWrapper = styled.div`
position: relative;
height: 58px;
border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a.attrs({
    href: "/"
})`
height: 58px;
position: absolute;
display: block;
top:0;
left:0;
width: 100px;
background: url(${logoImg});
background-size: contain;
`

export const Nav = styled.div`
width: 960px;
height: 100%;
margin: 0 auto;
padding-right: 70px;
box-sizing: border-box;
`

export const NavItem = styled.div`
line-height:56px;
padding:0 15px;
font-size: 17px;
color: #333;
&.left{
    float: left;
}
&.right{
    float: right;
    color: #969696;
}
&.active{
    color: #ea6f5a;
}
`
export const SearchWrapper = styled.div`
float: left;
position: relative;
.iconfont{
    position: absolute;
    right: 0;
    bottom: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
}
`

export const NavSrearch = styled.input.attrs({
    placeholder: "搜索"
})`
width: 160px;
height: 38px;
border: none;
outline: none;
border-radius: 19px;
margin: 9px 0 0 20px;
padding: 0 20px;
background: #eee;
box-sizing: border-box;
font-size: 14px;
&::placeholder {
    color: #999;
}
`
export const Addition = styled.div`
position: absolute;
right: 0;
top:0;
height: 56px;
`

export const Button = styled.div`
float: right;
line-height: 38px;
border-radius: 19px;
margin: 9px 20px 0 0;
padding: 0 20px;
border: 1px solid #ec6149;
font-size: 15px;
&.reg{
    color: #ea6f5a;
}
&.writting{
    color: #fff;
    background-color: #ea6f5a;
}
`