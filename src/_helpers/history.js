import { createBrowserHistory } from 'history';

let newHistory = () => {
    try {
        const xhr = new XMLHttpRequest();
        xhr.abort();
    } catch(err) {}
    return createBrowserHistory();
}

export const history = newHistory();
history.listen(() => {
    window.scrollTo(0, 0);
});
