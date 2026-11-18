// Sends http:// and www. requests to https://offware.io with a 301, then serves the static assets.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname === "www.offware.io" || url.protocol === "http:") {
      url.hostname = "offware.io";
      url.protocol = "https:";
      url.port = "";
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(request);
  },
};
