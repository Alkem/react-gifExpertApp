import axios from 'axios';
import PropTypes from 'prop-types'

//const ApiKey = '7rG1ZLqvhCH40j0WRksIgl61CdPzWCKy';
//const URL_RANDOM = "https://api.giphy.com/v1/gifs/random";
//const URL_SEARCH = 'https://api.giphy.com/v1/gifs/search';


     const GetRequest = async (url,params) => {
        try {
            const response = await axios.get(url,{params});
            return response;
        } catch (err) {
          return err;
        }
    }

    const PostRequest = async (url,params,data) => {
      try {
          const response = await axios.post(url,{params,data});
          return response;
      } catch (err) {
        return err;
      }
  }


  GetRequest.propTypes = {
    url:PropTypes.string.isRequired
  }

  PostRequest.propTypes = {
    url:PropTypes.string.isRequired
  }

export {
  GetRequest,
  PostRequest,
} 
