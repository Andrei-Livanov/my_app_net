import React, {Component, FC, lazy, Suspense} from 'react'
import './App.css'
import 'antd/dist/antd.css'
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import {connect, Provider} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader'
import {withRouter} from './hoc/withRoute'
import store, {AppStateType} from './redux/redux-store'
import {Breadcrumb, Layout, Menu} from 'antd'
import {LaptopOutlined, NotificationOutlined, UserOutlined} from '@ant-design/icons'
import {Header} from './components/Header/Header'

const {SubMenu} = Menu
const {Content, Footer, Sider} = Layout

const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))
const ChatPage = lazy(()=> import('./pages/Chat/ChatPage'))
const News = lazy(() => import('./components/News/News'))
const Music = lazy(() => import('./components/Music/Music'))
const Settings = lazy(() => import('./components/Settings/Settings'))
const LoginPage = lazy(() => import('./components/Login/Login'))

type MapPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

class App extends Component<MapPropsType & DispatchPropsType> {
    catchAllUnhandledErrors = () => {
        alert('Some error occurred')
    }

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    componentWillUnmount() {
        window.removeEventListener('unhandledrejection', this.catchAllUnhandledErrors)
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <Layout>
                <Header/>
                <Content style={{padding: '0 50px'}}>
                    <Breadcrumb style={{margin: '16px 0'}}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Layout className="site-layout-background" style={{padding: '24px 0'}}>
                        <Sider className="site-layout-background" width={200}>
                            <Menu
                                mode="inline"
                                /*defaultSelectedKeys={['7']}*/
                                /*defaultOpenKeys={['sub1']}*/
                                style={{height: '100%'}}
                            >
                                <SubMenu key="sub1" icon={<UserOutlined/>} title="My profile">
                                    <Menu.Item key="1"><Link to='/profile'>Profile</Link></Menu.Item>
                                    <Menu.Item key="2"><Link to='/dialogs'>Massages</Link></Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<LaptopOutlined/>} title="Developers">
                                    <Menu.Item key="5"><Link to='/developers'>Developers</Link></Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" icon={<NotificationOutlined/>} title="Chat">
                                    <Menu.Item key="9"><Link to='/chat'>Chat</Link></Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Content style={{padding: '0 24px', minHeight: 280}}>
                            <Suspense fallback={<div><Preloader/></div>}>
                                <Routes>
                                    <Route path='/' element={<ProfileContainer/>}/>
                                    <Route path='/profile' element={<ProfileContainer/>}>
                                        <Route path=':userId' element={<ProfileContainer/>}/>
                                    </Route>
                                    <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                                    <Route path='/developers' element={<UsersContainer pageTitle={'Samurai'}/>}/>
                                    <Route path='/chat' element={<ChatPage/>}/>
                                    <Route path='/news' element={<News/>}/>
                                    <Route path='/music' element={<Music/>}/>
                                    <Route path='/settings' element={<Settings/>}/>
                                    <Route path='/login' element={<LoginPage/>}/>
                                    <Route path='/my_app_net' element={<ProfileContainer/>}/>
                                    <Route path='*' element={<div>404 NOT FOUND</div>}/>
                                </Routes>
                            </Suspense>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>Social Network ??2022 Created by IT-K</Footer>
            </Layout>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})

const AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App)

const SamuraiJSApp: FC = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SamuraiJSApp
