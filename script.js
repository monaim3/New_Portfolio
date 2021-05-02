function sendMail(params) {
    var tempParams ={
        from_name: document.getElementById('fromEmail').value,
        to_name: document.getElementById('toName').value,
        message: document.getElementById('msg').value,

    };
    emailjs.send('service_2byfh77', 'template_00bawh3',tempParams)
    .then(function(res){
      console.log('success',res.status)
      window.alert("Succesfully send your mail");
    })
}