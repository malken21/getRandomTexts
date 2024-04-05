// Get リクエスト
// json を return する
function get(url) {
    const response = UrlFetchApp.fetch(url).getContentText();
    return JSON.parse(response);
}

// レスポンス 生成
function result(object) {
    return ContentService.createTextOutput(
        JSON.stringify(object)
    ).setMimeType(ContentService.MimeType.JSON);
}