import axios from "axios";
import { useEffect, useState } from "react";
import { base_url } from "../utils";

export const useTransferMoney = (to,amount) => {
    const [data,setData] = useState("");
    const [loading,setLoading] = useState(true);
    
    useEffect(() => {
        getData();

        return () => {
            sessionStorage.removeItem("to");
            sessionStorage.removeItem("amount");
        }
    },[]);

    const getData = async() => {
        // const config = {
        //     url:"http://localhost:5000/api/v1/account/transfer",
        //     method:"POST",
        //     headers:{
        //         "Authorization":"Bearer "+ sessionStorage.getItem("token")
        //     },
        //     data:{
        //         to:to,
        //         amount:amount
        //     }
        // };
        // const response = await axios(config);
        const url = base_url + "/api/v1/account/transfer";
        const response = await fetch(url,{
            method:"post",
            headers:{
                "Authorization":"Bearer "+ sessionStorage.getItem("token"),
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                to,
                amount
            })
        });
        const data = await response.json();
        if(response.ok){
            data.statusCode=200;
        }else{
            data.statusCode=411;
        }
        setData(data);
        setLoading(false);
    };

    return {data,loading};
};