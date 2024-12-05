import { getByHero } from 'lib222';

export const hello = async(event:any) => {
    console.log("lambda handler13 hit ", new Date().toISOString());
    return { 
        info23: new Date().toISOString(),
        hero23: getByHero("prabhas")
    };
}