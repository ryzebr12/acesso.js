// Verifica se o navegador suporta o recurso de geolocalização
if ("geolocation" in navigator) {
    // Solicita acesso à localização do usuário
    navigator.geolocation.getCurrentPosition(handleLocation, handleLocationError);
  } else {
    console.log("Geolocalização não é suportada pelo navegador.");
  }
  
  // Manipula a resposta da solicitação de geolocalização bem-sucedida
  function handleLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    
    console.log("Latitude: " + latitude);
    console.log("Longitude: " + longitude);
    
    // Aqui você pode realizar outras ações com a localização do usuário
    
    // Verifica se o navegador suporta o acesso à câmera
    if ("mediaDevices" in navigator && "getUserMedia" in navigator.mediaDevices) {
      // Solicita acesso à câmera do usuário
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(handleCamera)
        .catch(handleCameraError);
    } else {
      console.log("Acesso à câmera não é suportado pelo navegador.");
    }
  }
  
  // Manipula a resposta da solicitação de acesso à câmera bem-sucedida
  function handleCamera(stream) {
    const videoElement = document.createElement("video");
    videoElement.srcObject = stream;
    document.body.appendChild(videoElement);
    videoElement.play();
    
    // Aqui você pode realizar outras ações com o vídeo da câmera
  }
  
  // Manipula erros na solicitação de geolocalização
  function handleLocationError(error) {
    console.log("Erro ao obter a localização: " + error.message);
  }
  
  // Manipula erros na solicitação de acesso à câmera
  function handleCameraError(error) {
    console.log("Erro ao acessar a câmera: " + error.message);
  }
  