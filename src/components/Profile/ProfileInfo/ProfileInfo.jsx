import styles from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import photo from '../../../assets/images/myphoto.png';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div className={styles.descriptionBlock}>
                <img src={profile.photos.large || photo} alt='Photo'/>
                <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            </div>
        </div>
    );
}

export default ProfileInfo;
