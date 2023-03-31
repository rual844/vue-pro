import axios from 'axios'

export const openService = {
  async getSomeData(promptStr: string) {
    // const response = await axios.get('https://example.com/api/some-data');
    const response = await axios.post('http://127.0.0.1:3100/getOpenCreateImage', {
      prompt:
      promptStr
    })
    return response.data;
  },

  async getNextPlace(message: Object[]):Promise<string> {

    const response = await axios.post('http://127.0.0.1:3100/getOpenCreateChatCompletion', {message})
    return response.data;
  }
}
