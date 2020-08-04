import axios from 'axios'

const baseUrl = 'https://fullstack-web-course.ew.r.appspot.com/tweet'


export function postTweet(tweet) {
  try {
    return axios.post(baseUrl, tweet);
  }
  catch(error) {
    return error;
  }
}

export function getTweets() {
  try {
    return axios.get(baseUrl);
  }
  catch(error) {
    return error;
  }
}