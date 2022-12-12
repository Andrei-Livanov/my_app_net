import {FC} from 'react'
import {InjectedFormProps, reduxForm} from 'redux-form'
import {createField, GetStringKeys, Input} from '../common/FormsControls/FormsControls'
import {required} from '../../utils/validators/validators'
import {connect, useDispatch, useSelector} from 'react-redux'
import {login, logout} from '../../redux/auth-reducer'
import {Navigate} from 'react-router-dom'
import styles from '../common/FormsControls/FormsControls.module.css'
import {AppStateType} from '../../redux/redux-store'

type LoginFormOwnProps = {
    captchaUrl: string | null
}

const LoginForm: FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> =
    ({handleSubmit, error, captchaUrl}) => {
        return (
            <form onSubmit={handleSubmit}>
                {createField<LoginFormValuesTypeKeys>('Email', 'email', [required], Input)}
                {createField<LoginFormValuesTypeKeys>(
                    'Password', 'password', [required], Input, {type: 'password'})}
                {createField<LoginFormValuesTypeKeys>(
                    null, 'rememberMe', [], Input, {type: 'checkbox'}, 'remember me')}
                {captchaUrl && <img src={captchaUrl} alt='captcha'/>}
                {captchaUrl && createField<LoginFormValuesTypeKeys>(
                    'Symbols from image', 'captcha', [required], Input, {})}
                <div>
                    {error && <div className={styles.formSummaryError}>{error}</div>}
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        )
    }

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({form: 'login'})(LoginForm)


type LoginFormValuesType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

type LoginFormValuesTypeKeys = GetStringKeys<LoginFormValuesType>

const Login: FC = () => {
    const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl)
    const isAuth = useSelector((state: AppStateType) => state.auth.isAuth)
    const dispatch = useDispatch()

    const onSubmit = (formData: LoginFormValuesType) => {
        dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) {
        return <Navigate to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}/>
        </div>
    )
}

export default Login
