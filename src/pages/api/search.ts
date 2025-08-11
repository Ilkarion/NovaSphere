import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '../../../utils/supabase/client';

const supabase = createClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<unknown>
) {
  const { query, lang } = req.query;

  if (!query || typeof query !== 'string' || query.length < 3) {
    return res.status(400).json({ error: 'Query too short' });
  }

  // Определи колонку с поисковым вектором по lang
  const langMap = {
    ru: 'search_vector_ru',
    ukr: 'search_vector_ukr',
    pl: 'search_vector_pl',
    en: 'search_vector_en',
  };

  const searchColumn = langMap[lang as keyof typeof langMap] || 'search_vector_en';

  // Сформируем SQL запрос с фильтром
  // Используем raw sql через supabase.rpc или supabase.from().select() с фильтром
  // Здесь сделаем пример с .filter
  const { data, error } = await supabase
    .from('articles')
    .select('id, data')
    .textSearch(searchColumn, query, {
      type: 'plain', // или 'websearch'
    });

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  return res.status(200).json(data);
}