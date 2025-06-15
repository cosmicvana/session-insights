let currentCookie = null;

document.getElementById('extractBtn').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let url = new URL(tabs[0].url);
        let domain = url.hostname;

        chrome.cookies.getAll({ domain: domain }, (cookies) => {
            let sessionCookie = cookies.find(cookie => 
                cookie.name.toLowerCase() === '__secure-next-auth.session-token' ||
                cookie.name.toLowerCase() === 'next-auth.session-token'
            );

            if (sessionCookie) {
                document.getElementById('cookieValue').value = sessionCookie.value;
                currentCookie = sessionCookie;
            } else {
                document.getElementById('cookieValue').value = 'Session cookie not found.';
                currentCookie = null;
            }
        });
    });
});

document.getElementById('updateBtn').addEventListener('click', () => {
    if (!currentCookie) {
        document.getElementById('status').textContent = 'No session cookie to update.';
        return;
    }

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let url = new URL(tabs[0].url);
        let newValue = document.getElementById('cookieValue').value;

        chrome.cookies.set({
            url: url.origin,
            name: currentCookie.name,
            value: newValue,
            path: currentCookie.path,
            secure: currentCookie.secure,
            httpOnly: currentCookie.httpOnly,
            sameSite: currentCookie.sameSite,
            expirationDate: currentCookie.expirationDate
        }, (cookie) => {
            if (chrome.runtime.lastError) {
                document.getElementById('status').textContent = 'Error updating cookie.';
            } else {
                document.getElementById('status').textContent = 'Session cookie updated successfully!';
            }
        });
    });
});
