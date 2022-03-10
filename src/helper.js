export function capitalise(string) {

    let capitalisedString = string.split('')
    capitalisedString[0] = capitalisedString[0].toUpperCase()
    return capitalisedString.join('')
    
}