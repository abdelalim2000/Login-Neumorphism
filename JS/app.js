const user = document.querySelector(`#username`)
const pass = document.querySelector(`#password`)
const log = document.querySelector(`#login`)

const database = [{
        username: `mohamed`,
        password: `1234`
    },
    {
        username: `ahemd`,
        password: `5678`
    },
    {
        username: `abdelalim`,
        password: `1597`
    }
]

const newsFeed = [{
        username: `abdo`,
        post: `Here we are the champion`
    },
    {
        username: `jhon`,
        post: `Here we are the champion`
    },
    {
        username: `adel`,
        post: `Here we are the champion`
    },
    {
        username: `yousef`,
        post: `Here we are the champion`
    },
]

log.addEventListener('click', () => {
    const usernamePrompt = user.value
    const passwordPrompt = pass.value

    if (check(usernamePrompt, passwordPrompt)) {
        console.log(newsFeed)
        user.value = ""
        pass.value = ""
    } else {
        alert(`Sorry wrong username or password`)
        user.value = ""
        pass.value = ""
    }
})

const check = (username, password) => {
    for (let i = 0; i < database.length; i++) {
        if (database[i].username === username &&
            database[i].password === password) {
            return true
        }
    }
    return false
}