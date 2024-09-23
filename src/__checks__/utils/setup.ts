import axios from 'axios';

export async function getToken() {
  console.log('Fetching session token from auth server');
  try {
    const { data } = await axios.post('https://dev-4eqboz3bezyl3bwn.us.auth0.com/oauth/token', {
      client_id: 'kyMHQVuw1NHqpmMwdL4O1n52QSx8TcBf',
      client_secret: 'IeZVnBmz1eYpP9XfftUbNmr9SEWEsLf3piSTuozEqo3SSmNnR7Qjy2ZlAPGTfVYa',
      audience: 'wattsandassociates.com/api',
      grant_type: 'client_credentials',
    });
    console.log('this ran');
    console.log(data.access_token);
    return data.access_token;
  } catch (error) {
    console.error('Error fetching token:', error);
    throw error;
  }
}

async function setup () {
  const token = await getToken()
  request.headers['Authorization'] = 'Bearer ' + token
}

await setup()