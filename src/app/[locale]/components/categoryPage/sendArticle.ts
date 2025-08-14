import { createClient } from "../../../../../utils/supabase/client";
import { ArticleObject } from "../interface/allTypes";



export async function sendArticle(articleObj: ArticleObject, category:string) {
const supabase = createClient()
  const { data, error } = await supabase
    .from('articles')
    .insert([{ 
      data: articleObj,
      category: category
     }]);

  if (error) {
    alert('Error when submitting an article');
    return false;
  }
  alert('The article has been successfully submitted!');
  return true;
}
