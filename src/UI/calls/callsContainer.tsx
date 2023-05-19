import { DispatchType, StateTape} from "../../store/store"
import { Calls } from "./calls"
import { actionCreators } from "../../store/reducers/callCrm/callsReducer"
import { compose } from "redux"
import { connect } from "react-redux"

const mapStateToProps = (state:StateTape)=>{
  return({
    defaultCallsList: state.calls.callsList,
  })
  
}

const mapDispatchToProps = (dispatch:DispatchType)=>{
  return({
    getList(filters:{type:string, source:string}){
      dispatch(actionCreators.getCallsAsyncAC(filters))
    },
    getEmployees(){
      dispatch(actionCreators.getEmployeesAsyncAC())
    }
  })
}

export const CallsContainer = compose(connect(mapStateToProps,mapDispatchToProps)(Calls))