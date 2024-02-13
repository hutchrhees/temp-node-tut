const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);
//returns this
// {
//     uid: 501,
//     gid: 20,
//     username: 'hutchrhees',
//     homedir: '/Users/hutchrhees',
//     shell: '/bin/zsh'
//   }

// method returns the system uptime in seconds
console.log(`The system uptime is: ${os.uptime()} seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
// returns this
// {
//     name: 'Darwin',
//     release: '21.6.0',
//     totalMem: 17179869184,
//     freeMem: 3502538752
//   }
