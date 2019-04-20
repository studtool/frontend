function createNewObject(obj) {
    const newObj = {};
    for (let key in obj) {
        if (obj[key].constructor.name === "Object") {
            newObj[key] = createNewObject(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}



function registrationInputFormatMethod(format, data) {
    const undepended = createNewObject(format);
    const formatedData = data.reduce((acc, val) => {
        if (val.name in format) {
            acc[val.name] = val.value; 
        }
        return acc;
    }, undepended);

    return formatedData;
}

export default registrationInputFormatMethod;
