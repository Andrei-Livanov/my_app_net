import React, {ComponentType} from 'react'
import {useParams} from 'react-router-dom'

export const withRouter = (Children: ComponentType<any>) => {
    return (props: any) => {
        const match = {params: useParams()}
        return <Children {...props} match={match}/>
    }
}
