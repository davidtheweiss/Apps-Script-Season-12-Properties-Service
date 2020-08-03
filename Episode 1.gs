function setProperty() {
  PropertiesService.getScriptProperties().setProperty("Current Version", "8");
  PropertiesService.getUserProperties().setProperty("Password", "test12345");
}

function getProperty() {
  Logger.log(PropertiesService.getScriptProperties().getProperty("Current Version"));
  Logger.log(PropertiesService.getUserProperties().getProperty("Password"));
}
