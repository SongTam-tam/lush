const isLocal = window.location.hostname === 'localhost';
console.log(isLocal);
export const KAKAO_REDIRECT_URI = isLocal
    ? 'http://localhost:5173/oauth/'
    : 'https://lush-songtams-projects.vercel.app/oauth/';
