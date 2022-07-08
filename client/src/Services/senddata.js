export const sendPostData = (input, target, endpoint) => {
    if (input === undefined) { return };
    fetch(`${target}/api/${endpoint}`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
    })
        .then((res) => res.json())
        .then((data) => { console.log(data) })
}