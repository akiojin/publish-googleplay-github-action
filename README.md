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

To use this action, you must create a service account in Google Cloud and register the created service account in the Google Play Console.

In Google Cloud, click on the service account.

![Google Cloud](image.png)

Click on "Create Service Account" at the top.

![Create Service account](image-1.png)

The service account detail settings screen will open. Set the service account to "GitHub Actions". This name can be arbitrary.

![Service account](image-2.png)

Next, click on "APIs and Services" from the burger menu in the upper left corner.

![API Service](image-3.png)

Search for "Google Play Android Developer API" in the API library search.

![Find](image-5.png)

Click "Enable API" on the Google Play Android Developer API details screen.

![Google Play Android Developer API](image-4.png)

Copy the email address of the service account created.

![alt text](image-6.png)

Go to Google Play Console and click on "Users and Permissions".

![Users and Permissions](image-7.png)

On the Users and Permissions screen, click on "Invite New Users".

![Invite new users](image-8.png)

Paste the email address of the service account you just copied and select the application you wish to authorize.

![Register your email address and add the application](image-9.png)