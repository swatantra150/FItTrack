import axios from "axios";

const baseUrl = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/';
export const ApiKey = '17f9b0440emshb91978649a21256p11a264jsn820132d3e0df';

const apiCall = async (url: string, params: any) => {
  try {
   console.log('Request URL:', url); // Log the URL
    const options = {
      method: 'GET',
      url,
      params,
      headers: {
        'x-rapidapi-key': ApiKey,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (err) {
    console.log('error: ', err.message);
    console.log('error response:', err.response.data); // Log detailed error response
  }
}

export const FetchExercisesBodyParts = async (bodyPart: string) => {
  const url = baseUrl + bodyPart;
  const data = await apiCall(url, {});
  return data;
}
