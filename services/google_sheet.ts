import useGoogleSheets from 'use-google-sheets';

export default function getGoogleSheetData() {
  const { data, loading, error } = useGoogleSheets({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_SHEET_AND_GOOGLE_DRIVE_API_TOKEN,
    sheetId: process.env.NEXT_PUBLIC_SHEET_ID,
  });

  if (loading) {
    console.log('Cargando')
    return 'Cargando'
  }

  if (error) {
    console.log('Error')
    return 'Error'
  }

  // console.log(JSON.stringify(data))

  return data
}
