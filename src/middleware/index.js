import {
    getDestinationRequest,
    getDestinationSuccess
} from '../actions';

export const getDestination =  () => {
    return async(dispatch) => {
        dispatch(getDestinationRequest())
        axiosInstance.get(`/site/${ siteId }/posts/${ slug }`,{ headers: { edit: true } }).then((response) => {
            dispatch(getDestinationSuccess(response.data))
        }).catch(() => {
            history.push(ROUTES.BLOGS)
        })
    }
}
