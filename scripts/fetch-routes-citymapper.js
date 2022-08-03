const { fetch, writeFile } = require('../utils');
path = require('path')
let basePath = path.join(__dirname, '..', 'data')

module.exports.fetchCityMapper = async () => {
  let res = await fetch('https://citymapper.com/api/2/routeinfo', {
    searchParams: {
      route_ids: [
        'SingaporeMRTCircleLine',
        'SingaporeMRTDowntownLine',
        'SingaporeMRTEastwestLine',
        'SingaporeMRTNortheastLine',
        'SingaporeMRTNorthsouthLine',
        'CM_SingaporeMRT_tel',
        'SingaporeLRTBukitPanjangLine',
        'SingaporeLRTPunggolLineEastLoop',
        'SingaporeLRTPunggolLineWestLoop',
        'SingaporeLRTSengkangLineEastLoop',
        'SingaporeLRTSengkangLineWestLoop',
      ].join(','),
      region_id: 'sg-singapore',
      weekend: 1,
      status_format: 'rich',
    },
  });
  const { body } = res;
  writeFile(`${basePath}/downloads/routes.citymapper.json`, body);
}
