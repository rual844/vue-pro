import * as moment from 'moment'

const evaCreator = {
  getDate: function (yourIncantation: string): string {
    const dateStr = new Date()
    const btoaStr = (dateStr.valueOf().toString().slice(-6) + yourIncantation);
    const newStr = btoaStr.split('').map((str)=>{
        return str.charCodeAt(0);
    }).sort(()=>Math.random()-0.5).join('');
    return newStr;
    // return btoa(newStr);
  }
}
export default evaCreator
