// Misskeyからのリクエストで実行
function doGet(e) {

    // wikipedia からランダムな記事を取得
    const randomList = get(
        `${URL}?action=query&format=json&list=random&rnlimit=${Limit}&rnnamespace=0`
    );

    // レスポンスの配列を作成する
    const response = randomList.query.random.map(value => value.title);

    // レスポンスを送信
    return result(response);
}