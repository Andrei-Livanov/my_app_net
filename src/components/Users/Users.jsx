import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props}) => {
    return (
        <div>
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize}
                       currentPage={currentPage} onPageChanged={onPageChanged}/>
            <div>
                {
                    users.map(u => <User key={u.id}
                                         user={u}
                                         followingInProgress={props.followingInProgress}
                                         unfollow={props.unfollow}
                                         follow={props.follow}/>
                    )
                }
            </div>
        </div>
    );
}

export default Users;
