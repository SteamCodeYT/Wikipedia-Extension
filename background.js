chrome.runtime.onInstalled.addListener(() => {
    var contextMenuItem = {
        "id": "wiki", 
        "title": "Search on Wikipedia",
        "contexts": ["selection"]
    }

    chrome.contextMenus.create(contextMenuItem);

    chrome.contextMenus.onClicked.addListener(function(info, tab){
        var newURL = "https://en.wikipedia.org/wiki/" + info.selectionText;
        chrome.tabs.create({ url: newURL})
    });
});