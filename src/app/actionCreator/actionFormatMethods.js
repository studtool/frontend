
// TODO создание копии объекта заменить на spread оператор
function createObjectCopy(obj) {
    const newObj = {};
    for (let key in obj) {
        if (obj[key].constructor.name === "Object") {
            newObj[key] = createObjectCopy(obj[key]);
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

function makeArrayOfObjects(data) {
    const result= []
    for (key in data) {
        let b = new Object;
        b[key] = data[key];
        result.push(b);
    }
    return result;
}

/**
 * 
 * @param {*} format - объект с соответствующими формату события полями
 * @param {*} data - массив объектов вида [{key:value}, {key:value}, {key:value}] в каждом объекте по одному полю
 */
function format(format, data) {
    if (data.constructor.name === "Object") {
        data = makeArrayOfObjects(data);
    }
    const undepended = createObjectCopy(format);
    const formatedData = data.reduce((acc, val) => {
        if (val.name in format) {
            acc[val.name] = val.value; 
        }
        return acc;
    }, undepended);

    return formatedData;
}


export default format;
