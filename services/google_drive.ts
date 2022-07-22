
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_SHEET_AND_GOOGLE_DRIVE_API_TOKEN
const folderId = process.env.NEXT_PUBLIC_DRIVE_FOLDER_ID

export default async function getGoogleDriveData() {
  const res = await fetch(`https://www.googleapis.com/drive/v2/files?q='${folderId}'+in+parents&key=${apiKey}`)
  const data = await res.json()
  
  // regresar data.itmes[*].downloadUrl
  return data
}
