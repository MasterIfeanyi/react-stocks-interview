function getPreviousDay(date) {
  const previous = new Date(date.getTime());
  previous.setDate(date.getDate());

  return previous.toISOString().split("T")[0];
}

export const checkTime = () => {
    const date = new Date();

    const americanTime = date.toLocaleTimeString("en-US", { timeZone: 'America/New_York', hour: 'numeric', hour12: false })
    
    const timeInHours = americanTime;
    
    const dateMonth = date.getMonth() + 1;
    const dateToday = date.getDate();
    const dateYear = date.getFullYear();
    
    if (timeInHours <= 16 ) {
        const dateString = `${dateYear}-${dateMonth}-${dateToday}`;

        const yesterday = getPreviousDay(new Date(dateString))

        return yesterday
    } else {
        const dateString = `${dateYear}-${dateMonth}-${dateToday}`;

        const today = getPreviousDay(new Date(dateString))

        return today
    }
}