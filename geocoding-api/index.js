export default {
    async fetch(request) {
        let data = {
            lat: request.cf.latitude,
            lon: request.cf.longitude
        };
        return Response.json(data);
    },
};