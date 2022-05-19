import axios from "axios";
import authHeader from "./auth-header2";
import authHeader2 from "./auth-header";

const API_URL = "https://elfrique-proj.herokuapp.com/api/v1/";

class EventService {
  createEvent(eventForm) {
    return axios.post(API_URL + "createEvent", eventForm, {
      headers: authHeader(),
    });
  }

  /* createAward(awardForm) {
    return axios.post(API_URL + "createAward", awardForm, {
      headers: authHeader(),
    });
  } */

  getEvents() {
    return axios.get(API_URL + "getAllEvents", { headers: authHeader() });
  }

  getContests() {
    return axios.get(API_URL + "getallVote", { headers: authHeader() });
  }

  createTickets(ticketForm, eventId) {
    return axios.post(API_URL + "createTickets/" + eventId, ticketForm, {
      headers: authHeader2(),
    });
  }

  getCategories(contestId) {
    return axios.get(API_URL + "getallCategories/" + contestId, {
      headers: authHeader(),
    });
  }

  addsponsor(sponsorForm, contestId) {
    return axios.post(API_URL + "addSponsor/" + contestId, sponsorForm, {
      headers: authHeader(),
    });
  }

  addInfo(infoForm, contestId) {
    return axios.post(API_URL + "addInfo/" + contestId, infoForm, {
      headers: authHeader2(),
    });
  }

  addCategory(categoryForm, contestId) {
    return axios.post(API_URL + "createCategories/" + contestId, categoryForm, {
      headers: authHeader2(),
    });
  }

  addNominees(nomineeForm, contestName, categoryId) {
    return axios.post(
      API_URL + "createNominees/" + contestName + "/" + categoryId,
      nomineeForm,
      {
        headers: authHeader(),
      }
    );
  }

  allEvents() {
    return axios.get(API_URL + "allEvents", { headers: authHeader() });
  }
}

export default new EventService();
