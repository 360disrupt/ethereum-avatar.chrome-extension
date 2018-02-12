window.addEventListener 'load', (->
  chrome.extension.sendMessage
    type: 'dom-loaded'
    data: myProperty: 'value'
  return
), true
