import { httpAxios } from "@/lib/httpHelper";

export async function ragistre (users: any){

  const result =  await httpAxios.post("/api/restaurant",users).then((response)=>response.data)
  return result;

}

export async function login(loginData:any) {
  const result = await httpAxios
    .post("/api/Login", loginData)
    .then((response) => response.data);
  return result;
}
