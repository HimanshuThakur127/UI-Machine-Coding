const jsonString = '{"name": "John swe", "age": 30, "isStudent": false, "ob": {"k1": "v1", "k2": "v2"}, "ar":["swd", "swe", "sss"]}';
const customSerializeJSON = (jsonStr) => {
    const regs = {
        keyValuePair: /"[^"]+":\s*("[^"]*"|true|false|\d+|null|\[.*?\]|\{.*?\})/g,
        key: /"([^"]+)"/,
        value: /:\s*("[^"]*"|true|false|\d+|null|\[.*?\]|\{.*?\})/,
        array: /(\[.*?\])/,
        object: /(\{(.*?)\})/,
        string: /"([^"]*)"/,
        number: /(\d+)/,
        boolean: /(true|false)/
    }
    const parseArray = (arrStr) => {
            arrStr = arrStr.trim().slice(1, -1).split(',');
            const result = [];
            for(let ar of arrStr){
                let trimmedVal = ar.trim();
                trimmedVal = regs.number.test(trimmedVal) ? Number(trimmedVal): trimmedVal.match(regs.string)[1];  
                result.push(trimmedVal);
            }
            return result;
        }
    const parseObject = (objStr) => {
        console.log(typeof objStr)
        const jsonObj = objStr.trim().slice(1, -1).match(regs.keyValuePair);
        const result = {};
        for(let pair of jsonObj){
            const key = pair.match(regs.key);
            const valueStr = pair.match(regs.value)[1];
            let value = '';
            if(regs.object.test(valueStr)){
              value = parseObject(valueStr.match(regs.object)[1]);
            }
            else if(regs.array.test(valueStr)){
              value = parseArray(valueStr.match(regs.array)[1]);
                
            } 
            else if(regs.string.test(valueStr)){ 
                value = valueStr.match(regs.string)[1]
            }
            else if(regs.number.test(valueStr)){
                value = Number(valueStr.match(regs.number)[1]);
            }
            else if(regs.boolean.test(valueStr)){
                value = valueStr.match(regs.boolean) === 'false' ? false : true;
            }
            result[key[1]] = value;
        }
        
        return result;
    }
    return parseObject(jsonStr);
}


console.log(customSerializeJSON(jsonString));
    