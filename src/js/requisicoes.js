export const requireCv = () => fetch('./js/info-cv.json')
    .then(r=>r.json())
    .then(json => json)