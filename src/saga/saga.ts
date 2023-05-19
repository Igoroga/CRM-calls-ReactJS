import { call, put, takeEvery } from 'redux-saga/effects'
import { AT, actionCreators, getCallsAsyncActionType, getEmployeesAsyncActionType } from '../store/reducers/callCrm/callsReducer'
import { callsAxios } from '../api/api'

function* GetCallsWorker(action:getCallsAsyncActionType):Generator{
  yield console.log('Запускаю GetCallsWorker')
  let calls = yield call(()=>{
    return(
      callsAxios.getCalls(action)
      .then(res=>res)
    )
  })
  yield put(actionCreators.addCallsAC(calls))
}
function* GetEmployeesWorker(action:getEmployeesAsyncActionType):Generator{
  yield console.log('Запускаю GetEmployeesWorker')
  let employees = yield call(()=>{
    return(
      callsAxios.getEmployees()
      .then(res=>res)
    )
  })
  yield put(actionCreators.addEmployeesAC(employees))
}

export function* CallsWatcher():Generator{
  yield takeEvery(AT.GET_CALLS, GetCallsWorker)
  yield takeEvery(AT.GET_EMPLOYEES, GetEmployeesWorker)
}