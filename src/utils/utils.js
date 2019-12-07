const dateFormat = new Intl.DateTimeFormat(`ru-RU`, {
  month: `long`,
  day: `numeric`
});

const timeFormat = new Intl.DateTimeFormat(`ru-RU`, {
  hour12: false,
  hour: `numeric`,
  minute: `numeric`
});

export const formatDate = date => dateFormat.format(date);
export const formatTime = date => timeFormat.format(date);
