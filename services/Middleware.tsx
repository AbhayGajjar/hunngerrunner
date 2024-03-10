import { NextResponse } from "next/server";



export  function middleware(request:any){
    console.log("middleware is executed......")
  return NextResponse.redirect(new URL("/home",request.url));

// const result = request.cookies.get("authToken").value;
// console.log(result);
}





//matching path below code is running

export const config={
    matcher:'/feacture',
}