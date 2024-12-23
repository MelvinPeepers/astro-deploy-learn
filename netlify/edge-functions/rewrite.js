export default async (request, context) => {
    const path = context.geo?.country?.code === 'US' ? '/edge/us' : '/edge/not-us';
    return Response.redirect(new URL(path, request.url));
};

export const config = {
    path: '/edge'
};