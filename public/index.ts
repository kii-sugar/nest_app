async function getData(url:string, obj:object) {
    const response = await fetch(url, {
        method:'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    })
    const result = await response.json()
    const msg_node:Element = document.querySelector('#msg')
    msg_node.textContent = JSON.stringify(result)
}

const url = '/'

function doAction():void {
    const id_node:HTMLInputElement = document.querySelector('#id')
    const pass_node:HTMLInputElement = document.querySelector('#pass')
    const obj = {
            id:id_node.value,
            pass:pass_node.value
        }
    getData(url, obj)
}
