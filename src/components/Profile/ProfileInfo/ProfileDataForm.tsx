import {FC} from 'react'
import styles from './ProfileInfo.module.css'
import {createField, GetStringKeys, Input, Textarea} from '../../common/FormsControls/FormsControls'
import {InjectedFormProps, reduxForm} from 'redux-form'
import style from '../../common/FormsControls/FormsControls.module.css'
import {ProfileType} from '../../../types/types'

type PropsType = {
    profile: ProfileType
}

type ProfileTypeKeys = GetStringKeys<ProfileType>

const ProfileDataForm: FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = (
    {handleSubmit, profile, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {error && <div className={style.formSummaryError}>{error}</div>}
            </div>
            <div className={styles.fullName}>
                <b>Full name</b>:
                {createField<ProfileTypeKeys>('Full name', 'fullName', [], Input)}
            </div>
            <div>
                <b>Looking for a job</b>:
                {createField<ProfileTypeKeys>(
                    '', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>
            <div>
                <b>My professional skills</b>:
                {createField<ProfileTypeKeys>(
                    'My professional skills', 'lookingForAJobDescription', [], Textarea)}
            </div>
            <div>
                <b>About me</b>:
                {createField<ProfileTypeKeys>('About me', 'aboutMe', [], Textarea)}
            </div>
            <div>
                <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return (
                    <div key={key} className={styles.contact}>
                        {/* todo: create some solution for embedded objects */}
                        <b>{key}:{createField(key, 'contacts.' + key, [], Input)}</b>
                    </div>
                )
            })}
            </div>
            <div className={styles.fullName}>
                <button>Save</button>
            </div>
        </form>
    )
}

const ProfileDataFormReduxForm = reduxForm<ProfileType, PropsType>(
    {form: 'edit-profile', destroyOnUnmount: false})(ProfileDataForm)

export default ProfileDataFormReduxForm
