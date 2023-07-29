import axios from "axios";
import {apiUrl} from "./inFormTypes";
import Cookies from 'universal-cookie';

export const axiosReq = async(url,params,type) => {
       
    const cookies = new Cookies();

        if (params) {
            try {
                const response =    await  axios.post(apiUrl+url,params,{
            headers: {
                Authorization: `Bearer ${cookies.get('token')}`,
                "Content-Type":type?type:"application/json"
                          }
             } )
             if(response.status==200 ||response.status==201 )
             {
                 const items = response
                 return items
             }
             else if(response.status==401 ){
alert("نشست شما به اتمام رسیده است. لطفا دوباره وارد شوید.")
             }
             else{
                
                             return "BadRequest"
             }
            }
                       catch (err) {
        }
    }
        else{
            try {

                const response = await axios.get(apiUrl+url,
                                 {headers: {
                            Authorization: `Bearer ${cookies.get('token')}`
                                      
                }}
                    )
 
if(response.status==200 ||response.status==201 )
{
    const items = response.data
    return items
}

else{
   
                return "BadRequest"
}
                
            } catch (err) {
                 if(err.response.status==401 ){
                    alert("نشست شما به اتمام رسیده است. لطفا دوباره وارد شوید.")
                    console.log(222)

                    console.log(err)
                                 }
                                 else{
   
                                    return "BadRequest"
                    }
              

            }

}}
// export default axiosReq;
