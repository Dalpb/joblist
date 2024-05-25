
export async function fetchJobList(){
    try{
        const response = await fetch("/public/data/data.json");
        const data = await response.json();
        return data;
    }catch(error){
        console.error("It could not be able to fetch job list: ",error);
        return null;
    }

}

export default fetchJobList;