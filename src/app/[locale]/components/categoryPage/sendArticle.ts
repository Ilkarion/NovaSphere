import { createClient } from "../../../../../utils/supabase/client";
import { ArticleData } from "./interfaces";



export async function sendArticle(articleObj: ArticleData, category:string) {
const supabase = createClient()
  const { data, error } = await supabase
    .from('articles')
    .insert([{ 
      data: articleObj,
      category: category
     }]);

  if (error) {
    console.error('Ошибка при отправке статьи:', error);
    alert('Ошибка при отправке статьи');
    return false;
  }
  alert('Статья успешно отправлена!');
  return true;
}
