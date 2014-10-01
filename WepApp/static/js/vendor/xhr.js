(function(){
  var xhr = {
    trigger: function (type, url, success, data) {
      var request = new XMLHttpRequest;
      request.open(type, url, true);

      request.setRequestHeader('Content-type','application/json');

      type === 'POST' ? request.send(data) : request.send(null);

      request.onreadystatechange = function() {
        if (request.readyState === 4) {
          if (request.status === 200 || request.status === 201) {
            success(request.responseText);
          }
        }
      }
    }
  };
})();