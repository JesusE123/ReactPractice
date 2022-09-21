import {Http} from './Http'
import * as axios from 'axios';

const mockGet = jest.fn();
const mockPost = jest.fn();

jest.mock('axios',()=>{
    return{
        create: ()=>{
            return {
                get: (url)=>{
                    mockGet(url)    
                },post: (url, body)=>{
                    mockPost(url, body)
                },
                interceptors:{
                    request:{
                        use: ()=>{}
                    }
                }
            }
        } 
    }
})



describe('HttpComponent', ()=>{
    test('deberia realizar la peticion GET', async()=>{
       await Http.get('/test')
       
       expect(mockGet.mock.calls.length).toBe(1)
       expect(mockGet.mock.calls[0][0]).toBe('/test')
    })

    test('deberia realizar la peticion POST', async()=>{
        const body = {
            nombre: 'jesus'
        }
        await Http.post('/test', body)
        console.log(mockPost.mock.calls)
        expect(mockPost.mock.calls.length).toBe(1)
        expect(mockPost.mock.calls[0][0]).toBe('/test')
        expect(mockPost.mock.calls[0][1]).toEqual(body)
    })
})