export const SUCCESS_RECIEVE_BANKS = "SUCCESS_RECIEVE_BANKS";
export const ERROR_RECIEVE_BANKS = "ERROR_RECIEVE_BANKS";

export function fetch_banks() {
  return (dispatch) => {
    return fetch(`http://${window.location.host}/data/bank_list.json`)
      .then(response => response.json())
      .then(json => {
        dispatch(receive_banks(json));
      });
  }
}

export const receive_banks = (banks) => {
  return {
    type: SUCCESS_RECIEVE_BANKS,
    banks
  }
}
