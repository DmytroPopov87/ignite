//Base URL
const base_url = "https://api.rawg.io/api/";

const {REACT_APP_API_KEY} = process.env;

//Getting the date
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
//Getting the date
const getCurrentDay = () => {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};


//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular Games
const popular_games = `games?key=${REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=20`;
const upcoming_games = `games?key=${REACT_APP_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=20`;
const newGames = `games?key=${REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=20`;

export const popularGamesURL = () => `${base_url}${popular_games}?key=${REACT_APP_API_KEY}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}?key=${REACT_APP_API_KEY}`;
export const newGamesURL = () => `${base_url}${newGames}?key=${REACT_APP_API_KEY}`;
//GAME DETAILS
export const gameDetailsURL = (game_id) => `${base_url}games/${game_id}?key=${REACT_APP_API_KEY}`;
//Game ScreenShots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${REACT_APP_API_KEY}`;
//Searched game
export const searchGameURL = (game_name) => `${base_url}games?key=${REACT_APP_API_KEY}&search=${game_name}&page_size=10`;
