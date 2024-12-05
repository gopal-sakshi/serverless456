export function add23 (a:number|string,b:number|string):number|string {
    if(typeof a == 'number' && typeof b == 'number') { return a+b; }
    else {
        console.log("ts (or) js file edi print ayindi - bundled app kada")
        return 'string_add_not_supported';
    }
}

export const mult23 = (a:number, b:number):number => a * b;