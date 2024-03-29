
const FormPage = () => {
  return (
    <div class="container">
    <h1 class="mt-5 mb-3">メッセージ機能とファイル選択</h1>
    <form id="messageForm">
      <div class="mb-3">
        <label for="messageText" class="form-label">メッセージ入力:</label>
        <input type="text" class="form-control" id="messageText" required></input>
      </div>
      <div class="mb-3">
        <label for="fileInput" class="form-label">ファイル選択:</label>
        <input type="file" class="form-control" id="fileInput"></input>
      </div>
      <button type="submit" class="btn btn-primary">送信</button>
    </form>
    <ul id="messageList" class="list-group message-list mt-4">
    </ul>
  </div>
  );
}

export default FormPage;