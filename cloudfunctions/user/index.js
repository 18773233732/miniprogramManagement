const cloud = require('wx-server-sdk');
cloud.init();
const TcbRouter = require('tcb-router');
const db = cloud.database();
const _ = db.command;
exports.main = async (event, context) => {
  const app = new TcbRouter({
    event
  });
  app.router('login', async (ctx, next) => {
    try {
      return {
        "nickName": evnet.nickName,
        "passWord": event.passWord,
      }
      db.collection('Management_user').where({
        nickName: _.eq(event.nickName),
        passWord: _.eq(event.passWord)
      }).get().then(res => {
        console.log(res.data, 11111)
        if (res.data.length == 0) {
          return {
            msg: '登录失败',
            success: false
          }
        }
        return {
          msg: '登录成功',
          success: true
        }
      })
    } catch (e) {
      console.log(e)
    }
    await next();
  })
}
//   app.router('appreciate_inc', async(ctx, next) => {
//     try {
//       db.collection('moments').where({
//         _id: _.eq(event.id),
//         appreciate: {
//           people: _.elemMatch(_.eq(event.openid))
//         }
//       }).get().then(res => {
//         if(res.data.length == 0) {
//           return db.collection('moments').doc(event.id).update({
//             data: {
//               appreciate: {
//                 people: _.push(event.openid),
//                 length: _.inc(1)
//               }
//             }
//           })
//         }
//       })
//     } catch(e) {
//       console.log(e)
//     }
//     await next();
//   })

//   app.router('comment_inc', async(ctx, next) => {
//     try {
//       return db.collection('moments').doc(event.id).update({
//         data:{
//           comment: _.inc(1)
//         }
//       })
//     } catch(e) {
//       console.log(e)
//     }
//     await next();
//   })
//   return app.serve();
// }