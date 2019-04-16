export const attendId = ({url,id,follow_id})=>{
    console.log(follow_id)
    return dispatch =>{
        return fetch(`${url}?id=${id}&follow_id=${follow_id}`)
            .then(res=>res.json())
            .then(data=>data)
    }
}