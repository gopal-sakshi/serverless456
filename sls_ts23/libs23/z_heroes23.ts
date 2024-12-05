const films = [
    { title: 'baahubali', language: 'telugu', hero: 'prabhas' },
    { title: 'premam', language: 'malayalam', hero: 'nivin pauly' },
    { title: 'varsham', language: 'telugu', hero: 'prabhas' },
    { title: 'naanum rowdy dhaan', language: 'tamil', hero: 'vijay sethupathi' },
]

export function getByLang(lang:string):any[] {
    return films.filter(film => film.language == lang)
}

export function getByHero(hero23:string):any[] {
    return films.filter(film => film.hero == hero23 )
}