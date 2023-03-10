export const evenOdd = i => {
  if (i % 2 === 0) {
    return "art art-odd";
  } else {
    return "art art-even";
  }
};

export const shuffle = array => {
  console.log(array);
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  console.log(array);

  return array;
};

export const sortNew = array => {
  var sortedArray = array.sort((a, b) => {
    var dateA = new Date(a.date);
    var dateB = new Date(b.date);
    return dateB - dateA;
  });

  return sortedArray;
};

export const sortOld = array => {
  var sortedArray = array.sort((a, b) => {
    var dateA = new Date(a.date);
    var dateB = new Date(b.date);
    return dateA - dateB;
  });

  return sortedArray;
};

export const decideColor = slug => {
  if (slug === "mediums-of-war") {
    return "war";
  } else if (slug === "a-colorful-history") {
    return "ach";
  } else if (slug === "megacities") {
    return "meg";
  } else if (slug === "digital-city-series") {
    return "dcs";
  } else if (slug === "art-collision") {
    return "col";
  } else if (slug === "vanishing-landscapes") {
    return "van";
  } else if (slug === "og") {
    return "og";
  } else if (slug === "installations") {
    return "ins";
  } else if (slug === "photography") {
    return "pho";
  } else if (slug === "videos") {
    return "vid";
  } else return "war";
};
