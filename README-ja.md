# publish-googleplay-github-action

## Usage

```yaml
- name: 📤 Publish to Google Play Console
  uses: akiojin/publish-googleplay-github-action@v0.1.2
  with:
    aab-path: <aab path>
    package-name: <package name>
    service-account-key: ${{ secrets.GOOGLE_SERVICE_ACCOUNT_KEY }}
    track: internal
```

## Google Cloud Service Account

このアクションを使用するには、Google Cloudでサービスアカウントを作成し、作成したサービスアカウントをGoogle Play Consoleに登録する必要があります。

Google Cloudで、サービスアカウントをクリックします。

![Google Cloud](image.png)

一番上の「サービスアカウントを作成」をクリックします。

![Create Service account](image-1.png)

サービスアカウントの詳細設定画面が開きます。サービスアカウントを "GitHub Actions" に設定します。この名前は任意です。

![Service account](image-2.png)

次に、左上のハンバーガーメニューから「APIとサービス」をクリックする。

![API Service](image-3.png)

APIライブラリ検索で「Google Play Android Developer API」を検索する。

![Find](image-5.png)

Google Play Android Developer APIの詳細画面で「APIを有効にする」をクリックします。

![Google Play Android Developer API](image-4.png)

作成したサービスアカウントのメールアドレスをコピーする。

![alt text](image-6.png)

Google Play Consoleにアクセスし、「ユーザーと権限」をクリックします。

![Users and Permissions](image-7.png)

ユーザーと権限」画面で、「新しいユーザーを招待する」をクリックします。

![Invite new users](image-8.png)

コピーしたサービスアカウントのメールアドレスを貼り付け、認証したいアプリケーションを選択します。

![Register your email address and add the application](image-9.png)