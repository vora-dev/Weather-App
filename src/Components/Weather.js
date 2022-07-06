let API_KEY;
const fetchdata = async (url) => {
  let response = await fetch(url);
  let data = await response.json();
  return data;
};
const formatweathercall = (data) => {
  const {
    main: { temp, feels_like, temp_min, temp_max, humidity },
    name,
    weather,
    sys: { country, sunrise, sunset },
    dt,
    wind: { speed },
  } = data;
  const { main, icon } = weather[0];

  return {
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    name,
    country,
    sunrise,
    sunset,
    dt,
    speed,
    main,
    icon,
  };
};
const formatonecall = (data) => {
  let { timezone, timezone_offset, hourly, daily } = data;
  hourly = hourly.slice(1, 6);
  daily = daily.slice(1, 6);
  daily = daily.map((element) => {
    let {
      dt,
      temp: { min, max },
      weather,
    } = element;
    let { icon } = weather[0];
    return { dt, min, max, icon };
  });
  hourly = hourly.map((element) => {
    let { dt, temp, weather } = element;
    let { icon } = weather[0];
    return { dt, temp, icon };
  });
  return { timezone, timezone_offset, hourly, daily };
};
const weathercall = async (input) => {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?" +
    (input.length === 2
      ? "lat=" + input[0] + "&lon=" + input[1]
      : "q=" + input[0]) +
    "&appid="+API_KEY+"&units=metric";
  let wc = await fetchdata(url);
  const {
    coord: { lat, lon },
  } = wc;
  let oc = await onecall(lat, lon);
  oc = await formatonecall(oc);
  wc = await formatweathercall(wc);
  return { ...oc, ...wc };
};
const onecall = async (lat, lon) => {
  const url =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid="+API_KEY+"&units=metric";
  let oc = await fetchdata(url);
  return oc;
};

export default weathercall;
