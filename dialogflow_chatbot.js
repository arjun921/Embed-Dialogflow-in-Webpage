function chatbotInit() {
  var div = document.createElement("div");
  document.getElementsByTagName('body')[0].appendChild(div);
  // div.outerHTML = "<div id='botDiv' style='height: 38px; position: fixed; bottom: 0; right:0; z-index: 1000; background-color: #202430'><div id='botTitleBar' style='height: 38px; width: 400px;color: #FFF;background: -webkit-linear-gradient(#4A65FB, #4A65FB, #6E59FB, #9C4AFB, #B247FC); -webkit-background-clip: text;-webkit-text-fill-color: transparent; padding: 10px; position:fixed; cursor: pointer;'>Procurement Assistant (Online Now)</div><iframe style='padding-top: 38px;' width='400px' height='600px' src='https://console.dialogflow.com/api-client/demo/embedded/7be97ed5-82a6-47b4-8894-95939154e3cf'></iframe></div>";
  div.outerHTML = "<div id='botDiv' style='height: 38px; box-shadow:0 5px 15px rgba(0,0,0,0.4); position: fixed; bottom: 0; right:35px; background-color: #202430'><div id='botTitleBar' style='height: 38px; width: 400px;color: #FFF;background: -webkit-linear-gradient(#FFF, #FFF); -webkit-background-clip: text;-webkit-text-fill-color: transparent; padding: 10px; position:fixed; cursor: pointer;'>Procurement Assistant (Online Now)</div><iframe style='padding-top: 38px;' width='400px' height='600px' src='EnterIframeLinkToDialogflowChatbot'></iframe></div>";
  document.getElementById('botTitleBar').addEventListener('click', function (e) {
      e.target.matches = e.target.matches || e.target.msMatchesSelector;
      if (e.target.matches('#botTitleBar')) {
          var botDiv = document.querySelector('#botDiv');
          botDiv.style.height = botDiv.style.height == '600px' ? '38px' : '600px';
      };
  });
}


document.addEventListener("DOMContentLoaded", function() {
  chatbotInit()
});
