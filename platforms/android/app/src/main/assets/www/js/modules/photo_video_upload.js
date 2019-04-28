

      var uploader = new SocketIOFileClient(socket);

      var control = document.getElementById("filethree");

      var filesize = 0;

      var downloadGauget = myApp.gauge.create({
          el: '.download-gauge',
          type: 'circle',
          value: 0,
          size: 250,
          borderColor: '#2196f3',
          borderWidth: 10,
          valueText: "upload",
          valueFontSize: 41,
          valueTextColor: '#2196f3',
          labelText: '...',
      });

      uploader.on('start', function(fileInfo) {

          filesize = fileInfo.size;
          console.log('Start uploading', fileInfo);
      });
      uploader.on('stream', function(fileInfo) {

          console.log('Streaming... sent ' + fileInfo.size + "/" + fileInfo.sent + ' bytes.');

          var info_progress = fileInfo.size / fileInfo.sent * 100;

          downloadGauget.update({
             value: info_progress,
             valueText: "upload"
           });



      });
      uploader.on('complete', function(fileInfo) {
          console.log('Upload Complete', fileInfo);
      });
      uploader.on('error', function(err) {
          console.log('Error!', err);
      });
      uploader.on('abort', function(fileInfo) {
          console.log('Aborted: ', fileInfo);
      });

      control.addEventListener("change", function(event) {

          var fileEl = document.getElementById('filethree');
          var uploadIds = uploader.upload(fileEl, {
              data: { /* Arbitrary data... */ }
          });

          // setTimeout(function() {
              // uploader.abort(uploadIds[0]);
              // console.log(uploader.getUploadInfo());
          // }, 1000);
      }, false);
