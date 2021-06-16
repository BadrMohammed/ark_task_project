import { Request } from "./Request";
import {
  getQueryString,
  showNotificationMessage,
} from "../../ReusableCompnents/GeneralFunctions";
import { UPDATE_HOME_PROPS, MERGE_HOME_PROPS } from "../Actions/types";

//list the most starred Github repos that were created in the last 30 days.
export const fetch_Repositries = (query, page, date) => (dispatch) => {
  if (page === 1) {
    dispatch({
      type: UPDATE_HOME_PROPS,
      payload: [{ prop: "repositoryObj.isLoading", value: true }],
    });
  }
  query.page = page;
  if (date !== undefined) {
    query.q = date;
  }
  let query_str = getQueryString(query);
  let url = "/search/repositories" + query_str;

  Request()
    .get(url)
    .then((response) => {
      if (response.data.items !== undefined) {
        if (response.data.items.length > 0) {
          let result = [];
          for (var count = 0; count < response.data.items.length; count++) {
            result.push({
              name: response.data.items[count].full_name,
              description: response.data.items[count].description,
              owner_photo: response.data.items[count].owner.avatar_url,
              owner_userName: response.data.items[count].owner.login,
              stars: response.data.items[count].stargazers_count,
              issues: response.data.items[count].open_issues,
            });
          }

          dispatch({
            type: MERGE_HOME_PROPS,
            payload: [{ prop: "repositoryObj.repositoryArray", value: result }],
          });
        } else {
          showNotificationMessage("No Result Found");
        }
      } else {
        dispatch({
          type: UPDATE_HOME_PROPS,
          payload: [{ prop: "repositoryObj.hasMore", value: false }],
        });
      }
      dispatch({
        type: UPDATE_HOME_PROPS,
        payload: [{ prop: "repositoryObj.isLoading", value: false }],
      });
    })
    .catch((err) => {
      console.log(err);
    })
    .finally();
};
