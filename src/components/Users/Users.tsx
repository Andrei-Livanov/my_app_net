import React, {FC, useEffect} from 'react'
import Paginator from '../common/Paginator/Paginator'
import User from './User'
import {UsersSearchForm} from './UsersSearchForm'
import {FilterType, follow, requestUsers, unfollow} from '../../redux/users-reducer'
import {useDispatch, useSelector} from 'react-redux'
import {
    getCurrentPage, getFollowingInProgress, getPageSize, getTotalUsersCount, getUsers, getUsersFilter
} from '../../redux/users-selectors'
import {useLocation, useNavigate} from 'react-router-dom'

type QueryParamsType = { term?: string; friend?: string; page?: string }

export const Users: FC = () => {
    const users = useSelector(getUsers)
    const totalUsersCount = useSelector(getTotalUsersCount)
    const currentPage = useSelector(getCurrentPage)
    const pageSize = useSelector(getPageSize)
    const filter = useSelector(getUsersFilter)

    const followingInProgress = useSelector(getFollowingInProgress)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const location = useLocation()

    useEffect(() => {
        const search = new URLSearchParams(location.search)

        let actualPage = currentPage
        let actualFilter = filter

        if (search.get('page')) {
            actualPage = Number(search.get('page'))
        }

        if (search.get('term')) {
            actualFilter = {...actualFilter, term: search.get('term') as string}
        }

        if (search.get('friend')) {
            actualFilter = {
                ...actualFilter,
                friend: search.get('friend') === 'null' ? null : search.get('friend') === 'true'
            }
        }

        dispatch(requestUsers(actualPage, pageSize, actualFilter))
    }, [])

    useEffect(() => {
        const query: QueryParamsType = {}

        if (filter.term) {
            query.term = filter.term
        }

        if (filter.friend !== null) {
            query.friend = String(filter.friend)
        }

        if (currentPage !== 1) {
            query.page = String(currentPage)
        }

        navigate({
            pathname: '/developers',
            search: new URLSearchParams(query).toString()
        })
    }, [filter, currentPage])

    const onPageChanged = (pageNumber: number) => {
        dispatch(requestUsers(pageNumber, pageSize, filter))
    }

    const onFilterChanged = (filter: FilterType) => {
        dispatch(requestUsers(1, pageSize, filter))
    }

    const _follow = (userId: number) => {
        dispatch(follow(userId))
    }

    const _unfollow = (userId: number) => {
        dispatch(unfollow(userId))
    }

    return (
        <div>
            <UsersSearchForm onFilterChanged={onFilterChanged}/>
            <Paginator totalItemsCount={totalUsersCount} pageSize={pageSize}
                       currentPage={currentPage} onPageChanged={onPageChanged}/>
            <div>
                {
                    users.map(u => <User key={u.id}
                                         user={u}
                                         followingInProgress={followingInProgress}
                                         follow={_follow}
                                         unfollow={_unfollow}/>
                    )
                }
            </div>
        </div>
    )
}
