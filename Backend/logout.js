window.onbeforeunload = function() {
    localStorage.removeItem('token');
  };