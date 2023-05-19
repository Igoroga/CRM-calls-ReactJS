import avatar from '../../../forStyle/images/avatars.jpg';

const initialState = {
  date: {
    day: 'Среда',
    date: '13 окт'
  },
  avatar: avatar,
  name: 'ИП Сидорова Александра Михайловна',
}
export type InitialStateType = typeof initialState

const AT = {
  ACTION1:'header/ACTION1'
} as const
const actionCreators ={
  action1AC(){return {type:AT.ACTION1}}
}
type ActionsTypes = ReturnType<typeof actionCreators[keyof typeof actionCreators]>

export const headerReducer = ( state = initialState, action:ActionsTypes):InitialStateType =>{
  switch(action.type){
    case AT.ACTION1:
      return{...state}
    default:
      return state
  }
}