module.exports = function (shipit) {
  require('shipit-deploy')(shipit);
  require('shipit-pm2')(shipit);

  shipit.initConfig({
    default: {
      workspace: '/tmp/puregympresence',
      deployTo: '/var/www/puregympresence',
      repositoryUrl: 'git@github.com:jegtnes/PureGymPresence.git',
      ignores: ['.git', 'node_modules'],
      rsync: ['--del'],
      keepReleases: 5,
      shallowClone: true,
      pm2: {
        json: '/var/www/pm2conf.json'
      },
    },
    prod: {
      servers: 'deploy@46.101.75.113'
    }
  });

  // shipit.on('init', function() {
  //   return shipit.local('./node_modules/snyk/cli/commands/monitor');
  // });

  shipit.blTask('dependencies', function() {
    return shipit.remote('cd ' + shipit.releasePath + ' && npm install --production')
  });

  shipit.on('updated', function () {
    return shipit.start('dependencies');
  });
};
