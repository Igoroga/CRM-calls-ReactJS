import axios from "axios";
import { getCallsAsyncActionType } from "../store/reducers/callCrm/callsReducer";

const baseUrl = 'https://api.skilla.ru/mango/getList'
const apiSkila = 'https://api.skilla.ru/mango'

export const callsAxios = {
  getCalls(action:getCallsAsyncActionType){
    const { type, source } = action.payload
    const headers = {
      'Authorization':'Bearer testtoken'
    }
    const params = {
      limit:200,
      from_type:[type?type:null],
      sources:[source?source:null],
    }
    return(
      axios.post(baseUrl,null, {headers, params})
      .then(res=>res.data.results)
      .catch(error=>console.log(error))
    )
  },
  getEmployees(){
    const headers = {
      'Authorization':'Bearer testtoken'
    }
    const params = {}
    return(
      axios.post('https://api.skilla.ru/partnership/getPersonsList',null, {headers})
      .then(res=>res.data.results)
      .catch(error=>console.log(error))
    )
  },
  async getRecord(id?:string, partnershipId?:string) {
  const headers = {
    'Authorization': `Bearer testtoken`,
    'Content-type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
    "Content-Transfer-Encoding": "binary",
    "Content-Disposition": 'filename="record.mp3"'
  };
  const url = `${apiSkila}/getRecord?record=${id}&partnership_id=${partnershipId}`;

  try {
    const response = await axios.post(url, null, { headers });
    const textEncoder = new TextEncoder();
    const encodedData = textEncoder.encode(response.data);
    const blob = new Blob([encodedData], { type: 'audio/mpeg' });
    console.log(response);
    console.log(blob);
    const audio = URL.createObjectURL(blob);
    console.log(audio);
    return audio;
  } catch (error) {
    console.log("Произошла ошибка");
    return null;
  }
},
}


// const blob = new Blob([response.data], { type: 'audio/mpeg' }); // создание объекта Blob из массива байтов с установкой типа
// const url = URL.createObjectURL(blob); // создание URL для воспроизведения файла
// return url;


// async getRecord(id?:string, partnershipId?:string) {
//   const headers = {
//     'Authorization': `Bearer testtoken`,
//     'Content-type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
// "Content-Transfer-Encoding": "binary",
// "Content-Disposition": 'filename="record.mp3"'
//   };
//   const url = `${apiSkila}/getRecord?record=${id}&partnership_id=${partnershipId}`;

//   try {
//     const response = await axios.post(url, null, {headers});
//     return { type: response.headers['content-type'], data: response.data };
//   } catch (error) {
//     console.log("Сока ошибка");
//     return null;
//   }
// },