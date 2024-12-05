export const hello = async(event:any) => {
    console.log("lambda handler12 hit ", new Date().toISOString());
    return { info23: new Date().toISOString() };
}