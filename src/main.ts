import * as core from '@actions/core'
import * as fs from 'fs'
import { google } from 'googleapis'

async function Run(): Promise<void> 
{
  try {
    const auth = new google.auth.GoogleAuth({
      keyFile: core.getInput('service-account-key'),
      scopes: ['https://www.googleapis.com/auth/androidpublisher'],
    })

    const androidpublisher = google.androidpublisher({
      version: 'v3',
      auth: auth,
    })

    const edit = await androidpublisher.edits.insert({
      packageName: core.getInput('package-name'),
    })

    const editId = edit.data.id!;

    const aabResponse = await androidpublisher.edits.bundles.upload({
      packageName: core.getInput('package-name'),
      editId: editId,
      media: {
        mimeType: 'application/octet-stream',
        body: fs.createReadStream(core.getInput('aab-path')),
      },
    })

    await androidpublisher.edits.tracks.update({
      packageName: core.getInput('package-name'),
      editId: editId,
      track: core.getInput('track'),
      requestBody: {
        releases: [
          {
            name: 'My Release',
            versionCodes: [aabResponse.data.versionCode!.toString()],
            status: 'completed',
          },
        ],
      },
    })

    await androidpublisher.edits.commit({
      packageName: core.getInput('package-name'),
      editId: editId,
    })
  } catch (ex: any) {
    core.setFailed(ex.message);
  }
}

Run()
