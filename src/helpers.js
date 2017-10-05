export function checkData(props, dispatch, method) {
  if(!props.length){
    dispatch(method());
  }
}
