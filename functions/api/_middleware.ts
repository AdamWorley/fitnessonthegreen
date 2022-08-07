import mailChannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailChannelsPlugin({
    personalizations: [
        {
            to: [{ name: `ACME Support`, email: `adamworley@hey.com` }],
        },
    ],
    from: {
        name: `ACME Support`,
        email: `support@crawleydogwalkers.com`,
    },
    respondWith: () => new Response(
        `Thank you for submitting your enquiry. A member of the team will be in touch shortly.`
    ),
});