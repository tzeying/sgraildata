const { buildGeoJSON } = require("./scripts/build-geojson");
const { fetchLRTWiki } = require("./scripts/fetch-lrt-wikipedia");
const { fetchMRTWiki } = require("./scripts/fetch-mrt-wikipedia");
const { fetchCityMapper } = require("./scripts/fetch-routes-citymapper");

exports.generate = buildGeoJSON; 

exports.download = async () => {
    try {
        await fetchLRTWiki();
        await fetchMRTWiki();
        await fetchCityMapper();
    } catch (error) {
        console.error(error);
        return false;
    }
}