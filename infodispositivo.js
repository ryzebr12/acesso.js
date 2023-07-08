// Obtém informações do navegador do usuário
var userAgent = navigator.userAgent;
var deviceType = "Unknown";
if (/mobile/i.test(userAgent)) {
  deviceType = "Mobile";
} else if (/tablet/i.test(userAgent)) {
  deviceType = "Tablet";
} else if (/iPad/i.test(userAgent)) {
  deviceType = "iPad";
} else if (/Android/i.test(userAgent)) {
  deviceType = "Android";
} else {
  deviceType = "Desktop";
}

console.log("Device Type: " + deviceType);

// Envia uma solicitação ao servidor para obter o endereço IP
fetch("https://api.ipify.org/?format=json")
  .then(response => response.json())
  .then(data => {
    var ipAddress = data.ip;
    console.log("IP Address: " + ipAddress);

    // Aqui você pode realizar outras ações com o endereço IP
  })
  .catch(error => {
    console.log("Erro ao obter o endereço IP: " + error);
  });
