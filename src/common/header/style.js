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
    &.focused {
        background: #999;
        color: #fff;
    }
}
`
export const SearchInfo = styled.div`
position:absolute;
left: 0;
top: 56px;
width: 250px;
padding: 0 20px;
box-shadow: 0 0 8px rgba(0, 0, 0, .2);
box-sizing: border-box;
`
export const SearchInfoTitle = styled.div`
margin: 20px 0 15px 0;
line-height: 20px;
font-size: 14px;
color: #969696;
`
export const SearchInfoSwitch = styled.span`
 float: right;
 font-size: 13px;
`
export const SearchInfoList = styled.div`
overflow: hidden;
`
export const SearchInfoItem = styled.a`
display: block;
float: left;
padding: 0 5px;
line-height: 20px;
font-size: 12px;
border: 1px solid #ddd;
color: #787878;
border-radius: 3px;
margin-right: 10px;
margin-bottom: 10px; 
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
padding: 0 30px 0 20px;
background: #eee;
box-sizing: border-box;
font-size: 14px;
color: #666;
&::placeholder {
    color: #999;
}
&.focused {
    width: 240px;
}
&.slide-enter {
    width: 160px;
    transition: all .5s ease;
}
&.slide-enter-active{
    width: 240px;
}
&.slide-exit {
    width: 240px;
    transition: all .2s ease;
}
&.slide-exit-active{
    width: 160px;
}
`
export const Addition = styled.div`
position: absolute;
right: 0;
top:0;
height: 56px;
.icon-write {
    margin-right: 3px;
    vertical-align: baseline;
}
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