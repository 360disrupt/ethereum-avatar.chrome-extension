chrome.extension.onMessage.addListener (request, sender, sendResponse) ->
  switch request.type
    when 'dom-loaded'
      console.log "dom-loaded, (background.coffee)", sender
      chrome.tabs.executeScript sender.tab.id, {file: 'ethereum-avatar.js'}, console.log
  true

chrome.browserAction.onClicked.addListener (activeTab)->
  newURL = "https://ethereum-avatar.com/"
  chrome.tabs.create({ url: newURL })