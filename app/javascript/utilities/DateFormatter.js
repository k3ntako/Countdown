function formatDatetime(datetime){
  const dateFormatOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  };

  const timeFormatOptions = {
    hour: '2-digit',
    minute:'2-digit'
  };

  const formattedDate = datetime.toLocaleDateString([], dateFormatOptions);
  const formattedTime = datetime.toLocaleTimeString([], timeFormatOptions);
  return `${formattedDate} – ${formattedTime}`
}

export default formatDatetime;
