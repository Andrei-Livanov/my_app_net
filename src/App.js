import React, {Component, Suspense, lazy} from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom'
import HeaderContainer from './components/Header/HeaderContainer'
import {connect, Provider} from 'react-redux'
import {compose} from 'redux'
import {initializeApp} from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader'
import {withRouter} from './hoc/withRoute'
import store from './redux/redux-store'

const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))
const News = lazy(() => import('./components/News/News'))
const Music = lazy(() => import('./components/Music/Music'))
const Settings = lazy(() => import('./components/Settings/Settings'))
const LoginPage = lazy(() => import('./components/Login/Login'))

class App extends Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<div><Preloader/></div>}>
                        <Routes>
                            <Route path='/profile/:userId' element={<ProfileContainer/>}/>
                            <Route path='/profile' element={<ProfileContainer/>}/>
                            <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                            <Route path='/users' element={<UsersContainer pageTitle={'Samurai'}/>}/>
                            <Route path='/news' element={<News/>}/>
                            <Route path='/music' element={<Music/>}/>
                            <Route path='/settings' element={<Settings/>}/>
                            <Route path='/login' element={<LoginPage/>}/>
                            <Route path='/' element={<Navigate to='/profile'/>}/>
                        </Routes>
                    </Suspense>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))
(App)

const SamuraiJSApp = () => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}

export default SamuraiJSApp
