export function decode(querystring : string, separator? : string, equal? : string, options? : { maxKeys : number }) : {[ index : string] : string};
export function parse(querystring : string, separator? : string, equal? : string, options? : { maxKeys : number }) : {[ index : string] : string};

export function encode(object : any, separator? : string, equal? : string, name? : string) : string;
export function stringify(object : any, separator? : string, equal? : string, name? : string) : string;