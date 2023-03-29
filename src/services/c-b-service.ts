import axios from 'axios'

export const openService = {
  async getSomeData() {
    // const response = await axios.get('https://example.com/api/some-data');
    const response = await axios.post('http://127.0.0.1:3100/getOpenCreateImage', {
      prompt:
        'A 3D cartoon japanese girl body is thin and wearing sports shorts, double ponytail and baby fat. Holding a guitar in her hand. White socks.'
    })
    return response.data
  }
}
