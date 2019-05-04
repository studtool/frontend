/**
 *
 * @param {*} data - объект вида {key:value, key:value}
 * @return {Array} массив вида  [{key:value}, {key:value}]
 */
function makeArrayOfObjects(data) {
    const result= [];
    for (key in data) {
        const b = new {};
        b[key] = data[key];
        result.push(b);
    }
    return result;
}

/**
 * @param {object} format - формат, к которому будут приведены данные,
 * передаваемые в событии
 * @param {Array} data - массив объектов вида [{key:value}, {key:value}, {key:value}]
 *  в каждом объекте по одному полю
 * @return {object} данные события, приведённые к соответствующему формату
 */
function format(format, data) {
    if (data.constructor.name === 'Object') {
        data = makeArrayOfObjects(data);
    }
    const undepended = {...format};
    const formatedData = data.reduce((acc, val) => {
        if (val.name in format) {
            acc[val.name] = val.value;
        }
        return acc;
    }, undepended);

    return formatedData;
}


export default format;
