import swal from "sweetalert";

export const getQueryString = (obect) => {
  let query = "";

  Object.keys(obect).forEach(function (key, index) {
    if (index === 0) {
      query += "?";
    } else {
      query += "&";
    }
    query += key + "=" + obect[key];
  });
  return query;
};

export const showNotificationMessage = (title) => {
  swal({
    text: title,
  });
};
