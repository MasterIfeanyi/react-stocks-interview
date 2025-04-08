export const changeResponse = async (list) => {
    const dataArray = list.data
    console.log(dataArray) // 10 elements
    
    if (Array.isArray(dataArray)) {
        const finalArray = dataArray.filter((each) => each.length !== 1) // 6 elements

        const normalizeData = (data) => {
            return data.flatMap((d) => {
                return { ...d[0], ...d[1] };
            });
        };

        const latestList = normalizeData(finalArray)

        console.log(normalizeData(finalArray)); // 6 elements

        return latestList
    } else {
        const objToArray = Object.values(list.data.data)
        return objToArray;
   }
}