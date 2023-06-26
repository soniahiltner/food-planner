//Archivo para guardar las variables de conexion a las apis

const SEARCHLETTER_URL =
  "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

const SEARCHNAME_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const SEARCH_URL = "https://www.themealdb.com/api/json/v1/1/search.php";

const SEARCHID_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";

const CATEGORIES_DESCRIPTION_URL =
  "https://www.themealdb.com/api/json/v1/1/categories.php";

const CATEGORIES_NAMES_URL =
  "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

const COUNTRIES_URL = "https://www.themealdb.com/api/json/v1/1/list.php?a=list";

const INGREDIENTS_URL =
  "https://www.themealdb.com/api/json/v1/1/list.php?i=list";

const FILTER_INGREDIENT_URL =
  "https://www.themealdb.com/api/json/v1/1/filter.php?i=";

const FILTER_CATEGORY = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

const FILTER_COUNTRY = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";

const MEAL_THUMBNAIL = "/images/media/meals/llcbn01574260722.jpg/preview";

const INGREDIENT_THUMBNAIL =
  "https://www.themealdb.com/images/ingredients/Lime.png";

const INGREDIENT_THUMBNAIL_SMALL =
  "https://www.themealdb.com/images/ingredients/Lime-Small.png";

export default {
  SEARCHLETTER_URL,
  SEARCHNAME_URL,
  SEARCHID_URL,
  SEARCH_URL,
  CATEGORIES_DESCRIPTION_URL,
  CATEGORIES_NAMES_URL,
  COUNTRIES_URL,
  INGREDIENTS_URL,
  FILTER_CATEGORY,
  FILTER_COUNTRY,
  FILTER_INGREDIENT_URL,
  MEAL_THUMBNAIL,
  INGREDIENT_THUMBNAIL,
  INGREDIENT_THUMBNAIL_SMALL,
};
