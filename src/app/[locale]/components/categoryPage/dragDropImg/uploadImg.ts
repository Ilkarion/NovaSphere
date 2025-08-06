import { createClient } from "../../../../../../utils/supabase/client"

export const uploadImage = async (file: File) => {
function sanitizeFileName(fileName: string): string {
  return fileName
    .normalize('NFD') 
    .replace(/[\u0300-\u036f]/g, '') 
    .replace(/[^a-zA-Z0-9.-]/g, '_')
    .toLowerCase();
}

  const rawName = `${Date.now()}_${file.name}`;
  const safeName = sanitizeFileName(rawName);

  // Загрузка файла
  const supabase = createClient()
  const { data, error } = await supabase.storage
    .from('images') // имя bucket
    .upload(safeName, file)

  if (error) {
    console.error('Upload error:', error.message)
    return null
  }

  // Получение публичного URL
  const { data: publicUrlData } = supabase
    .storage
    .from('images')
    .getPublicUrl(safeName)

  return publicUrlData.publicUrl
}
