const initialState = {
  date: '',
  callsList: [] as [] | any,
  employeesList: [] as [] | any,
}
export type InitialStateType = typeof initialState

export const AT = {
  GET_CALLS:'calls/GET_CALLS',
  ADD_CALLS:'calls/ADD_CALLS',
  GET_EMPLOYEES:'calls/GET_EMPLOYEES',
  ADD_EMPLOYEES:'calls/ADD_EMPLOYEES',
} as const
export const actionCreators ={
  addCallsAC(callsList:any){return {type:AT.ADD_CALLS, payload:callsList}},
  addEmployeesAC(employeesList:any){return {type:AT.ADD_EMPLOYEES, payload:employeesList}},
  getCallsAsyncAC(filters:{type:string, source:string}){return {type:AT.GET_CALLS, payload:{...filters}}},
  getEmployeesAsyncAC(){return {type:AT.GET_EMPLOYEES }},
}
export type getCallsAsyncActionType = ReturnType<typeof actionCreators.getCallsAsyncAC>
export type getEmployeesAsyncActionType =ReturnType<typeof actionCreators.getEmployeesAsyncAC>
type ActionsTypes = ReturnType<typeof actionCreators[keyof typeof actionCreators]>

export const callsReducer = ( state = initialState, action:ActionsTypes):InitialStateType =>{
  switch(action.type){
    case AT.ADD_CALLS:
      console.log(action.payload)
      return {...state, callsList:action.payload}
    case AT.ADD_EMPLOYEES:
      console.log(action.payload)
      return {...state, employeesList:action.payload}
    default:
      return state
  }
}