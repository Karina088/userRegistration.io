'use strict';

addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    let response = await fetch(request)
    let newHeaders = new Headers(response.headers)
    newHeaders.set("Permissions-Policy", "interest-cohort=()")

    return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders
    })
}