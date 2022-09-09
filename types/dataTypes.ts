export interface SuggestionsType {
  suggestions: SuggestionType[]
}

export interface SuggestionType {
  suggestion: string
}

export interface VoxDataType {
  articleId: string;
  link: string;
  imagelink: string;
  title: string;
  tags?: string[];
  authors?: string[]
}


// "id": "1",
// "theme": "Військово-біологічні лабораторії та медичні досліди над громадянами України ",
// "subtheme": "Корпорації Pfizer та Moderna були залучені до воєнно-біологічних дослідів США в Україні",
// "discription": "Російські медіа масово поширили інформацію (близько 200 матеріалів), ніби корпорації Pfizer та Moderna були залучені до воєнно-біологічних дослідів США в Україні. Мовляв, так компанії скорочують витрати на випробування медичних препаратів.  У російському міноборони доводять наявність в Україні «воєнно-біологічних дослідів США» тим, що у 2005 році США уклали угоду з Україною про реалізацію військово-біологічних програм на території країни. А згодом прийняли стратегію США щодо протидії біологічним загрозам та легалізували «дослідження подвійного призначення».  Також російські ЗМІ поширювали контент про досліди США над населенням України, зокрема про нібито біологічні досліди Пентагона на пацієнтах психлікарні під Харковом. Про все це заявляв начальник військ радіаційного, хімічного та біологічного захисту зс рф Ігор Кирилов. ",
// "verdict": "Дезінформація",
// "source": "Москва 24",
// "date": "11.05.2022",
// "link": "https://www.m24.ru/news/politika/11052022/460217",
// "archive_link": "https://web.archive.org/web/20220706141418/https://www.m24.ru/news/politika/11052022/460217",
// "country": "росія",
// "disproof": "По-перш

export interface medicalFake {
  id: string;
  theme?: string;
  subtheme?: string;
  discription?: string;
  verdict?: string;
  source?: string;
  date?: string;
  archive_link?: string;
  country?: string;
  disproof?: string;
  tags?:  string
}