export const PLUS = "PLUS";
export const MINUS = "MINUS";
export const plus = () => {
  return {
    type: PLUS
  };
};

export const minus = () => {
  return {
    type: MINUS
  };
};


export const REQUEST_IP = 'REQUEST_IP'
export const RECEIVE_IP = 'RECEIVE_IP'
export const FAILURE_IP = 'FAILURE_IP'

export const requestIp = () => {
  return {
    type: REQUEST_IP,
  }
}

export const receiveIp = (res) => {
  return {
    type: RECEIVE_IP,
    res: res,
  }
}

export const failureIp = (error) => {
  return {
    type: FAILURE_IP,
    error: error,
  }
}

export const fetchIp = () => {
  const url = 'https://api.ipify.org?format=json'
  return (dispatch) => {
    dispatch(requestIp())
    fetch(url).then(
      res => res.json()
    ).then(
      jsonRes => dispatch(receiveIp(jsonRes))
    ).catch(
      error => {
        dispatch(failureIp(error))
      }
    )
  }
}