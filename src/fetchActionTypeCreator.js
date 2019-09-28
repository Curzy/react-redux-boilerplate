
const fetchActionTypeCreator (entity) => {
  if (typeof entity !== 'string') {
    throw new Error('fetchActionTypeCreator(...): argument must be an string.');
  }

  return {
    REQUEST: `REQUEST_${entity}`,
    RECEIVE: `RECEIVE_${entity}`,
    FAILURE: `FAILURE_${entity}`
  };
};

export fetchActionTypeCreator