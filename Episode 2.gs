function doGet() {
  const lang = PropertiesService.getUserProperties().getProperty("lang");
  if (lang !== 'en' && lang !== null) {
    const text = HtmlService.createTemplateFromFile('index').evaluate().getContent();
    const html = LanguageApp.translate(text, 'en', lang, {'contentType': 'html'});
    return HtmlService.createHtmlOutput(html);
  } else {
    return HtmlService.createTemplateFromFile('index').evaluate();
  }
}

function includeExternalFile(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getBookUrls() {
  let bookUrls = {};
  let book;
  const fileIterator = DriveApp.getFoldersByName('Books').next().getFiles();
  
  while(fileIterator.hasNext()) {
    book = fileIterator.next();
    bookUrls[book.getDescription()] = book.getDownloadUrl().replace('download', 'view');
  }
  
  return bookUrls;
}

function storeUserLanguage(lang) {
  PropertiesService.getUserProperties().setProperty("lang", lang);
  return ScriptApp.getService().getUrl();
}

function someMoreFunctions() {
//  Logger.log(PropertiesService.getUserProperties().getProperty("lang"));
  const keys = PropertiesService.getScriptProperties().deleteAllProperties();
 
}
