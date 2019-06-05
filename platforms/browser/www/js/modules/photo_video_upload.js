

      var uploader = new SocketIOFileClient(socket);

      var control = document.getElementById("filethree");
      var controlvideo = document.getElementById("filefour");

      var filesize = 0;

      var uploademail = localStorage.getItem("useremail");

      uploader.on('start', function(fileInfo) {

          filesize = fileInfo.size;
          //console.log('Start uploading', fileInfo);

          $('.progressbar').css("display","block");
      });
      uploader.on('stream', function(fileInfo) {

          //console.log('Streaming... sent ' + fileInfo.size + "/" +  + ' bytes.');

          var info_progress = fileInfo.sent / fileInfo.size * 100;

          //console.log(info_progress);

          var downprogressbar = $$('#download_progressbar');
          myApp.progressbar.set(downprogressbar, Math.round(info_progress));



      });
      uploader.on('complete', function(fileInfo) {
          //console.log('Upload Complete', fileInfo);
          var downprogressbar = $$('#download_progressbar');
          myApp.progressbar.set(downprogressbar, 10);
          $('.progressbar').css("display","none");

          control.value = "";
          controlvideo.value = "";
      });
      uploader.on('error', function(err) {
          //console.log('Error!', err);
      });
      uploader.on('abort', function(fileInfo) {
          //console.log('Aborted: ', fileInfo);
      });

      control.addEventListener("change", function(event) {

          var uploademailtwo = localStorage.getItem("useremail");
          var fileEl = document.getElementById('filethree');
          var uploadIds = uploader.upload(fileEl, {
              data: { email:uploademailtwo },
              uploadTo: 'photo'
          });

          // setTimeout(function() {
              // uploader.abort(uploadIds[0]);
              // console.log(uploader.getUploadInfo());
          // }, 1000);
      }, false);

      controlvideo.addEventListener("change", function(event) {

          var uploademailthree = localStorage.getItem("useremail");
          var fileEl = document.getElementById('filefour');
          var uploadIds = uploader.upload(fileEl, {
              data: { email:uploademailthree },
              uploadTo: 'video'
          });

          // setTimeout(function() {
              // uploader.abort(uploadIds[0]);
              // console.log(uploader.getUploadInfo());
          // }, 1000);
      }, false);

      $(".photo_upload").click(function () {
            $("#filethree").trigger('click');
        });

      $(".video_upload").click(function () {
            $("#filefour").trigger('click');
        });
