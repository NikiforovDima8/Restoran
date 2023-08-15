const requesUrl='https://jsonplaceholder.typicode.com/users'

const xhr= new XMLHttpRequest()
xhr.open('GET',requesUrl)
xhr.responseType='json'

xhr.onload=()=>{
    const result=xhr.response[0]
console.log(result.name)
console.log()
}

xhr.send()