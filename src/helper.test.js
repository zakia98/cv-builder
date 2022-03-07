import {capitalise} from './helper'

test('capitalise function works', () => {
    let string = 'hello'
    let capitalisedString = capitalise(string)
    expect(capitalisedString).toEqual('Hello')
})