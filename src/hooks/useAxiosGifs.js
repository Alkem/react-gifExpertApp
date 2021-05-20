import {useState,useEffect} from 'react'
import {GetRequest} from '../helpers/Request';

const URL_SEARCH = 'https://api.giphy.com/v1/gifs/search';
const ApiKey = '7rG1ZLqvhCH40j0WRksIgl61CdPzWCKy';

export const useAxiosGifs = (category) => {
   const [state, setState] = useState({
    data:[],
    loading:true
   });


   useEffect(() =>{

    
    const params = {
        api_key: ApiKey,
        q:category,
        limit: 10,
        
    };

    GetRequest(URL_SEARCH,params)
    .then(response => {
          const images = response.data.data.map(img =>{
                return {
                    id : img.id,
                    title : img.title,
                    url: img.images?.downsized_medium.url
                }
            });
            setState({
                data: images,
                loading: false,
            });
        }).catch(err => console.log(err))
},[category])



   return state;
}




