import React from 'react';

const AlertContext = React.createContext({
  showToast: true,
  setShowToast: () => {},
});

export default AlertContext;
