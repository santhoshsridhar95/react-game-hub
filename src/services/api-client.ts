import axios from "axios";

export default axios.create({

    baseURL:'https://api.rawg.io/api',
    params:{
        key:'63945342041243058f4e2ea071bdc5bf'
    }

})