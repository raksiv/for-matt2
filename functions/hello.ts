import { api, bucket } from "@nitric/sdk";

const photoApi = api('main');
const photoBucket = bucket('photos').for('reading');

photoApi.get("/photo/:name", async (ctx) => {
    const { name } = ctx.req.params;
    ctx.res.body = photoBucket.image(name).getDownloadUrl();
});
