
export function curry (fn:(...args:any[])=>any) {
return function curried(...args:any[]):any {
if(args.length>=fn.length){
    return fn (...args)
} else {
    return function (nextArgs:any[]) {
return curried(...args.concat(nextArgs))
    }
}
}
}


