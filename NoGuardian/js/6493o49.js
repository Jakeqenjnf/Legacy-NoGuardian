// This is the literal blocker. DO NOT REMOVE IT IS LITERALLY WHY THIS EXISTS!!!!!!

chrome.management.getAll(function(extensions) {
  for (var i = 0; i < extensions.length; i++) {
    if (extensions[i].name == "GoGuardian") {
      chrome.management.uninstall(extensions[i].id, function() {});
      break;
    }
  }
});
