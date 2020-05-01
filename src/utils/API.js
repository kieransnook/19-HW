import axios from "axios";

const BASEURL = "https://randomuser.me/api/";// const APIKEY = "2VGP-LSTU-90G0-12SZ";



export default {
    search: function() {

    return axios.get(BASEURL+"?results=20");
    }
};